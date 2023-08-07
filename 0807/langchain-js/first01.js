import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, ChatMessage, SystemMessage } from "langchain/schema";

const chat = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature:0.9,
});

const result = await chat.predictMessages([

    new HumanMessage("我現在超不爽，懂嗎?")
]
)

console.log(result.content)