const API_KEY = 'YOUR API KEY HERE!' //Get your key here => https://aistudio.google.com/apikey?authuser=6&_gl=1*1658t2t*_ga*MTY3OTczNjA1MC4xNzYxMjU2NDI5*_ga_P1DBVKWT6V*czE3NjE5MTkzNjckbzckZzAkdDE3NjE5MTkzNjckajYwJGwwJGgxODc0NjgyMjM4

const modelCode = "gemini-2.5-flash";
export async function translateText(text, targetLangCode) {
      const url = `https://generativelanguage.googleapis.com/v1/models/${modelCode}:generateContent?key=${API_KEY}`;

  const prompt = `Translate this text to ${targetLangCode} language.Give only the translation, no explanation.Text: "${text}"`;

  const body = {
    contents: [
      {
        parts: [{ text: prompt }]
      }
    ]
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "Translation failed";
}
        