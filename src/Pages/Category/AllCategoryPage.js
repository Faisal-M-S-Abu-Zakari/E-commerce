import React from 'react'
import CategoryContainer from '../../components/categories/CategoryContainer'
import  Pagination  from '../../components/utilites/Pagination'

const AllCategory = () => {
  return (
    <div style={{minHeight:'550px'}}>
      <CategoryContainer />
      <Pagination />
    </div>
  )
}

export default AllCategory
