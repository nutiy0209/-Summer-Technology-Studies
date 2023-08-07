import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { OpenAI } from "langchain/llms/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

const model = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.9,
});

const tools = [
    new SerpAPI(process.env.SERPAPI_API_KEY, {
        q: "Temperature",
        location: "Hsinchu City,Taiwan",
        hl: "en",
        gl: "us",
    }),
    new Calculator(),
];

const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
    verbose: true,
});

const input = "What was the high temperature in Hsinchu yesterday in Celsius? what is the temperature in Fahrenheit";

const result = await executor.call({
    input,
});
