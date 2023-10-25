use tokio::io::{AsyncReadExt, AsyncWriteExt};
use tokio::net::{TcpListener, TcpStream};

#[tokio::main]
async fn main()  {
    println!("Logs from your program will appear here!");

    let listener = TcpListener::bind("127.0.0.1:4221").await.unwrap();

    loop {
        let (socket, _) = listener.accept().await.expect("Failed to accept connection");

        tokio::spawn(handle_connection(socket));
    }
}

async fn handle_connection(mut socket: TcpStream) {
    let mut buffer = [0u8; 4096];

    if let Err(e) = socket.read(&mut buffer).await {
        println!("Failed to read from socket: {:?}", e);
        return;
    }

    let response = "HTTP/1.1 200 OK\r\n\r\n";
    if let Err(e) = socket.write_all(response.as_bytes()).await {
        println!("Failed to write response: {:?}", e);
    }
}
