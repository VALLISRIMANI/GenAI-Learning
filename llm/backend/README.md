# Backend Setup

## What is this?
FastAPI backend for GenAI LLM chat app. Handles LLM switching, bot logic, session memory, and Markdown output.

## FEATURES
- Supports Ollama (local) and Groq (API) LLMs
- Multiple bot types (Basic, Career, Code, Tutor, Multimode, Temperature Comparison)
- Session-based memory (in-memory)
- Markdown-formatted responses
- Modular API structure

## Architecture
- `api/` — FastAPI endpoints
- `core/` — LLM, memory, prompt logic
- `services/` — Chat services

## Requirements
- Python 3.10+
- `pip install -r requirements.txt`

## Running
```
uvicorn app.main:app --reload
```

## Environment Variables
- `GROQ_API_KEY` (required for Groq provider)
- Add a `.env` file for secrets/config (see `.env.example`).

## Testing
- Add tests with `pytest`.

## Linting
- Use `black` or `flake8` for code style.
