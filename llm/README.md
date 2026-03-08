# GenAI-Learning / LLM Chat Application

## Overview
A modular, full-stack Generative AI chat application supporting multiple LLM providers (Groq, OpenAI-compatible) with a modern React frontend and FastAPI backend. Designed for extensibility, clean architecture, and developer productivity.

## Architecture Diagram
```mermaid
graph TD
    A[React Frontend] -- REST API --> B[FastAPI Backend]
    B -- API Layer --> C[Service Layer]
    C -- LLM Factory --> D[LLM Provider (Groq/OpenAI)]
    C -- Prompt Factory --> E[Prompt Builder]
    C -- Memory --> F[Conversation Memory]
    D -- Response --> B
    B -- Response --> A
```

## High-Level Working Flow
1. User interacts with the chat UI (React)
2. Frontend sends message to FastAPI backend
3. API layer receives and validates request
4. Service layer processes logic, manages memory, and selects LLM
5. LLM Factory dynamically chooses provider (Groq/OpenAI)
6. Prompt Factory builds prompt
7. LLM provider generates response
8. Response flows back to frontend

## Folder Structure
```
llm/
├── backend/   # FastAPI backend
│   └── app/
│       ├── api/         # API endpoints
│       ├── core/        # LLM, memory, prompt logic
│       ├── services/    # Business logic
│       ├── main.py      # App entrypoint
│       └── schemas.py   # Pydantic models
└── frontend/  # React frontend
    └── src/
        ├── api/         # API integration
        └── components/  # UI components
```

## Technologies Used
- **Backend:** Python, FastAPI, Pydantic
- **Frontend:** React, Vite, JavaScript/JSX
- **LLM Providers:** Groq, OpenAI-compatible APIs
- **Other:** Modular architecture, REST API

## Features
- Model/provider selection
- Temperature control
- Chat interface with memory toggle
- Modular, extensible codebase
- Clean separation of concerns

## LLM Abstraction Layer
The LLM Factory in `core/llm_factory.py` abstracts provider selection. It allows seamless switching between Groq, OpenAI, or other compatible APIs. Developers can add new providers by extending the factory, keeping the service layer and API unchanged.

## Local vs Non-Local LLM APIs
This project demonstrates both local (Ollama) and non-local/cloud (Groq) LLM API integration. You can switch between providers to compare running LLMs on your own machine (Ollama) versus using a remote API (Groq). This is useful for development, cost, and privacy tradeoffs.

---

> For backend and frontend details, see their respective README files.
