import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utilites/SubTitle'
import ProductCard from './ProductCard'

const CardsProductContainer = ({title , btnTitle }) => {
  return (
    <Container className='mt-3'>
    <SubTitle title={title} btnTitle={btnTitle} />
    <Row className='d-flex justify-content-betwee my-2'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </Row>
    </Container>
  )
}

export default CardsProductContainer