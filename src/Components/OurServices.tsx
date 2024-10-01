import React from 'react'
import Swap from "../Images/Swap.png"
import Iphone11sm from "../Images/Iphone11sm.png"






const OurServices:React.FC = () => {
  return (
    <div className='mb-10 '>
        
        <div className='text-center md:flex md:justify-between md:px-6 md:items-center md:text-left  md:w-[80%] mx-auto'>
            <div className='w-[85%] md:w-[55%] mx-auto md:mx-0 lg:w-[30%]'>
                <p className=' text-xl font-medium  mb-5 md:mb-3'>Buy and Sell</p>
                <p className='font-normal text-[1rem]    mb-6  '>
                    <span className='block mb-1'>With Feather , you can buy and sell your crypto assets 
                    with ease and without having to think too much.</span> 
                <span>You do not have to worry about finding a buyer or a seller,
                     you can quickly buy or sell in the platform.</span>
                </p>
            </div>
            <div className='w-[60%] mx-auto md:mx-0 max-w-[220px] mb-6 md:mb-0 '>
                <img src={Iphone11sm} className='w-full'/>
            </div>

        </div>

        <div className='text-center md:flex md:justify-between md:px-6 md:items-center md:text-left  md:w-[80%] mx-auto'>
            <div className='w-[85%] md:w-[55%] mx-auto md:mx-0 lg:w-[30%]'>
                <p className=' text-xl font-medium mb-3'>Swap</p>
                <p className='font-normal text-[1rem]    mb-6  '>
                    <span className='block mb-1'>Feather allows you to swap your crypto currency at no extra cost.
                     </span> 
                <span>You can swap any veriety of crypto currency with ease and efficiency</span>
                </p>
            </div>
            <div className='w-[60%] mx-auto md:mx-0 max-w-[220px] md:order-[-1]  mb-6 md:mb-0'>
                <img src={Swap} className='w-full'/>
            </div>

        </div>


        <div className='text-center md:flex md:justify-between md:px-6 md:items-center md:text-left  md:w-[80%] mx-auto'>
            <div className='w-[85%] md:w-[55%] mx-auto md:mx-0 lg:w-[30%]'>
                <p className=' text-xl font-medium mb-3'>Pay Bill</p>
                <p className='font-normal text-[1rem]    mb-6  '>
                With Feather you can pay all types of bills both online and offline in-app with no extra charges
                </p>
            </div>
            <div className='w-[60%] mx-auto md:mx-0 max-w-[220px]  '>
                <img src={Swap} className='w-full'/>
            </div>

        </div>




    </div>
  )
}

export default OurServices