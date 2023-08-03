import logo from './logo.svg';
import Home from './component/index.jsx';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Todolist from './component/todolist/Index.jsx';


function App() {
  return <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Page2' element={<Todolist/>}/>
    </Routes>
  </div>
}

export default App;
