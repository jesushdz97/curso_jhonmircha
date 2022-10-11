import Cart from './cart/Cart'
import Products from './product/Products'

const ShoppingCart = () => {
  return (
    <div>
      <h1 className='text-5xl font-medium tracking-tight md:text-5xl py-5'>
        Carrito de Compras
      </h1>
      <div className='grid xl:grid-cols-2 gap-3'>
        <Products />
        <Cart />
      </div>
    </div>
  )
}
export default ShoppingCart
