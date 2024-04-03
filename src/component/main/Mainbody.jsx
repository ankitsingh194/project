import React from 'react'
import foldericon from '../../assets/folder.png'
import threedoticon from '../../assets/doticon.png'
import arrowdown from '../../assets/arrowdown.png'
import screen from '../../assets/screen.jpg'
 
const Mainbody = () => {
  return (
    <div className='py-[60px] pb-[90px]  '>
        <div className='  shadow-md  mt-[3rem] bg-white border-none rounded-md w-full py-[20px]'>

            <div className=' flex justify-between '>
                <div className='flex mt-[20px] ml-[10px]'>
                    <div>
                        <img src={foldericon}  alt='folder' className=' mt-[10px] ml-[20px]' />

                    </div> 
                    <div className=' ml-[30px] '>
                        <h1 className=' text-[20px] font-semibold' >Default Project</h1>
                        <p className='text-[12px] text-gray-400'>1 storyboard</p>
                    </div>
                </div>
                <div className='flex mt-[28px]'>
                    <img src={threedoticon} alt='doticon' className=' w-[17px] h-[17px] cursor-pointer' />
                    <img src={arrowdown} alt='arrowdown' className=' ml-[40px] mr-[20px] w-[17px] h-[17px] cursor-pointer' />


                </div>

            </div>
            <div className=' p-6 mt-[30px]'>
               <div className='flex  max-sm:block  max-md:space-y-[12rem]  md:space-x-8'>
                <div className=' pt-[50px]     '>
                <div className=' w-[350px] h-[100px] '>
                    <div className=' '>
                    <img src={screen} alt='screen' />

                    </div>
                    <div className='mt-[-1.5px] gap-2 w-[350px] border-[1.5px] border-gray-600'>
                        <div className='ml-[10px] px-3 py-4'>
                        <h1 className=' text-[18px] font-semibold  '> AI Character Demo Storyboard</h1>
                        <p className=' text-[12px] text-gray-500'>Update 19 Mar 24</p>
                        </div>
                    </div>
                   

                </div>


            </div>
      
         
        
          
           <div className='pt-[50px] '>
            <div className='  w-[350px] h-[310px]   bg-opacity-45 bg-[#F4FAED]     mb-[30px] '>
                <div className=' inline-block '>
                    <div >

                    <div className=' ml-[9rem] mt-[8rem]  justify-center  w-[47px] h-[47px] rounded-full border-2 border-solid border-gray-400 text-[17px] font-bold '><h1 className='ml-[13.5px] mt-[7px] text-gray-400'>+</h1></div>
                    </div>

            </div>
            </div>
            </div>
            </div>
            </div>

        </div>

    </div>
    
  )
}

export default Mainbody