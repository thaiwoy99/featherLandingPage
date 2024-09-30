import React from 'react'
import Vector1 from "../Images/Vector1.png"
import Vector2 from "../Images/Vector2.png"
import Vector3 from "../Images/Vector3.png"

const StartedFeatures =[
  {Img:Vector1,
    feature:"Create an account"
  },
  {Img:Vector2,
    feature:"Link your banks"
  },
  {Img:Vector3,
    feature:"Start trading"
  }

]







const GettingStarted:React.FC= () => {
  return (
    <div className='mt-[-100px] mb-7'>
        <p className='text-center text-2xl font-medium mb-3'>Getting Started Easily</p>
        <p className='text-center'>Enjoy the Best Onboarding Experience on Feather</p>
        <div className='space-y-[100px] w-[50%] mx-auto    flex flex-col  relative mt-[-80px] lg:flex-row lg:w-[60%] justify-between'>
          <span className='w-[80px] h-[3px] bg-[#0C3B2E] rotate-[90deg] absolute top-[250px] left-[50%] translate-x-[-50%] lg:rotate-0 lg:translate-x-0 lg:w-[200px] lg:top-[130px] lg:left-[160px]'></span>
          <span className='w-[80px] h-[3px] bg-[#0C3B2E] rotate-[90deg] absolute top-[350px] left-[50%] translate-x-[-50%] lg:rotate-0 lg:translate-x-0 lg:w-[200px] lg:top-[30px] lg:left-[570px]'></span>

        {StartedFeatures.map(({Img,feature})=>{
            return (
              <div className='flex flex-col items-center space-y-3' key={feature}>
                <div className='bg-[#0C3B2E] size-[70px] rounded-full flex justify-center items-center'>
                  <img src={Img} alt="" className='size-[30px]'/>
                </div>
                <p>{feature}</p>
              </div>

            )
          })}
        </div>


        
    </div>
  )
}

export default GettingStarted