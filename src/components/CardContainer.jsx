import React from 'react'
import Card from './Card'

const CardContainer = ({products,setProducts,searchData,categorySelect,openCompo}) => {


  let filterProducts =null

if(categorySelect==="All Products"){
    filterProducts  = products.filter(item=>item.title.toLowerCase().includes(searchData.toLowerCase()))
}
else{ 

   filterProducts = (products.filter(item=>item.category===categorySelect)).filter(item=>item.title.toLowerCase().includes(searchData.toLowerCase()))
  
}



 
  return (
    <div className='w-full mt-9 flex flex-wrap gap-5'>
        { filterProducts.length>0?  filterProducts.map((item)=><Card key={item.id} item = {item} setProducts={setProducts} openCompo={openCompo}/>) : <h3 className='text-xl font-medium'>No product is find</h3>}
    </div>
  )
}

export default CardContainer