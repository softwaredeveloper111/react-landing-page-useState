import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";




const Card = ({item,openCompo,setProducts}) => {
  let {id,title,price,image,wishlist} = item;

   function clickEventHandler(){
      openCompo(id)
   }
  
   

   function clickEventHandlerTwo(){
     setProducts((prev)=>prev.map((item)=>item.id===id?{...item,wishlist:!item.wishlist}:item))
   }



  return (
    <div className='card bg-zinc-200 w-91 h-130 py-4 rounded-xl flex flex-col justify-between gap-2 overflow-hidden '>
        <div className='w-full h-[75%]  '>
             <img onClick={clickEventHandler} className='h-full w-full object-contain object-center hover:scale-[1.05] transition duration-300 ease-linear' src={image} alt="" />
        </div>



        <div className='px-5 flex flex-col'>
          <span className='text-2xl font-medium mb-4 whitespace-nowrap  overflow-hidden text-ellipsis'>{title}</span>
          <div className='w-full flex justify-between items-center'>
            <div className='flex flex-col'>
              <span className='text-sm text-zinc-600'>Price</span>
              <span className='text-lg font-medium'>${price}</span>
            </div>

            <span onClick={clickEventHandlerTwo} className={`${wishlist?"bg-white":"bg-[#2F01CC]"} h-12 w-12 flex justify-center items-center  cursor-pointer rounded-full`}>
              <span><i className={`ri-heart-3-fill text-2xl ${wishlist?"text-red-700":"text-white"}`}></i></span>
            
            </span>
            
          </div>
        </div>
    </div>
  )
}

export default Card