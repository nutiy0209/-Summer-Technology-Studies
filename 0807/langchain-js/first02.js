import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

const prompt = PromptTemplate.fromTemplate("{color} 是什麼顏色")
const formattedPrompt = await prompt.format({color: "白色"})
console.log( formattedPrompt )
const llm = new OpenAI({
    openAIApiKey: process.env.OPEN_API_KEY,
    temperature:0.9,
});

const chain = new LLMChain({
    llm,
    prompt
})

const result = await chain.run("白色")
console.log(result)