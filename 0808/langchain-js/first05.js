// 可以叫用 tools 的 agent (openai-functions)
//
//
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

const executor = await initializeAgentExecutorWithOptions(
  [new Calculator(), new SerpAPI()],
  new ChatOpenAI({ modelName: "gpt-4-0613", temperature: 0 }),
  {
    agentType: "openai-functions",
    verbose: true,
  }
);

const result = await executor.run("新竹市今天的氣溫是多少?");