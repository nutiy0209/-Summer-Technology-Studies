import { Document } from "langchain/document";

const doc = new Document({ pageContent: "foo" });

console.log( doc.pageContent)
console.log( doc.metadata)

const doc1 = new Document({ pageContent: "foo", metadata: { source: "1" } });

console.log( doc1.metadata)