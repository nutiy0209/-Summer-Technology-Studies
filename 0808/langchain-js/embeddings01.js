import { OpenAIEmbeddings } from "langchain/embeddings/openai";

/* Create instance */
const embeddings = new OpenAIEmbeddings();

/* Embed queries */
const res = await embeddings.embedQuery("不要喔操你嗎djajdjiqiqklhiosnklhcuihndkuhuhc");
const documentRes = await embeddings.embedDocuments(["Bye bye"]);

console.log( res.length)
console.log( res )

console.log( documentRes.length)