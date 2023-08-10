import * as fs from "fs/promises";
import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

async function main() {
  try {
    const text = await fs.readFile("new.txt", "utf-8"); // 讀取 "new.txt" 檔案

    const chunkSize = 1000; // 每個片段的大小
    const textChunks = [];
    for (let i = 0; i < 2; i += chunkSize) {
      textChunks.push(text.substring(i, i + chunkSize));
    }

    const docs = textChunks.map(chunk => ({ pageContent: chunk }));

    console.log(docs.length);

    const vectorStore = await MemoryVectorStore.fromDocuments(docs, new OpenAIEmbeddings());

    const retriever = vectorStore.asRetriever();
    const model = new OpenAI({});
    const chain = await RetrievalQAChain.fromLLM(model, retriever);

    const result = await chain.call({ query: "最近有什麼颱風?" });

    console.log(result.text);
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
