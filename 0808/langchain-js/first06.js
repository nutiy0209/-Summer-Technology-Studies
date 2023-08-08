import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const model = new OpenAI({});
const memory = new BufferMemory();
const chain = new ConversationChain({
  llm: model,
  memory,
  verbose: true,
});
const res1 = await chain.call({ input: "Hi! I'm Jim." });

const res2 = await chain.call({ input: "What's my name?" });