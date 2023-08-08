import { CSVLoader } from "langchain/document_loaders/fs/csv";

const loader = new CSVLoader("senticnet.csv");

const docs = await loader.load();

console.log(docs.length)
console.log(docs[0].metadata)
console.log(docs[0].pageContent)
console.log(docs[1].metadata)
console.log(docs[1].pageContent)
console.log(docs[2].metadata)
console.log(docs[2].pageContent)

console.log(process.env.SERPAPI_API_KEY)