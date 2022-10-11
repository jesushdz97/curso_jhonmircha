import products from '@/api/product'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-4 p-4'>
      {products.map((data) => (
        <ProductItem key={data.id} data={data} />
      ))}
    </div>
  )
}
export default Products
