import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter, TextSplitter } from "langchain/text_splitter";

// Create docs with a loader
const loader = new TextLoader("llmwiki.txt");
const docs = await loader.load();

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap: 100
})
// const odocs = splitter.splitDocument(docs);
const odocs = await splitter.splitDocuments(docs)
// Load the docs into the vector store
const vectorStore = await HNSWLib.fromDocuments(odocs, new OpenAIEmbeddings());

// Search for the most similar document
const result = await vectorStore.similaritySearch("Llama", 1);
console.log(result);