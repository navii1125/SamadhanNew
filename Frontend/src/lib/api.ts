const BASE = (import.meta.env.VITE_API_URL || "http://127.0.0.1:5000").replace(/\/+$/, "");

export async function classifyText(text: string) {
  const r = await fetch(`${BASE}/classify-text`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!r.ok) throw new Error("classify-text failed");
  return r.json(); // { predicted_label, confidence, text? }
}

export async function detectImage(file: File) {
  const fd = new FormData();
  fd.append("file", file);
  const r = await fetch(`${BASE}/detect-image`, { method: "POST", body: fd });
  if (!r.ok) throw new Error("detect-image failed");
  return r.json(); // { detections:[...], confidence }
}

export async function verifyLabels(textLabel: string, imageLabel: string) {
  const r = await fetch(`${BASE}/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text_label: textLabel, image_label: imageLabel }),
  });
  if (!r.ok) throw new Error("verify failed");
  return r.json(); // { text_label, image_label, result }
}
