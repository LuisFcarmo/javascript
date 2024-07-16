import './App.css';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// Pages
import Home from "./pages/home/Home";
import Login from './pages/auth/Login';
import EditProfile from './pages/editProfile/EditProfile';
import Register from './pages/auth/Register';
import Profile from './pages/profile/Profile';

// Components
import NavBar from "./component/NavBar";
import Footer from './component/Footer';

//hooks
import { useAuth } from './hook/useAuth';

function App() {
  const { auth, loading } = useAuth()

  console.log(loading)
  if(loading) {
    return <p>carregando...</p>
  }

  return (
    <div className='MainProg'>
      <BrowserRouter>
        <NavBar />
        <div className='MainContent'>
          <Routes>
            <Route path="/" element={auth ? <Home /> : <Navigate to = "/login"/>}/>
            <Route path="/login" element={!auth ? <Login/> : <Navigate to = "/"/>}/>
            <Route path="/register" element={!auth ? <Register/> : <Navigate to = "/"/>}/>
            <Route path="/edit" element={auth ? <EditProfile/> : <Navigate to = "/login"/>}/>
            <Route path="/profile" element={auth ? <Profile/> : <Navigate to = "/login"/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
