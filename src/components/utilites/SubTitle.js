import React from 'react'
import { Container  } from 'react-bootstrap'

const SubTitle = ({title ,btnTitle}) => {
  return (
    <Container>
      <div className='d-flex justify-content-between align-items-center pt-4'>
        <p className='sub-tile'>{title}</p>
        { btnTitle? (<button className='shopping-now'>{btnTitle}</button>) : null}
      </div>
    </Container>
  )
}

export default SubTitle
