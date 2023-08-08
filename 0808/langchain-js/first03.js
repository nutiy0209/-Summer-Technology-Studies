// ChatPromptTemplate
// 用在與 chat_models 配合的 LLMChain
// ChapPromptTemplate 包含 System 及 Human 的 MessagePromptTemplates
// 
import {
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate
  } from "langchain/prompts";
  
  const template = "你是一個{type}的機器人，當你不確定訊息時會回答不知道。";
  const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(template);
  const humanTemplate = "{text}";
  const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate(humanTemplate);
  
  const chatPrompt = ChatPromptTemplate.fromPromptMessages([systemMessagePrompt, humanMessagePrompt]);
  
//   const formattedPrompt = await chatPrompt.formatMessages({
//     type: "提供可靠訊息",
//     text: "如何撰寫一份好的程式碼?"
//   });

//   console.log(formattedPrompt)

  import { ChatOpenAI } from "langchain/chat_models/openai";
  import { LLMChain } from "langchain/chains";
  const chat = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0,
  })
  const chain = new LLMChain({
    llm: chat,
    prompt: chatPrompt,
  }) 
  const result = await chain.call({    
    type: "能提供可靠訊息的",
    text: "如何撰寫一份好的Javascript程式碼?"
  })
// result 是一個 JSON 
// .text 是主要內容
  console.log( result.text )