import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utilites/SubTitle'
import BrandCard from './BrandCard'
import brand1 from '../../images/brand1.png'
import brand6 from '../../images/brand2.png'
import brand2 from '../../images/brand3.png'
import brand3 from '../../images/brand1.png'
import brand4 from '../../images/brand3.png'
import brand5 from '../../images/brand2.png'
const BrandFeatures = ({title , btnTitle}) => {
    return (
        <Container className='mt-3'>
        <SubTitle title={title} btnTitle={btnTitle} pathText={'/Allbrand'} />
        <Row className='d-flex justify-content-betwee my-1'>
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

export default BrandFeatures
