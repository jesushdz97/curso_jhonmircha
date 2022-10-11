import trash from '@/assets/papelera-de-reciclaje.png'
import { removeOne, removeProduct, addOne } from '@/features/cart/cartSlice'
import { memo } from 'react'
import { useDispatch } from 'react-redux'

const styles = {
  btn: 'rounded text-white w-8 font-medium',
}

const CartItem = ({ data }) => {
  let { price, logo, quantity, alt } = data
  const dispatch = useDispatch()

  return (
    <div className='flex items-center border-gray-100 shadow-md gap-8 p-4'>
      <img src={logo} className='object-contain w-14' alt={alt} />
      <div className='flex flex-col mr-auto gap-y-1'>
        <div>
          <button
            className={`${styles.btn} bg-green-500`}
            onClick={() => dispatch(addOne(data))}
          >
            +
          </button>
          <span className='font-normal mx-1'> {quantity} </span>
          <button
            className={`${styles.btn} bg-red-500`}
            onClick={() => dispatch(removeOne(data))}
          >
            -
          </button>
        </div>
        <span className='text-red-800 text-xl text-start'>
          ${(quantity * price).toLocaleString()}{' '}
        </span>
      </div>
      <button>
        <img
          src={trash}
          className='w-10 object-containI'
          alt=''
          onClick={() => dispatch(removeProduct(data))}
        />
      </button>
    </div>
  )
}
export default memo(CartItem)
