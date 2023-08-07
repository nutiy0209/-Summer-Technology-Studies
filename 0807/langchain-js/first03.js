import {
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate
} from "langchain/prompts";

const template = "你是一個能{type}的機器人，當你不確定訊息時會回答不知道。";
const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(template);

const humanTemplate = "{text}";
const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate(humanTemplate);

const chatPrompt = ChatPromptTemplate.fromPromptMessages([systemMessagePrompt, humanMessagePrompt]);

// const formattedPrompt = await chatPrompt.formatMessages({
//     type: "提供可靠訊息",
//     text: "如何撰寫一份好的程式碼?"
// });

import { ChatOpenAI } from "langchain/chat_models/openai";
import { LLMChain } from "langchain/chains";

const chat = new ChatOpenAI({
    openAIApiKey: process.env.OPEN_API_KEY,
    temperature:0,
})

const chain = new LLMChain({
    llm: chat,
    prompt: chatPrompt,
})

const result = await chain.call({
    type: "帥氣的",
    text: "如何撰寫一份好的javascript程式碼?"
})
console.log(result.text)



