import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../components/categories/CategoryHeader'
import ProductDetailes from '../../components/Products/ProductDetailes'
import RateContainer from '../../components/rate/RateContainer'
import CardProductsContainer from '../../components/Products/CardsProductContainer'

const ProductPageDetailes = () => {
  return (
    <div style={{minHeight:'670px'}}>
      <CategoryHeader/>
      <Container>
        <ProductDetailes />
        <RateContainer />
        <CardProductsContainer title={'منتجات قد تعجبك'} />
      </Container>
    </div>
  )
}

export default ProductPageDetailes
