// Node 18+ | nano-banana-2-ext-reverse-api-ru
const BASE = "https://api.apimart.ai/v1";
const H = { "Authorization": `Bearer ${process.env.APIMART_KEY}`,
             "Content-Type": "application/json" };

const r = await fetch(`${BASE}/images/generations`, {
  method: "POST", headers: H,
  body: JSON.stringify({ model: "gemini-3.1-flash-image-preview", prompt: "cozy reading nook, warm lamp, cinematic"
     , size: "1:1", resolution: "1K", n: 1}),
});
const d = await r.json();
console.log(JSON.stringify(d, null, 2));
