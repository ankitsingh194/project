import React from 'react'
import clockicon from '../../assets/clockicon.png'

export const Alertbar = () => {
  return (
    <section>
        <div className=' flex bg-[#FAD7A0] h-[60]'>
            <div className=' flex bg-[#F8C471] border-none w-fit rounded-3xl h-[30px] m-3'>
                <img src={clockicon} alt='#' className=' w-[15px] h-[15px] ml-2 mt-2 mb-1' />
                <h1 className=' pl-3 pr-3 pt-1 text-[14px] font-semibold lg:mr-[1rem]  '>One-Time Offer</h1>

            </div>
            <div className='flex m-3'>
            <p className=' text-[18px] font-semibold max-lg:hidden'>Your AI Storyboarding Bundle Discount expires in </p>
            <h1 className=' max-sm:hidden  border-none  bg-opacity-40 bg-white w-fit px-2 rounded-3xl h-[25px] ml-[10px]  text-pink-400'>5:01</h1>
            <div className='ml-[10px] mt-[-5px] rounded-md border-none bg-pink-600 bg-opacity-40 w-fit h-fit '>
                <h1 className=' text-[18px] font-semibold px-3 py-1' >Claim Discount</h1>
            </div>
            </div>
        </div>
    </section>
   
  )
}
