const API_URL = import.meta.env.VITE_API_URL;

export async function sendMessage(payload) {
  try {
    const res = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      let msg = "Backend error";
      try {
        const data = await res.json();
        if (data && data.detail) msg = data.detail;
      } catch {}
      return { error: msg };
    }
    return await res.json();
  } catch (err) {
    return { error: "Network error. Please try again." };
  }
}