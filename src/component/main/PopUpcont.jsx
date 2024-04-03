import React from 'react'
import close from '../../assets/close.png'
import'./Popup.css'

const PopUpcont = ({SetNewProject}) => {
  return (
    <section>
        <div className=' z-50 max-md:mt-[-80rem]  mt-[-50rem]  absolute w-[100%] h-[100%] bg-transparent flex justify-center mb-[40px]'>
            <div className=' rounded-md bg-white shadow-md w-fit h-fit'>
                <div className=' flex justify-between'>
                    <h1 className=' text-[24px] font-bold px-[2rem] pt-[1.5rem] '>New Storyboard</h1>
                    <div className='mt-[30px] w-[35px] h-[35px] rounded-full mr-[28px]  bg-gray-600  bg-opacity-10 cursor-pointer' onClick={()=>SetNewProject(false)} >
                        <img src={close} alt='close' className=' w-[14px] m-[11px]' /> 
                    </div>
                 

                </div>
                <div className=' m-[30px] '>
                    <label>Storyboard Name</label>
                    <input type='text' placeholder='e.g Default Project Storyboard' className=' focus:outline-none w-[99%] h-[50px] border-2 border-solid  border-gray-500  ' />
                </div>
                <div className=' m-[30px] ml-[30px]'>
                    <label>Frame Size</label>
                <select className=' focus:outline-none w-[99%] h-[50px] border-2 border-solid  border-gray-500'>
                    <option value="landscape(16:9)">landscape(16:9)</option>
                    <option value="landscape(16:9)">landscape(20:6)</option>
                </select>
                </div>

                <div className=' w-[99%] mb-[30px]  border-t-2  border-gray-200'>
                    <div className='flex justify-between mt-[30px]'>
                    <div className='flex'>
                    <label className="switch">
                           <input type="checkbox" />
                          <span className="slider round"></span>
                    </label>
                    <h1 className=' font-medium text-[14px] ml-[15px] mt-[15px] text-black'>AI Assistant</h1>
                        
                    </div>
                     <div className=' w-fit h-fit border-none bg-gray-600 bg-opacity-25 rounded-md mr-[30px]'>
                    <button className='text-white font-semibold py-3 px-4 text-[12px]'>Create Storyboard</button>
                    </div>
                    </div>


                </div>

            </div>

        </div>

    </section>
    
  )
}

export default PopUpcont