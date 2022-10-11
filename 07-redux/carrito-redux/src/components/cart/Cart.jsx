import { clearCart } from '@/features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const getTotal = (cart) =>
  cart.reduce((acc, el) => el.quantity * el.price + acc, 0)

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <section className='flex flex-col justify-between p-4'>
      <div className='grid grid-cols-2 gap-2'>
        {cart.map((data) => (
          <CartItem key={data.id} data={data} />
        ))}
      </div>

      {cart.length && (
        <>
          <button onClick={() => dispatch(clearCart())}>RESET</button>
          <div className='flex justify-between text-4xl border border-gray-100 rounded shadow-md p-4'>
            <h1 className='font-semibold text-start'> TOTAL </h1>
            <h2>${getTotal(cart).toLocaleString()}</h2>
          </div>
        </>
      )}
    </section>
  )
}

export default Cart
