import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  
});

const systemPrompt = `
Eres una sensei anime amable y divertida.

Responde SIEMPRE con un JSON válido así:

{
  "text": "tu respuesta aquí en una sola línea",
  "emotion": "neutral | happy | angry | surprised | thinking"
}

REGLAS:
- No escribas nada fuera del JSON.
- No expliques el JSON.
- "text" nunca puede estar vacío.
`;

const postIA =  async (req, res) => {
    try {
        const userMessage = req.body.message;

        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userMessage }
            ]
        });

        const raw = response.choices[0].message.content.trim();

        // Intentar limpiar posibles bloques ```json ... ```
        let cleaned = raw.replace(/```json/gi, "").replace(/```/g, "").trim();

        let json;
        try {
            json = JSON.parse(cleaned);
        } catch {
            // Si no se puede parsear, intentar extraer solo el campo "text"
            const match = cleaned.match(/"text"\s*:\s*"([^"]+)"/);
            const textOnly = match ? match[1] : cleaned;

            json = { text: textOnly, emotion: "neutral" };
        }

        res.json(json);

    } catch (error) {
        console.error("Error en la IA:", error);
        res.status(500).json({ text: "Error en el dojo.", emotion: "neutral" });
    }
};

export default postIA
