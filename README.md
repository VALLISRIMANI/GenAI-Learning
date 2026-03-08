# GenAI-Learning: LLM Chat Application

A full-stack, modular Generative AI chat application supporting multiple LLM providers (Groq, OpenAI-compatible) with a modern React frontend and FastAPI backend.

## Project Highlights
- **Backend:** Python, FastAPI, modular service/API/LLM abstraction
- **Frontend:** React (Vite), modern chat UI, model/temperature/memory controls
- **LLM Providers:** Groq, OpenAI-compatible APIs
- **Features:** Model selection, temperature control, chat interface, memory toggle
- **Architecture:** Clean separation of API, service, and LLM provider layers

## Architecture Overview
```
User ──▶ React Frontend ──▶ FastAPI Backend ──▶ LLM Factory (Groq/OpenAI)
     ◀───────────────────────────────────────────────────────────────────
```
- User interacts with chat UI
- Frontend sends message to backend API
- Backend routes through API/service/LLM abstraction
- LLM provider generates response, returned to frontend

## Folder Structure
```
GenAI-Learning/
│
├── llm/
│   ├── backend/   # FastAPI backend (API, service, core LLM logic)
│   └── frontend/  # React frontend (UI, API integration)
└── ...
```

## How the LLM Abstraction Works
The backend's LLM Factory module allows dynamic selection of LLM providers (Groq, OpenAI, etc.) at runtime. This makes the system extensible and easy to adapt to new providers.

## Getting Started
See `llm/README.md`, `llm/backend/README.md`, and `llm/frontend/README.md` for detailed setup and architecture.

## Local vs Non-Local LLM APIs
This application demonstrates both local (Ollama) and non-local/cloud (Groq) LLM API integration. You can compare the experience of running LLMs on your own machine (Ollama) versus using a remote API (Groq) for flexibility, privacy, and cost.

---

## Next Steps: RAGs (Retrieval-Augmented Generation)
We will be extending this application to support RAGs, enabling the LLM to answer questions using external knowledge sources and documents. Stay tuned for updates!
