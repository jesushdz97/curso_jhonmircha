import './App.css';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizandoElementos from './components/RenderizandoElementos';
import StateClass from './components/StateClass';

function App() {
  return (
    <div className="App">
      <StateClass />
      <RenderizadoCondicional />
      <RenderizandoElementos />
    </div>
  );
}

export default App;
