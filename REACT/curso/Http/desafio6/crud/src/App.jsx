import './App.css'
const url = "http://localhost:3000/products";

//import components 
import CadProd from './components/CadProd';
import DeletProd from './components/DeletProd';
import ListProd from './components/ListProd';


function App() {

  return (
    <div className = 'fundo'>
      <CadProd url = {url}/>
      <ListProd url = {url}/>
      <DeletProd url = {url}/>
    </div>
  )
}

export default App
