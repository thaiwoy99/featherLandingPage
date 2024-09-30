import { FC } from "react"


const Intro:FC = () => {
  return (
    <div className="w-full md:w-[90%] mb-[9rem] mx-auto  font-[Montserrat]">
 <div className="pt-[150px]  w-[90%] max-w-[450px] md:max-w-[1000px]   m-auto ">
    <h1 className="font-semibold text-center text-[1.8rem]   mb-4
  md:font-bold md:text-[3rem] md:w-full lg:w-[80%] m-auto md:leading-[70px] ">Making Crypto Trading Easier, Faster and more Secure</h1>
    <p className="font-medium text-[1.5rem] mb-5 text-center text-[#2B2B2B] md:w-[80%] lg:w-[70%] m-auto
    
    md-text-[2.5rem] ">Feather helps you Buy, Sell, Swap and Pay Bills with your crypto assets.</p>
    <div className="w-full md:w-[60%] lg:w-[30%] mx-auto">
    <button className="bg-[#0C3B2E]   cursor-pointer w-full  py-1 md:py-2 text-center text-white text-[1.2rem] ">Create a Free Account</button>
    </div>
 </div>

    </div>
  )
}

export default Intro