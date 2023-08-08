import * as fs from "fs";
import * as yaml from "js-yaml";
import { OpenAI } from "langchain/llms/openai";
import { JsonSpec } from "langchain/tools";
import { createOpenApiAgent, OpenApiToolkit } from "langchain/agents";

export const run = async () => {
  let data = {};
  try {
    const yamlFile = fs.readFileSync("openai_openapi.yaml", "utf8");
    data = yaml.load(yamlFile);
    if (!data) {
      throw new Error("Failed to load OpenAPI spec");
    }
  } catch (e) {
    console.error(e);
    return;
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  };
  const model = new OpenAI({ temperature: 0 });
  const toolkit = new OpenApiToolkit(new JsonSpec(data), model, headers);
  const executor = createOpenApiAgent(model, toolkit);

  const input = `Make a POST request to openai /completions. The prompt should be 'tell me a joke.'`;
  console.log(`Executing with input "${input}"...`);

  const result = await executor.call({ input });
  console.log(`Got output ${result.output}`);

  console.log(
    `Got intermediate steps ${JSON.stringify(
      result.intermediateSteps,
      null,
      2
    )}`
  );
};

run()
/*
Executing with input "Make a POST request to openai /completions. The prompt should be 'tell me a joke.'"...
Got output The response to the POST request to openai /completions with the prompt 'tell me a joke' is {
  "id": "cmpl-7h9ZHG8AfSsS5Bc3QDYXOGkeJkCq1",
  "object": "text_completion",
  "created": 1690519239,
  "model": "davinci",
  "choices": [
    {
      "text": ",” or “tell me a story",
      "index": 0,
      "logprobs": null,
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 4,
    "completion_tokens": 10,
    "total_tokens": 14
  }
}
Got intermediate steps [
  {
    "action": {
      "tool": "json_explorer",
      "toolInput": "What is the base url for the API?",
      "log": "Action: json_explorer\nAction Input: What is the base url for the API?"
    },
    "observation": "The base url for the API is https://api.openai.com/v1."
  },
  {
    "action": {
      "tool": "json_explorer",
      "toolInput": "What is the path for a POST request to /completions?",
      "log": " I should find the path for the POST request.\nAction: json_explorer\nAction Input: What is the path for a POST request to /completions?"
    },
    "observation": "/paths/~1completions/post"
  },
  {
    "action": {
      "tool": "json_explorer",
      "toolInput": "What are the required parameters for a POST request to /completions?",
      "log": " I should find the required parameters for the POST request.\nAction: json_explorer\nAction Input: What are the required parameters for a POST request to /completions?"
    },
    "observation": "The required parameters for a POST request to /completions are specified in the schema #/components/schemas/CreateCompletionRequest."
  },
  {
    "action": {
      "tool": "requests_post",
      "toolInput": "{\n    \"url\": \"https://api.openai.com/v1/completions\",\n    \"data\": {\n        \"prompt\": \"tell me a joke\",\n        \"max_tokens\": 10,\n        \"temperature\": 0.7,\n        \"top_p\": 0.9\n    }\n}",
      "log": " I now know the parameters needed to make the request.\nAction: requests_post\nAction Input: {\n    \"url\": \"https://api.openai.com/v1/completions\",\n    \"data\": {\n        \"prompt\": \"tell me a joke\",\n        \"max_tokens\": 10,\n        \"temperature\": 0.7,\n        \"top_p\": 0.9\n    }\n}"
    },
    "observation": "{\n    \"error\": {\n        \"message\": \"you must provide a model parameter\",\n        \"type\": \"invalid_request_error\",\n        \"param\": null,\n        \"code\": null\n    }\n}\n"
  },
  {
    "action": {
      "tool": "json_explorer",
      "toolInput": "What is the required parameter for a POST request to /completions?",
      "log": " I should find the required parameter for the POST request.\nAction: json_explorer\nAction Input: What is the required parameter for a POST request to /completions?"
    },
    "observation": "The required parameter for a POST request to /completions is #/components/schemas/CreateCompletionRequest."
  },
  {
    "action": {
      "tool": "requests_post",
      "toolInput": "{\n    \"url\": \"https://api.openai.com/v1/completions\",\n    \"data\": {\n        \"prompt\": \"tell me a joke\",\n        \"max_tokens\": 10,\n        \"temperature\": 0.7,\n        \"top_p\": 0.9,\n        \"model\": \"davinci\"\n    }\n}",
      "log": " I now know the parameters needed to make the request.\nAction: requests_post\nAction Input: {\n    \"url\": \"https://api.openai.com/v1/completions\",\n    \"data\": {\n        \"prompt\": \"tell me a joke\",\n        \"max_tokens\": 10,\n        \"temperature\": 0.7,\n        \"top_p\": 0.9,\n        \"model\": \"davinci\"\n    }\n}"
    },
    "observation": "{\n  \"id\": \"cmpl-7h9ZHG8AfSsS5Bc3QDYXOGkeJkCq1\",\n  \"object\": \"text_completion\",\n  \"created\": 1690519239,\n  \"model\": \"davinci\",\n  \"choices\": [\n    {\n      \"text\": \",” or “tell me a story\",\n      \"index\": 0,\n      \"logprobs\": null,\n      \"finish_reason\": \"length\"\n    }\n  ],\n  \"usage\": {\n    \"prompt_tokens\": 4,\n    \"completion_tokens\": 10,\n    \"total_tokens\": 14\n  }\n}\n"
  }
]
*/