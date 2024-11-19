import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utilites/SubTitle'
import CategoryCard from '../categories/CategoryCard'
import clothe from '../../images/clothe.png'
import cat2 from '../../images/cat2.png'
import labtop from '../../images/labtop.png'
import sale from '../../images/sale.png'
import pic from '../../images/pic.png'
const HomeCategory = () => {
  return (
    <Container>
    <SubTitle title='التصنيفات' btnTitle="المزيد" pathText={'/Allcategory'} />
    <Row className='d-flex justify-content-betwee my-2'>
        <CategoryCard title="اجهزة منزلية" img={clothe} background='#f4dba5'/>
        <CategoryCard title="اجهزة منزلية" img={cat2} background='#0034ff'/>
        <CategoryCard title="اجهزة منزلية" img={labtop} background='#f4dba5'/>
        <CategoryCard title="اجهزة منزلية" img={sale} background='#f4dba5'/>
        <CategoryCard title="اجهزة منزلية" img={pic} background='#ff6264'/>
        <CategoryCard title="اجهزة منزلية" img={cat2} background='#0034ff'/>
    </Row>
    </Container>
  )
}

export default HomeCategory
