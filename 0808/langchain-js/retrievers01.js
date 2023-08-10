// 基本款 retriever
// 
import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import * as fs from "fs";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { PDFLoader} from "langchain/document_loaders/fs/pdf";

// Initialize the LLM to use to answer the question.
const model = new OpenAI({});
// const text = fs.readFileSync("chatgptisablurjpg.txt", "utf8");
// const loader = new TextLoader("chatgptisablurjpg.txt");
// const text = await loader.load();

const textSplitter = new RecursiveCharacterTextSplitter({ 
  chunkSize: 1000,
  chunkOverlap: 200 });
// const docs = await textSplitter.createDocuments([text]);
const loader = new PDFLoader("inno.pdf", {
  splitPages: true,
});
const doc = await loader.load();
console.log(doc.length)
const docs = await textSplitter.splitDocuments(doc);
console.log(docs.length)

let dds = []
for( let i=10; i<15; i++){
  dds.push(docs[i])
  console.log(docs[i].pageContent)
}
// // Create a vector store from the documents.
// const vectorStore = await HNSWLib.fromDocuments(dds, new OpenAIEmbeddings());
const vectorStore = await MemoryVectorStore.fromDocuments(dds, new OpenAIEmbeddings());

// // Initialize a retriever wrapper around the vector store
const vectorStoreRetriever = vectorStore.asRetriever();

// // Create a chain that uses the OpenAI LLM and HNSWLib vector store.
const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
const res = await chain.call({
  query: "群創的減碳策略?",
});
console.log({ res });
/*
{
  res: {
    text: 'The president said that Justice Breyer was an Army veteran, Constitutional scholar,
    and retiring Justice of the United States Supreme Court and thanked him for his service.'
  }
}
*/