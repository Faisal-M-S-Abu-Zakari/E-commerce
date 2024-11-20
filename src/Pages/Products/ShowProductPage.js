import React from 'react'
import CategoryHeader from '../../components/categories/CategoryHeader'
import SearchCountResult from '../../components/utilites/SearchCountResult'
import { Col, Container, Row } from 'react-bootstrap'
import SideFilter from '../../components/utilites/SideFilter'
import Pagination from '../../components/utilites/Pagination'

import CardsProductContainer from '../../components/Products/CardsProductContainer'

const ShowProductPage = () => {
  return (
    <div >
       <CategoryHeader />
       <Container>
            <SearchCountResult title={'400 منتج متاح ...'} />
            <Row>
                <Col sm='2' xs='2' md='1' className='d-flex'>
                    <SideFilter />
                </Col>
                <Col sm='10' xs='10' md='11' className='d-flex' >
                    <CardsProductContainer title={''} btnTitle={''} />
                </Col>
            </Row>
            <Pagination />
       </Container>
    </div>
  )
}

export default ShowProductPage
