from fastapi import APIRouter, HTTPException
from ..schemas import ChatRequest, ChatResponse
from ..services.chat_service import process_chat

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    try:
        response = process_chat(request)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail="An error occurred while processing your request.")