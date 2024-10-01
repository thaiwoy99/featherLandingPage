import React from 'react'
import PlayStore from "../Images/PlayStore.png"
import Appstore from "../Images/Appstore.png"
import Iphone11sm from "../Images/Iphone11sm.png"

const OurApps:React.FC = () => {
  return (
    <div className=' flex flex-col md:flex-row '>

     <div className='w-[85%] mx-auto text-center md:text-left md:w-[60%] md:mt-[200px] relative top-[40px] md:static'>
        <p  className='text-xl mb-8 md:text-2xl font-medium'>Join us now and spread your wings</p>
        <button className='w-full py-2 text-white bg-[#0C3B2E] md:w-[70%] lg:w-[30%]'>Create a Free Account</button>
        <p className='mt-6 mb-12 md:mb-8'>or </p>
        <div className='flex justify-between w-full mx-auto mb-10  md:w-[70%] md:mx-0 lg:w-[50%] '>
        <div className='w-[45%] md:w-[35%] max-w-[200px]'>
          <img src={PlayStore} alt="" className='w-full' />  

        </div>
        <div className='w-[45%] md:w-[35%] max-w-[200px]'>
          <img src={Appstore} alt="" className='w-full' />  

        </div>
        </div>
     </div>
     <div className='w-[70%] max-w-[280px] mx-auto relative top-[150px] -z-20'>
        <img src={Iphone11sm} alt="" className='w-full' />
        
     </div>

    </div>
  )
}

export default OurApps