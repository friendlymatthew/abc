mod http;

use crate::http::HttpResponse;
use std::collections::HashMap;
use std::env;
use std::fs::File;
use std::io::{Error, Read, Write};
use std::io::ErrorKind::Other;
use std::path::PathBuf;
use tokio::io::{AsyncReadExt, AsyncWriteExt};
use tokio::net::{TcpListener, TcpStream};


#[tokio::main]
async fn main() {
    println!("Logs from your program will appear here!");

    let args: Vec<String> = env::args().collect();
    let directory = args.iter().position(|phr| phr == "--directory")
        .and_then(|idx| args.get(idx + 1).cloned())
        .unwrap_or_default();

    let listener = TcpListener::bind("127.0.0.1:4221").await.unwrap();

    loop {
        let (socket, _) = listener
            .accept()
            .await
            .expect("Failed to accept connection");

        let directory = directory.clone();

        tokio::spawn(handle_connection(socket, directory));
    }
}

async fn handle_connection(mut socket: TcpStream, directory: String) {
    let mut buffer = Vec::new();
    let mut temp_buffer = [0u8; 4096];
    let mut total_read = 0;

    loop {
        match socket.read(&mut temp_buffer).await {
            Ok(n) if n == 0 => {
                break;
            }
            Ok(n) => {
                buffer.extend_from_slice(&temp_buffer[..n]);
                total_read += n;
            }
            Err(e) => {
                println!("Failed to read from socket: {:?}", e);
                return;
            }
        }

        if total_read < temp_buffer.len() {
            break;
        }
    }

    let request = String::from_utf8_lossy(&buffer);
    let (method, path) = ingest_path(&request);
    let (headers, body) = ingest_headers_and_body(&request);

    let response = if path == "/" {
        HttpResponse::new(200, "OK".to_string())
    } else if let Some(filename) = path.strip_prefix("/files/") {
        match ingest_file(&directory, filename, method, &body) {
             Ok((status_code, contents)) => {
                 let length = contents.len();
                 HttpResponse::new(status_code, contents)
                     .add_header("Content-Type", "application/octet-stream")
                     .add_header("Content-Length", &length.to_string())
             },
            Err(_) => HttpResponse::new(404, "Not Found".to_string())
        }
    } else if let Some(echo) = path.strip_prefix("/echo/") {
        HttpResponse::new(200, echo.to_string())
            .add_header("Content-Type", "text/plain")
            .add_header("Content-Length", &echo.len().to_string())
    } else if path == "/user-agent" {
        if let Some(user_agent) = headers.get("user-agent") {
            HttpResponse::new(200, user_agent.to_string())
                .add_header("Content-Type", "text/plain")
                .add_header("Content-Length", &user_agent.len().to_string())
        } else {
            HttpResponse::new(400, "Bad Request".to_string())
        }
    } else {
        HttpResponse::new(404, "Not Found".to_string())
    };

    if let Err(e) = socket.write_all(&response.to_bytes()).await {
        println!("Failed to write response: {:?}", e);
    }
}

fn ingest_file(directory: &str, filename: &str, method: &str, body: &str) ->  Result<(u16, String), Error> {
    let mut path = PathBuf::from(directory);
    path.push(filename);

    if method == "GET" {
        let mut file = File::open(path)?;
        let mut contents = String::new();
        file.read_to_string(&mut contents)?;

        Ok((200, contents))
    } else if method == "POST" {
        let mut file = File::create(path)?;
        file.write_all(body.as_bytes())?;
        Ok((201, "Created".to_string()))
    } else {
        Err(Error::new(Other, "unsupported!"))
    }
}

fn ingest_path(request: &str) -> (&str, &str) {
    if let Some(line) = request.lines().next() {
        let chunks: Vec<&str> = line.split_whitespace().collect();

        match chunks.as_slice() {
            &["GET", path, "HTTP/1.1"] => return ("GET", path),
            &["POST", path, "HTTP/1.1"] => return ("POST", path),
            _ => {}
        }
    }

    ("", "/")
}

fn ingest_headers_and_body(request: &str) -> (HashMap<String, String>, String) {
    let mut headers = HashMap::new();
    let mut lines = request.lines();

    lines.next();

    let mut body = String::new();
    let mut is_body = false;

    for line in lines {
        if is_body {
            body.push_str(line);
        } else if line.is_empty() {
            is_body = true;
            continue;
        } else {
            let parts: Vec<&str> = line.splitn(2, ": ").collect();
            if parts.len() == 2 {
                headers.insert(parts[0].to_string().to_lowercase(), parts[1].to_string());
            }
        }
    }

    if body.ends_with("\n") {
        body.pop();
    }

    body.trim_end_matches('\0').to_string();

    println!("Expected content length: {}", headers.get("content-length").unwrap_or(&"0".to_string()));
    println!("Actual content length: {}", body.len());


    (headers, body)
}
