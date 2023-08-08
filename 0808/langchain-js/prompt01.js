// 檔案包含四個範例：
// 1 ---------------------------
//     A first simple prompt template
// import { PromptTemplate } from "langchain/prompts";

// const prompt = PromptTemplate.fromTemplate(`你好嗎機器人，
// 我喜歡喝{product}!`
// );

// const formattedPrompt = await prompt.format({
//   product:"機油",
// });

// console.log(formattedPrompt);
//2 ----------------------------
//  建構子方法 
import { PromptTemplate } from "langchain/prompts";

// An example prompt with no input variables
const noInputPrompt = new PromptTemplate({
  inputVariables: [],
  template: "Tell me a joke.",
});
const formattedNoInputPrompt = await noInputPrompt.format();

console.log(formattedNoInputPrompt);
// "Tell me a joke."

// non-static function call 
// An example prompt with one input variable
const oneInputPrompt = new PromptTemplate({
  inputVariables: ["adjective"],
  template: "Tell me a {adjective} joke."
})
const formattedOneInputPrompt = await oneInputPrompt.format({
  adjective: "funny",
});

console.log(formattedOneInputPrompt);
"Tell me a funny joke."


// 3 --------------------------
// 建構子方法
// An example prompt with multiple input variables
// const multipleInputPrompt = new PromptTemplate({
//   inputVariables: ["adjective", "content"],
//   template: "Tell me a {adjective} joke about {content}.",
// });
// const formattedMultipleInputPrompt = await multipleInputPrompt.format({
//   adjective: "funny",
//   content: "chickens",
// });

// console.log(formattedMultipleInputPrompt);
// "Tell me a funny joke about chickens."


// 4 ------------------------------------
// static function all
// ['adjective', 'content'] 二個參數的情況

// import { PromptTemplate } from "langchain/prompts";

// const template = "Tell me a {adjective} joke about {content}.";

// const promptTemplate = PromptTemplate.fromTemplate(template);
// console.log(promptTemplate.inputVariables);

// const formattedPromptTemplate = await promptTemplate.format({
//   adjective: "funny",
//   content: "chickens",
// });
// console.log(formattedPromptTemplate);
// "Tell me a funny joke about chickens."