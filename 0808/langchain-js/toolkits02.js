// 從 JSON 資料中取出所需要的資料
// 讓我們可以直接從 JSON 資料去問
// 問這個資料的參數有哪些？
// 
import { OpenAI } from "langchain/llms/openai";

import {JsonSpec} from "langchain/tools";
import { JsonToolkit, createJsonAgent } from "langchain/agents";

export const run = async () => {
  let data;
  try {
    data = {
        firstName: 'Jane',
        lastName: 'Smith',
        address: {
          street: '123 Main Street',
          city: 'San Francisco',
          zipCode: '94111',
        },
        emails: ['jane@example.com', 'jane.smith@example.com'],
      };
    if (!data) {
      throw new Error("Failed to load OpenAPI spec");
    }
  } catch (e) {
    console.error(e);
    return;
  }

  const toolkit = new JsonToolkit(new JsonSpec(data));
  const model = new OpenAI({ temperature: 0 });
  const executor = createJsonAgent(model, toolkit);

  const input = `What are the required parameters in the request body to the /completions endpoint?`;

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