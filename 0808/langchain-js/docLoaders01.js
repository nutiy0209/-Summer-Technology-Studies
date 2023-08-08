// npm install -S pdf-parse
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { Document } from "langchain/document";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const loader = new PDFLoader("inno.pdf", {
    splitPages: false,
});

// 預設會分頁 docs[].pageContent
// 
// const loader = new PDFLoader("inno.pdf");  

const docs = await loader.load();

console.log(docs.length)

console.log(docs[0].metadata)
console.log(docs[0].pageContent.length)


const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });
  
  const docOutput = await splitter.splitDocuments(
    docs);

  console.log(docOutput.length)