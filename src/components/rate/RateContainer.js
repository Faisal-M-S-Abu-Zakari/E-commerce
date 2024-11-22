import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import rate from '../../images/rate.png'
import RateItem from './RateItem'
import RatePost from './RatePost'
import Pagination from '../utilites/Pagination'
const RateContainer = () => {
  return (
    <Container className='mt-3 rate-container'>
        <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">التقيمات</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
                    <div className="rate-count d-inline p-1 pt-2">(160  تقيم)</div>
                </Col>
            </Row>
        <RatePost />
        <RateItem />
        <RateItem />
        <RateItem />
        <Pagination />
    </Container>
  )
}

export default RateContainer
