import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";


const loader = new PDFLoader("inno.pdf", {
    splitPages: true
})

const docs = await loader.load();
console.log(docs.length)

const ddcs = []
for( let i=1; i<4; i++){
    console.log(docs[i].pageContent);
    ddcs.push(docs[i])
}

const vectorStore = await MemoryVectorStore.fromDocuments(ddcs, new OpenAIEmbeddings());

const retriever = vectorStore.asRetriever();
const model = new OpenAI({});
const chain = await RetrievalQAChain.fromLLM( model, retriever)

const result = await chain.call({query: "群創的減碳策略?"})

console.log( result.text )