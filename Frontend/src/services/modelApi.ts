// src/services/modelApi.ts

const MODEL_BASE = (import.meta.env.VITE_MODEL_API || "http://127.0.0.1:5000").replace(/\/+$/, "");

// classify text
export async function classifyText(text: string) {
  const res = await fetch(`${MODEL_BASE}/classify-text`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error("classify-text failed");
  return res.json() as Promise<{ predicted_label: string; confidence: number | string }>;
}

// detect image
export async function detectImage(file: File) {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch(`${MODEL_BASE}/detect-image`, { method: "POST", body: fd });
  if (!res.ok) throw new Error("detect-image failed");
  return res.json() as Promise<{ detections: string[]; confidence: number | string }>;
}

// verify labels
export async function verify(text_label: string, image_label: string) {
  const res = await fetch(`${MODEL_BASE}/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text_label, image_label }),
  });
  if (!res.ok) throw new Error("verify failed");
  return res.json() as Promise<{ text_label: string; image_label: string; result: string }>;
}
