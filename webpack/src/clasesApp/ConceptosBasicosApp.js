import './App.css'
import AjaxClass from '../components/conceptos/AjaxClass'
import AjaxHook from '../components/AjaxHook'
import Events from '../components/Events'
import Forms from '../components/Forms'
import HooksPersonalizados from '../components/HooksPersonalizados'
import References from '../components/References'
// import LifeCycle from './components/LifeCycle';
import RelojHooks from '../components/RelojHooks'
import RenderizadoCondicional from '../components/RenderizadoCondicional'
import RenderizandoElementos from '../components/RenderizandoElementos'
import StateClass from '../components/StateClass'

function App() {
  return (
    <div className='App'>
      <AjaxClass />
      <StateClass />
      <RenderizadoCondicional />
      <RenderizandoElementos />
      <Events />
      {/* <LifeCycle /> */}
      <RelojHooks />
      <AjaxHook />
      <HooksPersonalizados />
      <References />
      <Forms />
    </div>
  )
}

export default App
