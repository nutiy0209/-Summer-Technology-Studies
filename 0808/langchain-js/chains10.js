// 使用文件的 chains
// 基本
// 
import { OpenAI } from "langchain/llms/openai";
import {
  loadQAStuffChain,
  loadQAMapReduceChain,
  loadQARefineChain
} from "langchain/chains";
import { Document } from "langchain/document";

// 第一種 loadQA~Chain
// This first example uses the `StuffDocumentsChain`.
// 這個 Chain 可以使用 input_documents 及 question
const llmA = new OpenAI({});
const chainA = loadQAStuffChain(llmA);
const docs = [
  new Document({ pageContent: "Harrison went to Harvard." }),
  new Document({ pageContent: "Ankush went to Princeton." }),
];
const resA = await chainA.call({
  input_documents: docs,
  question: "Where did Harrison go to college?",
});
console.log({ resA });
// { resA: { text: ' Harrison went to Harvard.' } }

// 第二種 loadQA~Chain
// This second example uses the `MapReduceChain`.
// Optionally limit the number of concurrent requests to the language model.
const llmB = new OpenAI({ maxConcurrency: 10 });
const chainB = loadQAMapReduceChain(llmB);
const resB = await chainB.call({
  input_documents: docs,
  question: "Where did Harrison go to college?",
});
console.log({ resB });
// { resB: { text: ' Harrison went to Harvard.' } }