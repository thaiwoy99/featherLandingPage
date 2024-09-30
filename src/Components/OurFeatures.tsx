import React from 'react'
import Card1 from "../Images/card-sharp (1).png"
import Card4 from "../Images/card1.png"
import Card5 from "../Images/card1.png"
import { MdArrowForward } from "react-icons/md"




const features =[
{Img:Card1,
Feature:"Live Tracking" ,
content: "Track all your crypto live and recieve updates that could affect your assets."

},
{Img:Card4,
    Feature:"Fast transcations" ,
    content: "Experience Fast Transactions at the best rates on Feather."
    
    },
    {Img:Card5,
        Feature:"Security" ,
        content: "We provide EXTRA Security for all your crpto assets and details on Feather"
        
        }
]






const OurFeatures:React.FC = () => {
  return (
    <div className='w-full bg-white relative top-[-190px] md:top-[-230px] pt-6 '>
        <div className='w-[90%] mx-auto ' >
            <p className='text-2xl font-medium mb-4 text-center'>We Provide the Best Features</p>
            <div className=' space-y-5 flex flex-col md:flex-row md:space-y-0'>

            {features.map(({Img,Feature,content})=>{
                return(
                    
                    

                    
                    
                    <div key= {Feature} className=' bg-[#0C3B2E] w-[90%]  mx-auto text-white py-5 px-3 space-y-4 md:w-[32%] '>
                        <div className='w-[30px]'>
                        <img src= {Img} className='w-full'/>
                        </div>
                        <p className='text-xl'>{Feature}</p>
                        <p className='text-[0.9rem] md:w-[70%]'>{content}</p>

                             <div className='flex    justify-end'>
                                <span className='flex items-center hover:scale-110'>
                            <button className=' '>learn More </button>
                            <span className='pt-1 '><MdArrowForward/></span>
                            </span>
                             </div>

                        </div>
                        
                )
            })}
            
            </div>
        </div>


    </div>
  )
}

export default OurFeatures