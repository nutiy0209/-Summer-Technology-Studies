// PromptTemplate
// 用在 與 LLM 配合的 LLMChain 
// LLMChain = llm + prompt
// 
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate} from "langchain/prompts"
import {LLMChain} from "langchain/chains"
const prompt = PromptTemplate.fromTemplate("{color} 是一個溫暖的色彩，當我們") 
const llm = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
 }); 
const chain = new LLMChain({
 llm: llm, 
 prompt: prompt
})
const result = await chain.run({color: "紅色"})    // 只有一個引數，參數名稱可省略
console.log(result)
