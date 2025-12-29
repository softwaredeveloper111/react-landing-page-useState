import React from 'react'

const Checkout = ({totalCost}) => {


  let d = (totalCost*20/100).toFixed(2)
  let pay = Number(totalCost.toFixed(2)) - Number(d)

  return (
    <div className='min-h-screen w-full  flex justify-center py-20 '>

         <div className='flex flex-col gap-5 w-100'>

         
          
          <div className='w-full h-130 bg-[#F6F0E9] rounded-xl p-5 flex flex-col gap-4'>
                 <span className='text-xl font-medium'>Order Summary</span>  
               
                 <div className='flex w-full justify-between items-center'>
                  <span className='text-lg'>Sub Total</span>
                  <span className='font-medium text-lg'>${totalCost}</span>
                 </div>

                 <div className='flex w-full justify-between items-center'>
                  <span className='text-lg'>Discount</span>
                  <span className='font-medium text-lg'>${d} (20% discount)</span>
                 </div>


                 <div className='flex w-full justify-between items-center'>
                  <span className='text-lg'>Tax</span>
                  <span className='font-medium text-lg'>$0.00</span>
                 </div>

                 <div className='flex w-full justify-between items-center'>
                  <span className='text-lg'>Shipping</span>
                  <span className='font-medium text-lg text-red-400'>Free</span>
                 </div>

                 <div className='flex w-full justify-between items-center'>
                  <span className='text-lg'>Total</span>
                  <span className='font-medium text-xl '>${pay}</span>
                 </div>

                 <button className='bg-zinc-700  text-white rounded-full px-3 py-3 mt-10 cursor-pointer font-medium text-lg mb-7'>Pay Securely</button>
                
                <hr />
                 <span className='text-base mt-3'>Estimated Delivery by  <span className='font-semibold'>31 december 2030</span></span>

               

          </div>

          <div className='w-full h-30 bg-[#F6F0E9] rounded-xl p-4 flex flex-col gap-2'>
                  <span className='text-xl font-medium'>Have a coupon ? </span>
                  <div className='w-full flex items-center rounded-md bg-[#FBF9F5] pl-1 pr-3 border border-zinc-300'>
                    <input className='w-full border-none outline-none  px-3 py-3' type="text" placeholder='coupon code'/>
                    <span>Apply</span>
                  </div>
          </div>
          
          </div>


    </div>
  )
}

export default Checkout