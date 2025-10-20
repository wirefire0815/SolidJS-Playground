use crate::routes;
use axum::Router;

pub fn create_app() -> Router {
    Router::new().nest("/api", routes::api_routes())
}
