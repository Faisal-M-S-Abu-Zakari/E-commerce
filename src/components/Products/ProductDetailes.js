import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'

const ProductDetailes = () => {
  return (
    <div>
        <Row className='py-3'>
            <Col lg='4'>
                <ProductGallery />
            </Col>
            <Col lg='8'>
                <ProductText />
            </Col>
        </Row>
    </div>
  )
}

export default ProductDetailes