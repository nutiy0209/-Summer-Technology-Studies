import * as fs from "fs/promises";
import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

async function main() {
  try {
    const csvData = await fs.readFile("energy.csv", "utf-8"); // 讀取 "11205.csv" 檔案

    const rows = csvData.split("\n"); // 分割 CSV 行
    const chunkSize = 1000; // 每個片段的大小
    const textChunks = [];

    for (const row of rows) {
      const cols = row.split(","); // 假設 CSV 使用逗號分隔欄位
      if (cols.length >= 2) { // 確保至少有兩個欄位
        const text = cols[1]; // 假設文本在第二個欄位，根據實際情況調整
        for (let i = 0; i < text.length; i += chunkSize) {
          textChunks.push(text.substring(i, i + chunkSize));
        }
      }
    }

    const docs = textChunks.map(chunk => ({ pageContent: chunk }));

    console.log(docs.length);

    const vectorStore = await MemoryVectorStore.fromDocuments(docs, new OpenAIEmbeddings());

    const retriever = vectorStore.asRetriever();
    const model = new OpenAI({});
    const chain = await RetrievalQAChain.fromLLM(model, retriever);

    const result = await chain.call({ query: "隨便亂講一下裡面的內容(長一點)?" });

    console.log(result.text);
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
