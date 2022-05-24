import './App.css';
import Events from './components/Events';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizandoElementos from './components/RenderizandoElementos';
import StateClass from './components/StateClass';

function App() {
  return (
    <div className="App">
      <StateClass />
      <RenderizadoCondicional />
      <RenderizandoElementos />
      <Events />
    </div>
  );
}

export default App;
