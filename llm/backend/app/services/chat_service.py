from langchain_core.output_parsers import StrOutputParser
from app.core.llm_factory import get_llm
from app.core.prompt_factory import get_prompt
from app.core.memory import get_history, save_message

def process_chat(request):
    if request.bot_type == "temperature_comparison_bot":
        temperatures = [0.1, 0.5, 0.9]
        responses = []
        for temp in temperatures:
            prompt = get_prompt(request.bot_type, request.use_memory)
            llm = get_llm(
                provider=request.provider,
                model="llama3.2:1b" if request.provider == "ollama" else "llama-3.3-70b-versatile",
                temperature=temp
            )
            chain = prompt | llm | StrOutputParser()
            inputs = {"input": request.message}
            if request.use_memory and request.session_id:
                inputs["chat_history"] = get_history(request.session_id)
            response = chain.invoke(inputs)
            responses.append(f"## Temperature {temp}\n{response}")
        combined_response = "\n\n".join(responses)
        if request.use_memory and request.session_id:
            save_message(request.session_id, "user", request.message)
            save_message(request.session_id, "assistant", combined_response)
        return combined_response
    else:
        prompt = get_prompt(request.bot_type, request.use_memory)
        llm = get_llm(
            provider=request.provider,
            model="llama3.2:1b" if request.provider == "ollama" else "llama-3.3-70b-versatile",
            temperature=request.temperature
        )
        chain = prompt | llm | StrOutputParser()
        inputs = {"input": request.message}
        if request.use_memory and request.session_id:
            inputs["chat_history"] = get_history(request.session_id)
        response = chain.invoke(inputs)
        if request.use_memory and request.session_id:
            save_message(request.session_id, "user", request.message)
            save_message(request.session_id, "assistant", response)
        return response