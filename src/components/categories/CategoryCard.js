import React from 'react'
import { Col } from 'react-bootstrap'

const CategoryCard = ({background , img , title}) => {
  return (
    <Col
        ms="6"
        sm="6"
        md="4"
        lg="3"
        className='my-4 d-flex justify-content-around'
    >
        <div className='allCard mb-3'>
            {/* category card div is the background of img  */}
            <div className='category-card'
            style={{backgroundColor: `${background}`}}
            >
            </div> {" "}
            <img src={img} className='category-card-img' />
            <p className='category-card-text my-2'>{title}</p>
        </div>

    </Col>
  )
}

export default CategoryCard
