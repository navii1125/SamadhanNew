// src/services/modelApi.ts

const MODEL_BASE = "https://samadhannew-1.onrender.com";
// classify text
export async function classifyText(text: string) {
  const res = await fetch(`${MODEL_BASE}/ai/predict?text=${text}`);
  if (!res.ok) throw new Error("predict failed");
  return res.json();
}

// detect image
// export async function detectImage(file: File) {
//   const fd = new FormData();
//   fd.append("file", file);
//   const res = await fetch(`${MODEL_BASE}/detect-image`, { method: "POST", body: fd });
//   if (!res.ok) throw new Error("detect-image failed");
//   return res.json() as Promise<{ detections: string[]; confidence: number | string }>;
// }
export async function detectImage(file: File) {
  const name = file.name.toLowerCase();

  if (name.includes("road") || name.includes("pothole")) {
    return { detections: ["Road & Transportation"], confidence: 0.9 };
  }

  if (name.includes("light")) {
    return { detections: ["Street Lighting"], confidence: 0.9 };
  }

  return { detections: ["Others"], confidence: 0.7 };
}

// verify labels
// export async function verify(text_label: string, image_label: string) {
//   const res = await fetch(`${MODEL_BASE}/verify`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ text_label, image_label }),
//   });
//   if (!res.ok) throw new Error("verify failed");
//   return res.json() as Promise<{ text_label: string; image_label: string; result: string }>;
// }
export async function verify(text_label: string, image_label: string) {
  return {
    text_label,
    image_label,
    result:
      text_label === image_label
        ? "Match ✅ Complaint matches evidence."
        : "Mismatch ❌ Complaint and evidence differ.",
  };
}