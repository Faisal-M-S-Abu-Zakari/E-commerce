import React from 'react'
import { Container  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const SubTitle = ({title ,btnTitle , pathText}) => {
  return (
    <Container>
      <div className='d-flex justify-content-between align-items-center pt-4'>
        <p className='sub-tile'>{title}</p>
        { btnTitle? (
          <Link to={`${pathText}`} >
            <div className='shopping-now'>{btnTitle}</div>
          </Link>
          ) : null}
      </div>
    </Container>
  )
}

export default SubTitle
