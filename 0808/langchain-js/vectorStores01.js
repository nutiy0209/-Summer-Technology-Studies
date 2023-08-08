import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { HuggingFaceInferenceEmbeddings } from "langchain/embeddings/hf";

const embeddings = new OpenAIEmbeddings();


const vectorStore = await MemoryVectorStore.fromTexts(
  ["Hello world", "Good bye", "hello nice world"],
  [{ id: 2 }, { id: 1 }, { id: 3 }],
  embeddings
);

const resultOne = await vectorStore.similaritySearch("飛機", 1);
console.log(resultOne);

/*
  [
    Document {
      pageContent: "Hello world",
      metadata: { id: 2 }
    }
  ]
*/