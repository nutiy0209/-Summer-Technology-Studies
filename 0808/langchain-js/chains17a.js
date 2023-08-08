// You can include or exclude tables when creating the SqlDatabase object to help the chain focus on the tables you want. It can also reduce the number of tokens used in the chain.
//
//
import { DataSource } from "typeorm";
import { OpenAI } from "langchain/llms/openai";
import { SqlDatabase } from "langchain/sql_db";
import { SqlDatabaseChain } from "langchain/chains/sql_db";

/**
 * This example uses Chinook database, which is a sample database available for SQL Server, Oracle, MySQL, etc.
 * To set it up follow the instructions on https://database.guide/2-sample-databases-sqlite/, placing the .db file
 * in the examples folder.
 */
const datasource = new DataSource({
  type: "sqlite",
  database: "Chinook.db",
});

// const db = await SqlDatabase.fromDataSourceParams({
//   appDataSource: datasource,
// });

// 指定特定的欄位，若事先知道 可以節省 prompt 長度以及資源
// --------------------------------
const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: datasource,
    includesTables: ["Track"],
  });

const chain = new SqlDatabaseChain({
  llm: new OpenAI({ temperature: 0 }),
  database: db,
  sqlOutputKey: "sql",
});

const res = await chain.call({ query: "How many tracks are there?" });
/* Expected result:
 * {
 *   result: ' There are 3503 tracks.',
 *   sql: ' SELECT COUNT(*) FROM "Track";'
 * }
 */
console.log(res);