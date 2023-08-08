import { Document } from "langchain/document";
import { TextLoader} from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const loader = new TextLoader("chatgptisablurjpg.txt")

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200
})

const docs = await loader.load()

const docOutput = await splitter.splitDocuments( docs )

console.log( docOutput.length )
for(let i = 0; i< 5; i++){
    console.log( docOutput[i].metadata)
    console.log( docOutput[i].pageContent)   
}
