use crate::app::create_app;

mod app;
mod routes;

#[tokio::main]
async fn main() {
    let app = create_app();
    let listener = tokio::net::TcpListener::bind("127.0.0.1:6767")
        .await
        .unwrap();

    axum::serve(listener, app).await.unwrap();
}
