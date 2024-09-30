import React from 'react'
import Client1 from "../../public/assets/Client1.png"
import Client2 from "../../public/assets/Client2.png"
import Client3 from "../../public/assets/Client3.png"
import { CiLocationOn } from "react-icons/ci";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination'
import 'swiper/css/navigation';
import {  Pagination } from 'swiper/modules';





const Reviews =[
{img:Client3,
 Name:"Tim Santini",
 Feedback: "Feather is one of the best crypto trading apps that I have seen. Its is really easy to use",
 Location: " Texas, USA"  

},
{img:Client2,
    Name: "Jenny Shea",
    Feedback: " The Feather app is a really amazing crypto platform. They never run out of benefits",
    Location: " Johannesburg, SA"  
   
   },
   
{img:Client1,
    Name: 'Tina Ugwu',
    Feedback: " I really enjoy trading on the Feather app",
    Location: " Enugu, Nigeria "  
   
   }
   


]


const Feedbacks :React.FC= () => {
  return (
     
    <div className='mb-8 md:mb-[80px]'>
       

        <p className='text-xl font-medium text-center mb-8 md:text-2xl'>What our Customers Say</p>
        
        
        <div className='  hidden min-[500px]:flex  flex-col md:flex-row ' >
            {Reviews.map(({img,Feedback,Location,Name})=>{
                return(
                     <div key={Location} className='w-[80%] bg-[#0C3B2E] mb-4 mx-auto text-white py-7 px-6 space-y-4 md:w-[30%] lg:py-10'>
                        <div className=' flex  space-x-4 '>
                            <div className='w-[50px]'>
                                <img src={img} alt="" className='w-full' />
                            </div>
                            <div>
                                <p className=' text-xl font-medium '>{Name}</p>
                            <p className='flex space-x-2  items-center'>
                                <span className=''> <CiLocationOn /></span>
                                <span className='text-[1rem] opacity-50 font-light'> {Location}</span>
                                </p>
                        </div>
                        </div>
                        <p className='text-[1rem] font-normal text-left  lg:text-2xl'>{Feedback}</p>


                </div>

                  ) 
            })}
</div>


 <div className=' min-[500px]:hidden w-full  flex justify-center items-center mb-[50px] '>
        
 <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}

        modules={[Pagination]}
        className="mySwiper"
      >

           {
            Reviews.map(({img,Feedback,Location,Name})=>{
                return(
                    
            <SwiperSlide key={Name} >
                <div className='w-[90%] bg-[rgb(12,59,46)] mb-4 mx-auto h-[190px] text-white py-7 px-4 space-y-4 box-border'>
                        <div className=' flex  space-x-4 '>
                            <div className='w-[50px]'>
                                <img src={img} alt="" className='w-full' />
                            </div>
                            <div>
                                <p className=' text-xl font-medium '>{Name}</p>
                            <p className='flex space-x-2  items-center'>
                                <span className=''> <CiLocationOn /></span>
                                <span className='text-[1rem] opacity-50 font-light'> {Location}</span>
                                </p>
                        </div>
                        </div>
                        <p className='text-[1rem] font-normal text-left  lg:text-2xl '>{Feedback}</p>


                </div>



        </SwiperSlide>

                    
                
                )
            })
           }
           </Swiper>  
           </div>







    </div>
  )
}

export default Feedbacks