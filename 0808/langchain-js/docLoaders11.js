import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { SerpAPILoader } from "langchain/document_loaders/web/serpapi";

// Initialize the necessary components
const llm = new OpenAI();
const embeddings = new OpenAIEmbeddings();
const apiKey = process.env.SERPAPI_API_KEY;

// Define your question and query
const question = "苗栗明天的天氣如何？";
const query = "苗栗天氣";

// Use SerpAPILoader to load web search results
const loader = new SerpAPILoader({ q: query, apiKey });
const docs = await loader.load();

console.log( {docs})
console.log( docs.length )
// Use MemoryVectorStore to store the loaded documents in memory
// const vectorStore = await MemoryVectorStore.fromDocuments(docs, embeddings);

// // Use RetrievalQAChain to retrieve documents and answer the question
// const chain = RetrievalQAChain.fromLLM(llm, vectorStore.asRetriever());
// const answer = await chain.call({ query: question });

// console.log(answer.text);