import React from 'react'
import {  Container, Row } from 'react-bootstrap'
import BrandCard from './BrandCard'
import brand1 from '../../images/brand1.png'
import brand6 from '../../images/brand2.png'
import brand2 from '../../images/brand3.png'
import brand3 from '../../images/brand1.png'
import brand4 from '../../images/brand3.png'
import brand5 from '../../images/brand2.png'
const BrandContainer = () => {
  return (
    <Container >
        <div className='admin-content-text mt-4'>اشهر الماركات </div>
        <Row className='d-flex justify-content-betwee my-2'>
            <BrandCard img={brand1}/>
            <BrandCard img={brand2}/>
            <BrandCard img={brand3}/>
            <BrandCard img={brand4}/>
            <BrandCard img={brand5}/>
            <BrandCard img={brand6}/>
            <BrandCard img={brand1}/>
            <BrandCard img={brand2}/>
            <BrandCard img={brand3}/>
            <BrandCard img={brand4}/>
            <BrandCard img={brand5}/>
            <BrandCard img={brand6}/>
            <BrandCard img={brand1}/>
            <BrandCard img={brand2}/>
            <BrandCard img={brand3}/>
            <BrandCard img={brand4}/>
            <BrandCard img={brand5}/>
            <BrandCard img={brand6}/>
        </Row>
    </Container>
  )
}

export default BrandContainer