import OpenAI from 'openai';
import openai from './chatgpt';

const queryOpenAIAPI = async (
  prompt: string,
  chatId: string,
  model: string
) => {
  const res = await openai.chat.completions
    .create({
      model,
      messages: [{ role: 'user', name: chatId, content: prompt }],
      max_tokens: 1000,
    })
    .then((res) => res.choices[0].message.content)
    .catch((err) => {
      if (err instanceof OpenAI.APIError) {
        return `ChatGPT was unable to respond this time! (Error: ${err.message})`;
      } else {
        throw err;
      }
    });

  return res;
};

export default queryOpenAIAPI;
