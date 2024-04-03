import React, { useState } from 'react'
import Mainbody from './Mainbody'
import PopUpcont from './PopUpcont'


const MainContent = () => {
    const [Newproject , SetNewProject] = useState(false)
  return (
    <section>
        <div className=' z-0 relative mt-[7.9rem] h-full   w-[90%]  ml-[5%]'>
            <div className='flex justify-between '>
                <div className='flex'>
                <div  className='mr-[10px] '>
               <div className=' flex  justify-center bg-orange-400 w-[30px] h-[30px] rounded-full border-2 border-solid border-gray-800 text-[17px] font-bold '>A</div>
            </div>
                <h1 className=' font-bold text-[20px]'>Adam Cooper Team</h1>
                </div>
                <div>
                    <button className=' border-none bg-black text-white font-semibold text-[15px] px-3 py-2 mr-[10px] rounded-md cursor-pointer ' onClick={()=>SetNewProject(true)}>New Project</button>
                </div>
            </div>
            <div className=' z-0 relative' >
                <Mainbody/>
          
            </div>
            </div>
         

          
            { Newproject ? <PopUpcont SetNewProject={SetNewProject}/> : ''}
        


       


    </section>
  
  )
}

export default MainContent