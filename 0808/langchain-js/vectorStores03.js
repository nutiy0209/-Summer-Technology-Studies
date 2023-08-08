// 找不出 bug...

import { Chroma } from "langchain/vectorstores/chroma";

// import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter, TextSplitter } from "langchain/text_splitter";

// Create docs with a loader
const loader = new TextLoader("llmwiki.txt");
const docs = await loader.load();
import * as fs from "fs";

const text = fs.readFileSync("chatgptisablurjpg.txt", "utf8");
const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap: 100
})
// const odocs = splitter.splitDocument(docs);
//const odocs = await splitter.splitDocuments(docs)
const odocs = await splitter.createDocuments([text])

// Load the docs into the vector store
const vectorStore = await Chroma.fromDocuments(odocs, new OpenAIEmbeddings(), {
    collectionName: "a-test-collection",
  });
  
// Search for the most similar document
const result = await vectorStore.similaritySearch("Llama", 1);
console.log(result);