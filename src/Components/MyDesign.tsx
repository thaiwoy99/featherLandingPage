import React from 'react'
import Iphone11sm from "../../public/assets/IPhone11sm.png"
import Card1 from "../../public/assets/card-sharp (1).png"
import Card2 from "../../public/assets/card-sharp (2).png"
import Card3 from "../../public/assets/cardsharp.png"





const MyDesign:React.FC = () => {
  return (

    <div className=''>

      <div className='w-[350px] h-[350px] border-[1px]  border-[#2B2B2B] rounded-full
      mx-auto min-[450px]:w-[400px] min-[450px]:h-[400px]  md:w-[500px] md:h-[500px]  flex items-center relative '>
      <div className='absolute w-[30px] left-[26px] top-[50px]
        min-[500px]:left-[-4px] min-[500px]:top-[130px] md:left-[5px]'>
      <img src={Card1}/>
      </div>
      <div className='absolute w-[30px]  left-[32px] top-[100px] min-[500px]:left-[45px]
        md:left-[40px] md:top-[200px]'>
      <img src={Card2}/>
      </div>
      <div className='absolute w-[30px] left-[290px] bottom-[200px] min-[500px]:left-[330px] 
      min-[500px]:bottom-[240px]  md:left-[430px]'>
      <img src={Card3}/>
      </div>
        <div className='w-[80%] h-[80%] border-[1px]  border-[#2B2B2B] mx-auto
         rounded-full  flex justify-center'>
          <div className='mt-[-130px] w-[195px] md:w-[300px]'>
            <img src={Iphone11sm} alt="" className='w-full' />
          </div>

        </div>
      </div>


    </div>

    )
}

export default MyDesign