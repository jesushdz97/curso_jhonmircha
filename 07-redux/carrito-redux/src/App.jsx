import TeoriaRedux from '@/components/TeoriaRedux'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ShoppingCart from './components/ShoppingCart'
import { CounterRedux } from './components/CounterRedux'

const App = () => {
  const [showTeoria, setShowTeoria] = useState(false)

  return (
    <div className='container mx-auto text-center'>
      <h1 className='text-7xl font-800 py-1.5'> Redux </h1>
      <TeoriaRedux showTeoria={showTeoria} setShowTeoria={setShowTeoria} />
      <hr />
      <CounterRedux />
      <hr />
      <ShoppingCart />
    </div>
  )
}
export default App
