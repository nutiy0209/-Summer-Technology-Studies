import { ChatMessageHistory } from "langchain/memory";

const history = new ChatMessageHistory();

await history.addUserMessage("Hi!");

await history.addAIChatMessage("What's up?");

const messages = await history.getMessages();

console.log(messages);

/*
  [
    HumanMessage {
      content: 'Hi!',
    },
    AIMessage {
      content: "What's up?",
    }
  ]
*/
