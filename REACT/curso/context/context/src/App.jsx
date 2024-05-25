import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importando as páginas
import Home from './pages/Home';
import About from './pages/About';
import More from './pages/More';

// Importando o componente NavBar
import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <div className = 'app'>
      {/* Configuração do React Router */}
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/More" element={<More />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
