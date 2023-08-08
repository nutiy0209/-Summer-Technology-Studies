import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate} from "langchain/prompts"
import {LLMChain} from "langchain/chains"
const prompt = PromptTemplate.fromTemplate("{color} 是一個溫暖的色彩，當我們")
const formattedPrompt = await prompt.format({color: "紅色"})

console.log( formattedPrompt)

const llm = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.9,
  });

const chain = new LLMChain({
    llm,
    prompt
})

const result = await chain.run("紅色")

console.log(result)
