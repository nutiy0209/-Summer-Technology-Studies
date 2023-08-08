import { SimpleSequentialChain, LLMChain } from "langchain/chains";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";

// This is an LLMChain to write a synopsis given a title of a play.
const llm = new OpenAI({ temperature: 0 });
const template = `妳是一個編劇，當我們給妳一個戲劇名稱。妳的工作是為這個劇名給一個概要。 
  劇名: {title}
  編劇: 這個戲劇的概要:`;
const promptTemplate = new PromptTemplate({
  template,
  inputVariables: ["title"],
});
const synopsisChain = new LLMChain({ llm, prompt: promptTemplate });

// This is an LLMChain to write a review of a play given a synopsis.
const reviewLLM = new OpenAI({ temperature: 0 });
const reviewTemplate = `妳是一個聯合報的戲本評論，對於劇本的概要，妳的工作是要評論這一份劇本
 
  劇本概要:
  {synopsis}
  聯合報的劇本評論對這個劇本的批評:`;
const reviewPromptTemplate = new PromptTemplate({
  template: reviewTemplate,
  inputVariables: ["synopsis"],
});
const reviewChain = new LLMChain({
  llm: reviewLLM,
  prompt: reviewPromptTemplate,
});
// 串聯二個 chains 先是劇本概要 然後是 劇本評論
// ------------------------------------------
const overallChain = new SimpleSequentialChain({
  chains: [synopsisChain, reviewChain],
  verbose: true,
});
const review = await overallChain.run("Tragedy at sunset on the beach");
console.log(review);
/*
    variable review contains the generated play review based on the input title and synopsis generated in the first step:

    "Tragedy at Sunset on the Beach is a powerful and moving story of love, loss, and redemption. The play follows the story of two young lovers, Jack and Jill, whose plans for a future together are tragically cut short when Jack is killed in a car accident. The play follows Jill as she struggles to cope with her grief and eventually finds solace in the arms of another man. 
    The play is beautifully written and the performances are outstanding. The actors bring the characters to life with their heartfelt performances, and the audience is taken on an emotional journey as Jill is forced to confront her grief and make a difficult decision between her past and her future. The play culminates in a powerful climax that will leave the audience in tears. 
    Overall, Tragedy at Sunset on the Beach is a powerful and moving story that will stay with you long after the curtain falls. It is a must-see for anyone looking for an emotionally charged and thought-provoking experience."
*/