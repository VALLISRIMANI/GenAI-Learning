import os
from langchain_ollama import ChatOllama
from langchain_groq import ChatGroq

def get_llm(provider: str, model: str, temperature: float):
    if provider == "ollama":
        return ChatOllama(
            model=model,
            temperature=temperature
        )

    elif provider == "groq":
        return ChatGroq(
            model=model,
            temperature=temperature,
            api_key=os.getenv("GROQ_API_KEY")
        )
    else:
        raise ValueError(f"Unsupported provider: {provider}")