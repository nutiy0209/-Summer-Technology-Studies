import { OpenAI } from "langchain/llms/openai";
import { loadQAMapReduceChain } from "langchain/chains";
import { Document } from "langchain/document";
import { TextLoader } from "langchain/document_loaders/fs/text";

// Optionally limit the number of concurrent requests to the language model.
const model = new OpenAI({ temperature: 0, maxConcurrency: 10 });
const chain = loadQAMapReduceChain(model);

const loader = new TextLoader("llmwiki.txt");
const docs = await loader.loadAndSplit();

// const docs = [
//   new Document({ pageContent: "harrison went to harvard" }),
//   new Document({ pageContent: "ankush went to princeton" }),
// ];
const res = await chain.call({
  input_documents: docs,
//   question: "Where did harrison go to college",
  question: "When is LLama proposed?"
});
console.log({ res });