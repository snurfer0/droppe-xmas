import React from 'react';
import { connect } from 'react-redux';
import Loading from '../animations/Loading';
import Product from './Product';
import CartReceipt from './CartReceipt';
import '../../assets/scss/productList.scss'

const ProductList = ({ productList, cart }) => {

  const productsToRender = cart.products
  const ids = productsToRender.map(p => p.productId)
  const [products, setProducts] = React.useState(null)

  React.useEffect(() => {
    if (productList) {
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
        {products && products.map(p => <Product key={p.id} {...p} cartId={cart.id} />)}
      </div>
      <CartReceipt products={products} cart={cart} />
    </>
  )
}

const mapStateToProps = state => {
  return { productList: state.products };
};

export default connect(
  mapStateToProps,
  {}
)(ProductList);