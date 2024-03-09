import './App.css'
import FirstComponent from './components/FirstComponent'
import Template from './components/Template';
import Events from './components/Events';
import RenderThing from './components/RenderThing';
import Challenge from './components/Challenge'
function App() {

  return (
    //componentes jsx devem sem encapsulados por <></> tgs seja ela vazia ou n
    <div>
      <h1>Fundamentos react</h1>
      <Challenge/>
    </div>
  );
}

export default App
