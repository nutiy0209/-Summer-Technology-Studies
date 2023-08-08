// 使用 Vector Store

import { OpenAI } from "langchain/llms/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";    // Agent Executor
import { SerpAPI, ChainTool } from "langchain/tools";                     // tools
import { Calculator } from "langchain/tools/calculator";                  // tools
import { VectorDBQAChain } from "langchain/chains";                       // chain
import { HNSWLib } from "langchain/vectorstores/hnswlib";                 // vector store
import { OpenAIEmbeddings } from "langchain/embeddings/openai";           // embedding
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"; // splitter
import * as fs from "fs";                                                 // file system

const model = new OpenAI({ temperature: 0 });
/* Load in the file we want to do question answering over */
const text = fs.readFileSync("chatgptisablurjpg.txt", "utf8");
/* Split the text into chunks */
const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 500 , chunkOverlap: 100});
const docs = await textSplitter.createDocuments([text]);
/* Create the vectorstore */
const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());
/* Create the chain */
const chain = VectorDBQAChain.fromLLM(model, vectorStore);

const qaTool = new ChainTool({
    name: "state-of-union-qa",
    description:
      "an illustration of what chatGPT is and what is not. from this article we got inspried that chatGPT is not so powerful.",
    chain: chain,
  });

  const tools = [
    new SerpAPI(process.env.SERPAPI_API_KEY, {
      location: "Austin,Texas,United States",
      hl: "en",
      gl: "us",
    }),
    new Calculator(),
    qaTool,
  ];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
  });
  console.log("Loaded agent.");
  
  const input = `ChatGPT 作為一個專業好用的工具，所給的建議可靠度好嗎?`;
  
  console.log(`Executing with input "${input}"...`);
  
  const result = await executor.call({ input });
  
  console.log(`Got output ${result.output}`);