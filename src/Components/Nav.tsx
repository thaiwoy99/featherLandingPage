import { useState } from "react";
import featherwing from "../Images/feather-wing.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Nav= ()=>{
  const[closeMobile,setClosembile] =useState<boolean>(true)

  return(
    <nav className=" w-full h-[100px]  lg:flex  bg-white shadow-md justify-between border-b-[green] border-b-2 lg:px-10 items-center z-10 fixed ">
      <div className="flex  space-x-3 items-center  mt-3 pl-2">
        <img src={featherwing}/>
       <span className=" pt-2 text-[#0C3B2E] font-medium">Feather</span>
      </div>
      <ul className={` w-full h-screen py-10 transition-all font-medium   pl-7 absolute top-[80px] 
       text-lg bg-white shadow-2xl text-[#28374B] lg:hidden flex flex-col space-y-10 lg:flex-row lg:space-x-5 ${closeMobile ? " left-[-100%]": "left-[0]"} `}>
        <li className="hover:text-[green] hover:text-xl cursor-pointer">Home</li>
        <li className="hover:text-[green] hover:text-xl cursor-pointer">About us</li>
        <li className="hover:text-[green] hover:text-xl cursor-pointer">Contact us</li>
        <li className="hover:text-[green] hover:text-xl cursor-pointer">Blog</li>
        <li className="hover:text-[green] hover:text-xl cursor-pointer">log in</li>
      </ul>

      <ul className={`  hidden 
         text-[#0C3B2E] lg:flex text-xl font-medium  flex-row space-x-8  `}>
        <li className="hover:text-[green] hover:scale-110 cursor-pointer">Home</li>
        <li className="hover:text-[green] hover:scale-110 cursor-pointer">About us</li>
        <li className="hover:text-[green] hover:scale-110 cursor-pointer">Contact us</li>
        <li className="hover:text-[green] hover:scale-110 cursor-pointer">Blog</li>
        
      </ul>
      <div className="hidden lg:block">
        <button className="bg-[#0C3B2E] px-10 py-1 text-white hover:bg-white hover:border-2 hover:border-[#0C3B2E] hover:text-[#0C3B2E]" >Log in</button>
      </div>

      <div className="lg:hidden absolute top-5 right-3 mt-3 ">
      { closeMobile?       <span className="text-3xl text-[#0C3B2E]">
         <GiHamburgerMenu onClick={()=>{setClosembile(false)}}/>
        </span>:
        <span  className="text-3xl text-[#0C3B2E]">
          <MdClose onClick={()=>{setClosembile(true)}}/>
        </span>}
 
      </div>


    </nav>
  )

}
export default Nav