import React from 'react'
import { LuPyramid } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import { LuShoppingCart } from "react-icons/lu";
import { FcLike } from "react-icons/fc";
import { SiGoogledisplayandvideo360 } from "react-icons/si";

const Nav = ({setSearchData,searchData,setPageCurrentState}) => {




  function changeInputEvent(e){
    
    setPageCurrentState((prev)=>({...prev,state:"Home",idx:""}))
    setSearchData(e.target.value);
   
  }

  return (
    <div className='nav w-full flex justify-between items-center  px-10 h-25 z-1000  fixed top-0 left-0  border border-zinc-200   bg-[#ffffff] '>
       
            <div className='flex gap-1 items-center'>
              <span><SiGoogledisplayandvideo360 size={"1.8em"} color='#2603B5'/></span>
              <span className='text-2xl font-medium'>Lapak<span className='font-bold'>baju</span></span>
            </div>



            <div className='flex items-center w-130 bg-zinc-200 rounded-lg pl-3'>
              <IoIosSearch size={"1.6em"}/>
              <input onChange={changeInputEvent} value={searchData} className='border-none outline-none px-3 py-3 w-full text-lg' type="search" placeholder='Search among 100+ products' />
            </div>




            <div className='flex items-center gap-7'>

                 <div className='flex gap-2 items-center'>
                  <span className='font-medium'>ENG</span>
                  <span><TfiWorld /></span>
                 </div>

                 <button onClick={()=>setPageCurrentState({state:"wishlist",idx:""})} className='bg-blue-300 px-3 py-3 rounded-md flex items-center font-medium gap-1 cursor-pointer'>Wishlist <FcLike size={"1.4em"}/></button>
                
                 <button onClick={()=>setPageCurrentState({state:"cart",idx:""})} className ='bg-blue-300 px-3 py-3 rounded-md flex items-center font-medium gap-1 cursor-pointer'>Your Cart <LuShoppingCart size={"1.4em"}/></button>
                
                 <div className='w-12.5 h-12.5 rounded-full overflow-hidden'>
                  <img className='h-full w-full object-cover object-top' src="https://i.pinimg.com/736x/f1/01/b7/f101b760b6521eb680ae90211a58b69e.jpg" alt="" />
                 </div>

            </div>
       
  
    </div>
  )
}

export default Nav