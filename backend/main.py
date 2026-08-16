from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.models import PolicyOption, Clause

app = FastAPI(title="K-BELIR Legislative Intelligence Platform", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "K-BELIR Engine API is running"}

@app.get("/api/health")
def health_check():
    return {"status": "ok", "engines": ["law", "knowledge_graph", "impact", "red_team"]}

# Future endpoints for engines will be mounted here
