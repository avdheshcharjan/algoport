import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import Home from './home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home />} ></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
