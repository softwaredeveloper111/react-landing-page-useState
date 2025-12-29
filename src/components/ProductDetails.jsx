import React, { useState } from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";

const ProductDetails = ({currentPageState,products,totalCostCalculate,setPageCurrentState}) => {
  

  let filteredProduct = products.find((item=>item.id ===currentPageState.idx));
  
  
  const [val, setVal] = useState(1)
  


  

  function clickEventHandler1(){
     if(val>1){

       setVal((prev)=>prev-1)
   
     }
  }

  function clickEventHandler2(){
    if(val<10){
      setVal((prev)=>prev+1)
        
    }
  }



  function clickEventHandlerCost(){
      
       let total = Number((filteredProduct.price*val)).toFixed(2);
      totalCostCalculate(Number(total))
      setPageCurrentState((prev)=>({...prev,state:"cart",idx:""}))
  }

 

  return (
    <div className='min-h-screen w-full flex justify-between items-center px-50'>
      <div className="section1 h-[70%] w-100 ">
        <img className='h-full w-full object-cover object-center'  src={filteredProduct.image} alt="" />
      </div>
      <div className="section2 flex flex-col max-w-125 ">
          <span className='text-2xl font-medium'>{filteredProduct.title}</span>
          <span className='mt-3 text-base text-zinc-700'>{filteredProduct.description}</span>
          <span className='mt-3'> <span className='text-lg font-medium'>Category - </span> {filteredProduct.category}</span>
          <span className='mt-3'> <span className='text-lg font-medium'>Total Price - </span> $ <span className='bg-cyan-300 px-3 rounded-md py-2 font-medium'>{(Number(filteredProduct.price) * val).toFixed(2)}</span> </span>
          <span className='mt-3'> <span className='text-lg font-medium'>Ratings - </span> ⭐{filteredProduct.rating.rate} (230 reviews)</span>
          <div className='mt-20 flex items-center gap-10'>
               <div className='flex gap-6 items-center'>
                <span>  <FiMinusCircle onClick={clickEventHandler1} size={"2em"} className='cursor-pointer active:scale-[0.9]' /> </span>
                <span className='text-xl text-white  h-12.5 w-12.5 bg-zinc-400 flex justify-center items-center font-medium'>{val}</span>
                <span>  <FiPlusCircle onClick={clickEventHandler2}  size={"2em"} className='cursor-pointer active:scale-[0.9]'/>  </span>
               </div>
               <button className='bg-sky-300 px-3 py-2 rounded-lg border-none  cursor-pointer text-white text-sm flex items-center gap-2' onClick={clickEventHandlerCost}>Add to Cart <IoMdCart size={"1.4em"} color='black'/></button>
          </div>
      </div>
    </div>
  )
}

export default ProductDetails