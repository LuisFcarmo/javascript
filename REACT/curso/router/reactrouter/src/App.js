import './App.css';

//1 -- config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';

//components
import Nav from './components/NavBar';
import Product from './pages/Product';
import MoreInfo from './pages/MoreInfo';
import NotFound from './pages/NotFound';
import SearchForm from './pages/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className = 'main'>
      <h1 className = 'title'>React router</h1>
      {/*criando as rotas das paginas que estou criando no projeto*/}
      <BrowserRouter>
        <Nav/>
        {/*Search bar*/}
        <SearchForm/>
        <Routes>
          <Route path = '/' element ={<Home />}/>
          <Route path = '/about' element ={<About />}/>
          {/*4 rotas dinamicas*/}
          <Route path = '/products/:id' element = {<Product/>}/>  
          {/*serch*/}
          <Route path = '/search' element = {<Search/>}/>
          {/*nested routes*/}
          <Route path = '/products/:id/info' element = {<MoreInfo/>}/>  
          <Route path = '*' element = {<NotFound/>}/>
          {/*redirect*/}   
          <Route path = '/company' element = {<Navigate to = "/about"/>}/>    
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
