import { ChatOpenAI } from "langchain/chat_models/openai";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";

const chat = new ChatOpenAI({});

//----------------- 通常對話模式需要加上 memory, BufferMemory 是最基礎的
const memory = new BufferMemory();

// This particular chain automatically initializes a BufferMemory instance if none is provided,
// but we pass it explicitly here. It also has a default prompt.
const chain = new ConversationChain({ llm: chat, memory });

const res1 = await chain.run("Answer briefly. What are the first 3 colors of a rainbow?");
console.log(res1);

// The first three colors of a rainbow are red, orange, and yellow.

const res2 = await chain.run("And the next 4?");
console.log(res2);

// The next four colors of a rainbow are green, blue, indigo, and violet.