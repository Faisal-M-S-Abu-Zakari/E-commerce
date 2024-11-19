import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import clothe from '../../images/clothe.png'
import cat2 from '../../images/cat2.png'
import labtop from '../../images/labtop.png'
import sale from '../../images/sale.png'
import pic from '../../images/pic.png'
const CategoryContainer = () => {
  return (
    <Container>
      <div className='admin-content-text mt-4'>كل التصنيفات</div>
        <Row className='d-flex justify-content-betwee my-2'>
            <CategoryCard title="اجهزة منزلية" img={clothe} background='#f4dba5'/>
            <CategoryCard title="اجهزة منزلية" img={cat2} background='#0034ff'/>
            <CategoryCard title="اجهزة منزلية" img={labtop} background='#f4dba5'/>
            <CategoryCard title="اجهزة منزلية" img={sale} background='#f4dba5'/>
            <CategoryCard title="اجهزة منزلية" img={pic} background='#f4dba5'/>
            <CategoryCard title="اجهزة منزلية" img={sale} background='#f4dba5'/>
            <CategoryCard title="اجهزة منزلية" img={cat2} background='#f4dba5'/>
            <CategoryCard title="اجهزة منزلية" img={clothe} background='#f4dba5'/>
            <CategoryCard title="اجهزة منزلية" img={labtop} background='#f4dba5'/>
            <CategoryCard title="اجهزة منزلية" img={sale} background='#f4dba5'/>
            <CategoryCard title="اجهزة منزلية" img={cat2} background='#f4dba5'/>
            <CategoryCard title="اجهزة منزلية" img={clothe} background='#f4dba5'/>
        </Row>
    </Container>
  )
}

export default CategoryContainer
