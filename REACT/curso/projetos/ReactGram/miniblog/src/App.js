import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth';

//hoocks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';


//components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//context
import { AuthProvider } from './context/AuthContext';
import CreatePost from './pages/CreatePost/CreatePost';
import DashBoard from './pages/DashBoard/DashBoard';

function App() {
  const [ user, setUser ] = useState(undefined)
  const { auth } = useAuthentication()

  
  const loadingUser = user === undefined;
 
  useEffect (() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth])

  if(loadingUser) {
    return <p>Pagina carregando...</p>
  } 
  const authValue = {
    user,
    setUser,
  }

  return (
    //pages
    <div className="container">
      <AuthProvider value = { authValue }>
        <BrowserRouter>
          <NavBar/>
          <div className = 'container-prc'>
            <Routes>
              <Route path = '/' element = {<Home/>}/>
              <Route path = '/about' element = {<About/>}/>
              <Route path = '/login' element = {!user ? <Login/> : <Navigate to= "/"/>}/>
              <Route path = '/register' element = {!user ? <Register/> : <Navigate to = "/"/>}/>
              <Route path = '/posts/create' element = { user ?  <CreatePost/> : <Navigate to = "/register"/> }/>
              <Route path = '/dashboard' element = { user ? <DashBoard/> : <Navigate to = "/register"/>}/>
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
