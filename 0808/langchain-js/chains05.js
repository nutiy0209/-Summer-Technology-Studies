import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

// Create a new LLMChain from a PromptTemplate and an LLM in streaming mode.
// ------------------------- streaming 模式， 流暢模式
const model = new OpenAI({ temperature: 0.9, streaming: true });
const prompt = PromptTemplate.fromTemplate(
  "What is a good name for a company that makes {product}?"
);
const chain = new LLMChain({ llm: model, prompt });

// Call the chain with the inputs and a callback for the streamed tokens
// 將輸出的 token 先列印出來，然後再會到 chain 的回應
// 
const res = await chain.call({ product: "大草帽" }, [
  {
      // 每取得一個token 就呼叫一次
    handleLLMNewToken(token) {
      process.stdout.write(token);
      console.log( " - " + token );
    },
  },
]);
console.log({ res });
// { res: { text: '\n\nKaleidoscope Socks' } }