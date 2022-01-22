import React from 'react';
import Loading from '../animations/Loading';
import Product from './Product';
import CartReceipt from './CartReceipt';
import '../../assets/scss/productList.scss'

const ProductList = ({ productList, cart, carts }) => {

  const [products, setProducts] = React.useState(null)
  const productsToRender = cart.products
  const ids = productsToRender.map(p => p.productId)

  React.useEffect(() => {
    if (!productList || productList.length !== 0) {
      let ps = ids.map(id => {
        let product = productList.find(p => p.id === id)
        if (product) return product
      })
      setProducts(ps)
    }
  }, [productList])

  if (!products || products.length === 0) return <Loading />
  

  return (
    <>
      <div className='products-grid'>
        {products && products.map(p => <Product key={p.id} {...p} cartId={cart.id} carts={carts} products={productList} />)}
      </div>
      <CartReceipt products={products} cart={cart} productList={productList} carts={carts} />
    </>
  )
}


export default ProductList