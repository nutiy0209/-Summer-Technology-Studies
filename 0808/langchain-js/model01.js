import { HuggingFaceInference } from "langchain/llms/hf";

const model = new HuggingFaceInference({
//   model: "gpt2",
  model: "ckiplab/gpt2-base-chinese",
  apiKey: process.env.HUGGINGFACEHUB_API_KEY, // In Node.js defaults to process.env.HUGGINGFACEHUB_API_KEY
});
const res = await model.call("下雨天的色彩是灰色的，但是");
console.log({ res });