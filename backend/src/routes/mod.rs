use axum::{Router, routing::get};

pub fn api_routes() -> Router {
    Router::new().route("/", get(|| async { "TEST CALL" }))
}
