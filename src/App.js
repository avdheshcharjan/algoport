import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './home';

function App() {
  return (
    <BrowserRouter  >
      <Routes>
        <Route exact path='/' element={<Home />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
