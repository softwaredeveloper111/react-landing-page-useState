import React from 'react'

const Heading = ({searchData,categorySelect}) => {



  return (
    
    <>
    {categorySelect  ===  ""  ?   <div className='text-2xl font-medium'>{searchData===""?"All Products":"Filter Products"}</div>:   <div className='text-2xl font-medium'>{searchData===""?categorySelect:"Filter Products"}</div> }
    </>
   
  )
}

export default Heading