import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/Navbar';
import Home from './component';
import Footer from './component/footer';
import TodoApp from './component/todolist/TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
const t = true;
root.render(
 <React.StrictMode>
  <Navbar />
  <TodoApp/>
  <Footer/>
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
