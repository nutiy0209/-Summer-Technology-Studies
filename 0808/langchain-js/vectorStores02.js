import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { HuggingFaceInferenceEmbeddings } from "langchain/embeddings/hf";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";


const embeddings = new OpenAIEmbeddings();
// const embeddings1 = new OpenAIEmbeddings();


import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

// Create docs with a loader
const loader = new TextLoader("plant.txt");
const docs = await loader.load();

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50
})

const docsoutput = await splitter.splitDocuments( docs )
console.log( docsoutput.length );

// Load the docs into the vector store
const vectorStore = await MemoryVectorStore.fromDocuments(
  docsoutput,
  embeddings
);

// Search for the most similar document
const resultOne = await vectorStore.similaritySearch("樹屬於植物嗎?", 3);

console.log(resultOne);