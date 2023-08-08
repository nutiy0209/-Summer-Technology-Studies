// chat_models
// ChatOpenAI
// HumanMessage, AIMessage
// 回話
// ChatOpenAI 
// predictMessage
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, ChatMessage, SystemMessage } from "langchain/schema";

const chat = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});

const result = await chat.predictMessages([
    new HumanMessage("天氣是一個聊天的好話頭，是嗎？")
]
    )

console.log(result.content)