// 安裝套件 取得 huggingfacehub api key
// npm install @huggingface/inference@1
//

import { HuggingFaceInferenceEmbeddings } from "langchain/embeddings/hf";

const embeddings = new HuggingFaceInferenceEmbeddings({
  apiKey: process.env.HUGGINGFACEHUB_API_KEY, // In Node.js defaults to process.env.HUGGINGFACEHUB_API_KEY
});

const res = await embeddings.embedQuery("真是個好天氣");
const documentRes = await embeddings.embedDocuments(["Hello world", "Bye bye"]);

console.log( res.length)
console.log( res )

console.log( documentRes.length)