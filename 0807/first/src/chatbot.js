import React, { useState } from 'react';
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { HumanMessage, ChatMessage, SystemMessage } from "langchain/schema";

const chat = new OpenAI({
    openAIApiKey: "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",
    temperature: 0.9,
});

const Chatbot = () => {
  const [result, setResult] = useState('');

  const handleAskQuestion = async () => {
    try {
      const prompt = PromptTemplate.fromTemplate("{question}");
      const formattedPrompt = await prompt.format({ question: "我現在超不爽，懂嗎?" });

      const llm = new OpenAI({
        openAIApiKey: "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",
        temperature: 0.9,
      });

      const chain = new LLMChain({
        llm,
        prompt: formattedPrompt,
      });

      const answer = await chain.run("我現在超不爽，懂嗎?");
      setResult(answer);
    } catch (error) {
      console.error('Error:', error);
      setResult('抱歉，無法回答這個問題。');
    }
  };
  
  return (
    <div>
      <h1>問答機器人</h1>
      <button onClick={handleAskQuestion}>問問題</button>
      {result && (
        <div>
          <h2>回答：</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
