
const express = require('express');

const fs = require('fs');

const { promisify } = require('util');

const app = express();

const port = 3000;

const bodyParser = require('body-parser');




const readFileAsync = promisify(fs.readFile);

const writeFileAsync = promisify(fs.writeFile);






// 虛擬的待辦事項陣列，初始化為空陣列

let todoList = [];

app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();

});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// 處理根路由的 GET 請求

app.get('/', async (req, res) => {

  try {

    // 讀取 todolist.txt 檔案

    const data = await readFileAsync('todolist.txt', 'utf8');
    console.log(data)
    // 解析 todolist.txt 中的待辦事項

    todoList = JSON.parse(data);

    res.json(todoList);

  } catch (err) {

    console.error(err);

    res.send('Error reading todolist.txt');

  }

});




// 處理根路由的 POST 請求

app.post('/', async (req, res) => {

  const newTodo = req.body.todo;

  console.log(newTodo)

  todoList.push(newTodo);




  try {

    // 將更新後的待辦事項陣列寫入 todolist.txt 檔案

    await writeFileAsync('todolist.txt', JSON.stringify(todoList), 'utf8');

    res.send('Todo added successfully');

  } catch (err) {

    console.error(err);

    res.send('Error writing todolist.txt');

  }

});




// 初始化待辦事項陣列

initializeTodoList();




// 初始化待辦事項陣列的函式

async function initializeTodoList() {

  try {

    // 讀取 todolist.txt 檔案

    const data = await readFileAsync('todolist.txt', 'utf8');

    // 解析 todolist.txt 中的待辦事項

    todoList = JSON.parse(data);

  } catch (err) {

    console.error(err);

    todoList = [];

  }




  if (todoList.length === 0) {

    // 如果待辦事項陣列是空的，加入一些初始的待辦事項

    todoList.push('我');

    todoList.push('喜');

    todoList.push('歡');

    todoList.push('你');

  }




  // 寫入初始化後的待辦事項陣列到 todolist.txt 檔案

  try {

    await writeFileAsync('todolist.txt', JSON.stringify(todoList), 'utf8');

    console.log('Todo list initialized');

  } catch (err) {

    console.error(err);

  }

}




app.listen(port, () => {

  console.log(`Server listening on port ${port}`);

});


