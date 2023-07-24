// index.js
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

app.get('/', async (req, res) => {
  try {
    const data = await readFileAsync('todoList.txt', 'utf8');
    todoList = JSON.parse(data);
    res.json(todoList);
  } catch (err) {
    console.error(err);
    res.send('Error reading todoList.txt');
  }
});

app.post('/', async (req, res) => {
  const newTodo = req.body.todo;
  console.log(newTodo)
  todoList.push(newTodo);

  try {
    await writeFileAsync('todoList.txt', JSON.stringify(todoList), 'utf8');
    res.send('Todo added successfully');
  } catch (err) {
    console.error(err);
    res.send('Error writing todoList.txt');
  }
});

// 初始化待辦事項陣列
initializeTodoList();

async function initializeTodoList() {
  try {
    const data = await readFileAsync('todoList.txt', 'utf8');
    todoList = JSON.parse(data);
  } catch (err) {
    console.error(err);
    todoList = [];
  }

  if (todoList.length === 0) {
    todoList.push('買牛奶');
    todoList.push('打掃房間');
    todoList.push('寫程式作業');
  }

  try {
    await writeFileAsync('todoList.txt', JSON.stringify(todoList), 'utf8');
    console.log('Todo list initialized');
  } catch (err) {
    console.error(err);
  }
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
