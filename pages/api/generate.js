import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.question),
    // temperature: 20,
    max_tokens: 4000
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(question) {
  const capitalizedQuestion =
    question[0].toUpperCase() + question.slice(1).toLowerCase();
    return `${capitalizedQuestion}`;
}
