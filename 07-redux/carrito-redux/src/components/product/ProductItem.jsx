import { addProduct } from '@/features/cart/cartSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const styles = {
  container: 'flex border border-gray-100 shadow-md p-4 gap-4',
  img: 'object-contain w-28',
  body: 'flex flex-col justify-between text-2xl w-full gap-y-6',
  body_text: 'flex justify-between',
  button:
    'bg-yellow-500 rounded text-white font-medium py-2 border border-yellow-300 hover:bg-yellow-900',
}

const ProductItem = ({ data }) => {
  const { name, price, logo } = data
  const dispatch = useDispatch()
  const addToCart = () => dispatch(addProduct(data))

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.img} alt='' />
      <div className={styles.body}>
        <div className={styles.body_text}>
          <h1 className='font-bold tracking-wide capitalize'> {name} </h1>
          <p className='text-green-800'>${price.toLocaleString()}</p>
        </div>
        <button className={styles.button} onClick={() => addToCart(data)}>
          Agregar
        </button>
      </div>
    </div>
  )
}
export default ProductItem
