pub struct HttpResponse {
    status_code: u16,
    headers: Vec<(String, String)>,
    body: String,
}

impl HttpResponse {
    pub fn new(status_code: u16, body: String) -> Self {
        Self {
            status_code,
            headers: Vec::new(),
            body,
        }
    }

    pub fn add_header(mut self, key: &str, value: &str) -> Self {
        self.headers.push((key.to_string(), value.to_string()));

        self
    }

    pub fn to_bytes(&self) -> Vec<u8> {
        let mut response = format!("HTTP/1.1 {} OK\r\n", self.status_code);

        for (key, value) in &self.headers {
            response.push_str(&format!("{}: {}\r\n", key, value));
        }

        response.push_str("\r\n");
        response.push_str(&self.body);

        response.into_bytes()
    }
}
