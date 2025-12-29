import React from 'react'
import Card from './Card'

const Wishlist = ({products,openCompo}) => {
  
  const filteredProducts = products.filter(item=>item.wishlist===true)
  console.log(filteredProducts)

  return (
    <div className='wishlist w-full px-10 py-10 '>
           <h1 className='text-2xl font-medium'>Wishlist Products ❤</h1>
           <div className='container mt-5 w-full flex flex-wrap gap-5'>
               {filteredProducts.length>0?filteredProducts.map(item=><Card key={item.id} openCompo={openCompo} item={item}/>):<h3 className='text-medium text-xl text-zinc-400'>No products available</h3>}
           </div>

    </div>
  )
}

export default Wishlist