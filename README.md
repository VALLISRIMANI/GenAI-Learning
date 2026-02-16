# 🚀 Unified LLM Application (GenAI Learning Project)

A full-stack **Generative AI application** designed to explore, understand, and demonstrate how modern **LLM-powered systems** are built in real-world settings.

This project focuses on **clean architecture**, **multi-LLM support**, **prompt specialization**, **temperature tuning**, and **optional conversational memory**, using **free and open tools** wherever possible.

---

## 📌 Project Goals

* Understand how LLM-based applications work end-to-end
* Move beyond notebooks into **production-style architecture**
* Learn multi-provider LLM orchestration (local + cloud)
* Build a strong foundation for **RAG** and **Agentic AI**
* Create a portfolio-ready, extensible GenAI system

---

## ✨ Key Features

* 🔁 **Multiple AI Assistants (Bots)**

  * Basic Chatbot
  * Career Assistant
  * Code Assistant
  * Tutor Bot
  * Multi-Mode Assistant

* 🔄 **Multi-LLM Support**

  * **Ollama** (local, open-source models)
  * **Groq** (cloud-based, high-performance inference)

* 🎛 **Dynamic Controls**

  * Temperature (deterministic ↔ creative)
  * With or without conversational memory
  * Runtime provider switching

* 🧠 **Prompt Specialization**

  * Each bot has a dedicated system prompt
  * Centralized prompt factory

* 🧱 **Clean Architecture**

  * Frontend / Backend separation
  * LLM factory & prompt factory patterns
  * Stateless and stateful chat modes

---

## 🧰 Tech Stack

### Frontend

* React
* CSS (custom styling)
* Vite (development tooling)

### Backend

* Python
* FastAPI
* LangChain
* Pydantic

### LLM Providers

* Ollama (local inference)
* Groq (API-based inference)

---

## 🗂 Project Structure

```
GenAI-Learning/
│
├── llm/
│   ├── backend/
│   │   └── app/
│   │       ├── main.py
│   │       ├── schemas.py
│   │       ├── api/
│   │       │   └── chat.py
│   │       ├── core/
│   │       │   ├── llm_factory.py
│   │       │   ├── prompt_factory.py
│   │       │   ├── memory.py
│   │       │   └── config.py
│   │       └── services/
│   │           └── chat_service.py
│   │
│   └── frontend/
│       └── src/
│           ├── components/
│           ├── api/
│           └── App.jsx
│
├── rag/            # (planned)
├── agentic_ai/     # (planned)
│
├── .env
├── requirements.txt
└── README.md
```

---

## 🏗 Architecture Explanation

### High-Level Architecture

```
Frontend (React)
     |
     v
FastAPI Backend
     |
     v
Prompt Factory  →  LLM Factory
     |
     v
LLM (Ollama / Groq)
     |
     v
Response → Frontend
```

---

## 🔄 End-to-End Request Flow

1. **User Interaction (Frontend)**

   * User selects:

     * Bot type
     * LLM provider (Ollama / Groq)
     * Temperature
     * Memory (on/off)
   * User sends a message

2. **API Request**

   * Frontend sends a POST request to `/chat`
   * Payload includes:

     ```json
     {
       "message": "...",
       "bot_type": "career",
       "provider": "groq",
       "temperature": 0.3,
       "use_memory": true,
       "session_id": "abc123"
     }
     ```

3. **Backend Processing**

   * Request validated using Pydantic schemas
   * `prompt_factory` selects the correct system prompt
   * `llm_factory` instantiates the chosen LLM provider
   * Temperature is applied dynamically

4. **Memory Handling**

   * If memory is enabled:

     * Previous messages are retrieved using `session_id`
     * Conversation history is injected into the prompt
   * If memory is disabled:

     * Each request is handled independently

5. **LLM Invocation**

   * LangChain orchestrates:

     * Prompt construction
     * Memory (if enabled)
     * LLM execution

6. **Response Delivery**

   * Model generates output
   * Backend returns response as JSON
   * Frontend updates chat UI

---

## 🧠 Memory vs No-Memory Mode

| Mode           | Description                                         |
| -------------- | --------------------------------------------------- |
| Without Memory | Each message is processed independently (stateless) |
| With Memory    | Conversation history is preserved per session       |

Memory is currently implemented using an in-memory store and can be easily upgraded to Redis or a database.

---

## 🔀 Multi-LLM Strategy

| Provider | Purpose                                  |
| -------- | ---------------------------------------- |
| Ollama   | Free, local inference, privacy-friendly  |
| Groq     | Cloud inference, high speed, scalability |

This dual approach allows:

* Learning without cost
* Easy transition to production-ready APIs

---

## 🚀 Deployment Notes

* **Backend**: Deployable on Render / Railway
* **Frontend**: Deployable on Vercel / Netlify
* **Ollama**: Runs locally (not deployed)
* **Groq**: API-based (cloud)

---

## 🛣 Roadmap

* [ ] Retrieval-Augmented Generation (RAG)

  * College chatbot using documents
  * Vector databases (FAISS / Chroma)
* [ ] Agentic AI workflows

  * Planning
  * Tool usage
  * Multi-agent collaboration
* [ ] Authentication & user sessions
* [ ] Persistent memory storage
* [ ] Monitoring & evaluation

---

## 📖 Learning Outcome

This project demonstrates:

* Real-world GenAI system design
* LLM orchestration beyond basic prompts
* Backend–frontend integration
* Scalable and extensible architecture

It serves as a **strong foundation** for advanced GenAI applications.