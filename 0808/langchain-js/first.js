// LLM 模式
// 完成, 接話
// predict
import { OpenAI } from "langchain/llms/openai";

const llm = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});

const result = await llm.predict("氣候變遷危機將是一個巨大的挑戰")

console.log(result)