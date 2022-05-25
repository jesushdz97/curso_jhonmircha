import './App.css';
import AjaxClass from './components/AjaxClass';
import Events from './components/Events';
// import LifeCycle from './components/LifeCycle';
import RelojHooks from './components/RelojHooks';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizandoElementos from './components/RenderizandoElementos';
import StateClass from './components/StateClass';

function App() {
  return (
    <div className="App">
      <AjaxClass />
      <StateClass />
      <RenderizadoCondicional />
      <RenderizandoElementos />
      <Events />
      {/* <LifeCycle /> */}
      <RelojHooks />
    </div>
  );
}

export default App;
