// import { initializeAgentExecutorWithOptions } from "langchain/agents";
// import { OpenAI } from "langchain/llms/openai";
// import { SerpAPI } from "langchain/tools";
// import { Calculator } from "langchain/tools/calculator";

// const model = new OpenAI({ temperature: 0 });
// const tools = [
//   new SerpAPI(process.env.SERPAPI_API_KEY, {
//     location: "Austin,Texas,United States",
//     hl: "en",
//     gl: "us",
//   }),
//   new Calculator(),
// ];

// const executor = await initializeAgentExecutorWithOptions(tools, model, {
//   agentType: "zero-shot-react-description",
//   verbose: true,
// });

// const input = `台灣的副總統的老婆是誰? What is her current age raised to the 0.23 power?`;

// const result = await executor.call({ input });


import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

export const run = async () => {
  const model = new ChatOpenAI({ temperature: 0 });
  const tools = [
    new SerpAPI(process.env.SERPAPI_API_KEY, {
      location: "Austin,Texas,United States",
      hl: "en",
      gl: "us",
    }),
    new Calculator(),
  ];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "chat-zero-shot-react-description",
    returnIntermediateSteps: true,
  });
  console.log("Loaded agent.");

  const input = `Who is Olivia Wilde's boyfriend? What is his current age raised to the 0.23 power?`;

  console.log(`Executing with input "${input}"...`);

  const result = await executor.call({ input });

  console.log(`Got output ${result.output}`);

  console.log(
    `Got intermediate steps ${JSON.stringify(
      result.intermediateSteps,
      null,
      2
    )}`
  );
};