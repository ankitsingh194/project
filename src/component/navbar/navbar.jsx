import React, { useState } from 'react'
import searchicon from '../../assets/searchicon.png'
import thunder from '../../assets/thunder.png'

const Navbar = () => {
    const [white , setwhite] = useState(false)
  return (
    <section>
        <div className=' shadow-md h-[70px]'>
        <div className='flex justify-between w-[98.5%]  mt-4'>
            <div className='flex ml-[10px]'>
            <div  className='mr-[10px] '>
               <div className=' flex  justify-center bg-black  w-[40px] h-[40px] rounded-full border-2 border-solid border-gray-800 text-[28px] font-bold text-white '><h1 className='mt-[-4px]'>B</h1></div>
            </div>
                <h3 className=' text-[20px] font-bold'>Project Dashboard</h3>
            </div>
            <div className='flex '>
            

            <div className=' max-sm:hidden flex mr-[10px] border-2 border-solid  focus: border-gray-300 px-4 xl:pr-[70px] py-1 bg-white' >
                <img  src={searchicon} alt='search' className='w-[30px]'/>
                <input type='search' placeholder='Search my storyboards' className=' focus:outline-none bg-white' />
            </div>
            <div className=' max-sm:hidden flex mr-[10px] border-2 border-solid border-sky-200 rounded-md bg-opacity-15 h-[40px]  bg-sky-300'>
            <div  className='  mr-[10px] mt-[2px] ml-[2px] '>
               <div className=' flex  justify-cente bg-transparent w-[30px] h-[30px] rounded-full border-4 border-t-sky-500  border-solid border-sky-200 text-[13px] font-bold '><h1 className='ml-[5px]'>A</h1></div>
            </div>
                <div className=' px-3 py-1 text-[15px] font-bold   text-gray-700 '>Quick Start</div>
            </div>
          
          <div className='flex justify-between max-lg:mr-[10px]'>
            <div  className='mr-[10px]  '>
               <div className=' flex  justify-center bg-orange-400 w-[40px] h-[40px] rounded-full border-2 border-solid border-gray-800 text-[20px] font-bold '>A</div>
            </div>
            <div  className=' max-sm:hidden mr-[-30px]' onClick={()=> setwhite(!white)}>
               <div className={white ? ' flex  justify-center bg-white w-[40px] h-[40px] rounded-s-full border-2 border-solid border-gray-800 text-[20px] font-bold '  :' flex  justify-center bg-black w-[40px] h-[40px] rounded-s-full border-2 border-solid border-gray-800 text-[20px] font-bold '}>
                <img src={thunder} alt='icon' className='w-[30px] h-[30px] mt-[2px]' />
               </div>
            </div>
            </div>
            </div>
             

        </div>
        </div>
    </section>
    
  )
}

export default Navbar