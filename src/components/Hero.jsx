import React from 'react'
import Heading from './Heading'
import CardContainer from './CardContainer'

const Hero = ({products,setProducts,searchData,categorySelect,openCompo}) => {
  return (
    <div className='w-full hero px-10 py-10 '>
      <Heading searchData={searchData} categorySelect={categorySelect}/>
      <CardContainer  products={products} setProducts={setProducts} searchData={searchData}  categorySelect={categorySelect} openCompo={openCompo}/>
      
    </div>
  )
}

export default Hero