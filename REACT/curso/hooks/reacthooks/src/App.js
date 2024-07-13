import './App.css';
import  { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';
import { HookUseContext } from './components/HookUseContext';


function App() {
  return (
    <div>
      <HookUseContext>
      <h1>Hooks</h1>
        <BrowserRouter>
        <ul>
          <li><Link to = "/">home</Link></li>
          <li><Link to = '/about'>about</Link></li>
        </ul>
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/about" element = {<About/>}/>
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
