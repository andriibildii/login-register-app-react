import { Route, Routes } from "react-router-dom";
import {HomePage} from 'pages/HomePage/HomePage';
import { LoginPage } from "./pages/Login/Login";
import { RegisterPage } from "./pages/Register/Register";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/login' element={<LoginPage/>} />
      <Route exact path='/register' element={<RegisterPage/>} />

    </Routes>
    </div>
    
  );
}

export default App;