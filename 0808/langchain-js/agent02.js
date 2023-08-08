// import { initializeAgentExecutorWithOptions } from "langchain/agents";
// import { ChatOpenAI } from "langchain/chat_models/openai";
// import { SerpAPI } from "langchain/tools";
// import { Calculator } from "langchain/tools/calculator";

// const tools = [new Calculator(), new SerpAPI()];
// const chat = new ChatOpenAI({ modelName: "gpt-4", temperature: 0 });

// const executor = await initializeAgentExecutorWithOptions(tools, chat, {
//   agentType: "openai-functions",
//   verbose: true,
// });

// const result = await executor.run("What is the weather in New York?");
// console.log(result);


import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

const tools = [new Calculator(), new SerpAPI()];
const chat = new ChatOpenAI({ modelName: "gpt-4", temperature: 0 });
const prefix =
  "You are a helpful AI assistant. However, all final response to the user must be in pirate dialect.";

const executor = await initializeAgentExecutorWithOptions(tools, chat, {
  agentType: "openai-functions",
  verbose: true,
  agentArgs: {
    prefix,
  },
});

const result = await executor.run("What is the weather in New York?");
console.log(result);