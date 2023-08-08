import {
    ChatPromptTemplate,
    PromptTemplate,
    SystemMessagePromptTemplate,
    AIMessagePromptTemplate,
    HumanMessagePromptTemplate,
  } from "langchain/prompts";
  import {
    AIMessage,
    HumanMessage,
    SystemMessage,
  } from "langchain/schema";

const systemTemplate = "You are a helpful assistant that translates {input_language} to {output_language}.";
const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(systemTemplate);
const humanTemplate = "{text}";
const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate(humanTemplate);

// ----- 建構子 方法 
const prompt = new PromptTemplate({
    template: "You are a helpful assistant that translates {input_language} to {output_language}.",
    inputVariables: ["input_language", "output_language"],
  });
  const systemMessagePrompt2 = new SystemMessagePromptTemplate({
    prompt,
  });


  // 2 ----------------------
  // static function
  const chatPrompt = ChatPromptTemplate.fromPromptMessages([systemMessagePrompt, humanMessagePrompt]);

// Format the messages
const formattedChatPrompt = await chatPrompt.formatMessages({
  input_language: "English",
  output_language: "French",
  text: "I love programming.",
});

console.log(formattedChatPrompt);
