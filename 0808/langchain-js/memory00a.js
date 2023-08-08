import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { HumanMessage, AIMessage } from "langchain/schema";
import { ConversationChain } from "langchain/chains";

const pastMessages = [
  new HumanMessage("My name's Jonas"),
  new AIMessage("Nice to meet you, Jonas!"),
];

const memory = new BufferMemory({
  chatHistory: new ChatMessageHistory(pastMessages),
});
const llm = new ChatOpenAI( {});

const chain = new ConversationChain({
    llm:llm,
    memory:memory,
})
const res = await chain.call({input: "what is my name?"})

console.log( res )