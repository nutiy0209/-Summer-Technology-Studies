import { OpenAI } from "langchain/llms/openai";
import { BufferWindowMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const model = new OpenAI({});
const memory = new BufferWindowMemory({ k: 1 });
const chain = new ConversationChain({ llm: model, memory: memory });
const res1 = await chain.call({ input: "Hi! My name is Jim." });
console.log({ res1 });
console.log( await chain.call({ input: "what is beer?" }));
console.log( await chain.call({ input: "what is apple?" }));
console.log( await chain.call({ input: "Do you remember my name?" }));
