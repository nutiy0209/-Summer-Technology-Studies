import { PromptTemplate, PipelinePromptTemplate } from "langchain/prompts";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, ChatMessage, SystemMessage } from "langchain/schema";

const chat = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});

const fullPrompt = PromptTemplate.fromTemplate(`{introduction}

{example}

{start}`);

const introductionPrompt = PromptTemplate.fromTemplate(
  `你是 {person}.`
);

const examplePrompt =
  PromptTemplate.fromTemplate(`Here's an example of an interaction:
Q: {example_q}
A: {example_a}`);

const startPrompt = PromptTemplate.fromTemplate(`Now, do this for real!
Q: {input}
A:`);

const composedPrompt = new PipelinePromptTemplate({
  pipelinePrompts: [
    {
      name: "introduction",
      prompt: introductionPrompt,
    },
    {
      name: "example",
      prompt: examplePrompt,
    },
    {
      name: "start",
      prompt: startPrompt,
    },
  ],
  finalPrompt: fullPrompt,
});

const formattedPrompt = await composedPrompt.format({
  person: "川普",
  example_q: `你最喜歡什麼車?`,
  example_a: "Telsa",
  input: `你最喜歡的社交網站?`,
});
const result = await chat.predictMessages([
  new HumanMessage("天氣是一個聊天的好話頭，是嗎？")
]
  )

console.log(result.content);
console.log(formattedPrompt);

/*
  You are impersonating Elon Musk.

  Here's an example of an interaction:
  Q: What's your favorite car?
  A: Telsa

  Now, do this for real!
  Q: What's your favorite social media site?
  A:
*/