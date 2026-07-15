from fastapi import FastAPI

app = FastAPI(
    title="Bangkok Fire Priority API",
    version="0.1.0",
    description=(
        "Research API for uncertainty-aware fire-response "
        "and inspection prioritization."
    ),
)


@app.get("/health")
def health() -> dict[str, str]:
    return {
        "status": "ok",
        "service": "bangkok-fire-priority-api",
    }