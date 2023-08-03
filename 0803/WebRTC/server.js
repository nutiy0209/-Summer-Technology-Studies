const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");


const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {cors:true});

io.on("connection", (socket) => {
    console.log(`socket 用戶連接 ${socket.id}`);
    socket.on("disconnect", (reason)=>{
        console.log(`socket 用戶離開 ${socket.id}`);
    });
    socket.join("room1");
    socket.on("message", (data) => {
        io.to("room1").emit("message", data);
    });
    socket.on("private message", (anotherSocketID, msg) => {
        io.to(anotherSocketID).emit("private message", socket.id, msg);
    });
    // socket.on("hello", (arg) => {
    //     console.log(arg);
    // });
});



httpServer.listen(1820, ()=>{
    console.log("Socket伺服器已啟用監聽在http://localhost:1820");
});
