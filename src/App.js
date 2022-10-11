import { Route, Routes } from "react-router-dom";
import {HomePage} from 'components/HomePage/HomePage';
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/register' element={<Register/>} />

    </Routes>
    </div>
    
  );
}

export default App;