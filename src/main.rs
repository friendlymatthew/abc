mod http;

use crate::http::HttpResponse;
use std::collections::HashMap;
use tokio::io::{AsyncReadExt, AsyncWriteExt};
use tokio::net::{TcpListener, TcpStream};

#[tokio::main]
async fn main() {
    println!("Logs from your program will appear here!");

    let listener = TcpListener::bind("127.0.0.1:4221").await.unwrap();

    loop {
        let (socket, _) = listener
            .accept()
            .await
            .expect("Failed to accept connection");

        tokio::spawn(handle_connection(socket));
    }
}

async fn handle_connection(mut socket: TcpStream) {
    let mut buffer = [0u8; 4096];

    if let Err(e) = socket.read(&mut buffer).await {
        println!("Failed to read from socket: {:?}", e);
        return;
    }

    let request = String::from_utf8_lossy(&buffer);

    let path = ingest_path(&request);
    let headers = ingest_headers(&request);

    let response = if path == "/" {
        HttpResponse::new(200, "OK".to_string())
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

fn ingest_path(request: &str) -> &str {
    if let Some(line) = request.lines().next() {
        let chunks: Vec<&str> = line.split_whitespace().collect();

        match chunks.as_slice() {
            &["GET", path, "HTTP/1.1"] => return path,
            _ => {}
        }
    }

    "/"
}

fn ingest_headers(request: &str) -> HashMap<String, String> {
    let mut headers = HashMap::new();
    let mut lines = request.lines();

    lines.next();

    for line in lines {
        let parts: Vec<&str> = line.splitn(2, ": ").collect();

        if parts.len() == 2 {
            headers.insert(parts[0].to_string().to_lowercase(), parts[1].to_string());
        }
    }

    headers
}
