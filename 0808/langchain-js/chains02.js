import { ChatOpenAI } from "langchain/chat_models/openai";
import { ConversationChain } from "langchain/chains";

const chat = new ChatOpenAI({});
// This chain automatically initializes and uses a `BufferMemory` instance
// as well as a default prompt.
// ------------------------------- 要 Debug 時，可以使用 verbose 
const chain = new ConversationChain({ llm: chat, verbose: true });
const res = await chain.call({ input: "What is ChatGPT?" });

console.log({ res })