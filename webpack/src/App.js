import { ShoppingCart } from './components/clase-de-reducer'
import { Contador } from './components/clase-de-reducer'
import { ContadorMejorado } from './components/clase-de-reducer'

const App = () => {
  return (
    <div className='container-fluid text-center'>
      <h1 className='text-center'> useReducer </h1> <hr />
      <ShoppingCart /> <hr />
      <ContadorMejorado /> <hr />
      <Contador /> <hr />
    </div>
  )
}

export default App
