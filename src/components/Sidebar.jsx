import React from 'react'

const Sidebar = ({products,setCategorySelect,setPageCurrentState}) => {

   
 
 let  categoryList = products.map(item=>item.category);
 let category = [...new Set(categoryList)]
 category = ["All Products",...category]
 

 function clickEventHandler(data){
  setPageCurrentState((prev)=>({...prev,state:"Home",idx:""}))
  setCategorySelect(data)
  
 }
 

  return (
    <div className='sidebar  w-75  pl-10 pt-15 pb-3  border-r border-zinc-200'>

      <span className='font-medium text-2xl'>Category</span>
     <div className='category-links mt-10 flex flex-col gap-4'>

       {category.map((item,index)=>(

          <div key={index} className='hover:text-cyan-600 hover:font-medium transition-all duration-400  ease-linear flex items-center gap-3 text-xl font-normal cursor-pointer text-zinc-800'><span className='h-2 w-2  bg-black rounded-full'></span > <span className='transition-all duration-400 ease-linear' onClick={()=>clickEventHandler(item)}>{item}</span></div>
       ))} 
            
         

     </div>
    </div>
  )
}

export default Sidebar