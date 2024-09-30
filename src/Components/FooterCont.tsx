import React, { useState } from 'react'

import featherwhite from "../../public/assets/featherwhite.png"
import { FaRegCopyright } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import facebook from "../../public/assets/Facebook logo.png"
import instagram from "../../public/assets/Instagram logo.png"
import linkedln from "../../public/assets/LinkedIn logo.png"
import twitter from "../../public/assets/Twitter logo.png"








const linkDetails =[
    { Intro: "Products",
       firstLink: "Pay Bills" ,
       secondLink : " Swap",
       ThirdLink  : "Live Trading",
       fourthLink: " ",
       id:1,
       open: false


},
{ Intro: "About us",
    firstLink: "Features" ,
    secondLink : " Pricing",
    ThirdLink  : "customers",
    fourthLink: " ",
    id:2,
    open: false
    

},
{ Intro: "Security",
    firstLink: "Legal" ,
    secondLink : " Terms",
    ThirdLink  : "privacy",
    fourthLink: "P2P Encryption ",
    id:3,
    open: false,


},
{ Intro: "Support",
    firstLink: "Contact us" ,
    secondLink : " Help Center",
    ThirdLink  : "Free Tutorials",
    fourthLink: "Send FeedBack ",
    id:4,
    open: false

}

]

interface Details {
    Intro: string
    firstLink: string
    secondLink : string
    ThirdLink  : string
    fourthLink: string
    id:number
    open: boolean

}





const FooterCont:React.FC = () => {
    const [linkData,setlinkData] = useState<Details[]>(linkDetails)

    const openOthers=(clicked:number)=>{
       
        setlinkData(prev=>
             prev.map((detail)=>{
                return clicked==detail.id ?{...detail ,open:true} : detail
    
            })

        )


    }
    const closeOthers=(clicked:number)=>{
       
        setlinkData(prev=>
             prev.map((detail)=>{
                return clicked==detail.id ?{...detail ,open:false} : detail
    
            })

        )


    }



  return (
   <footer className='bg-[#0C3B2E] lg:pt-10 '>
    <div className='text-white py-6 md:flex justify-between md:px-6 lg:justify-around'>
    <div className='flex flex-col items-center space-y-6 md:w-[10%]'>
        <div className=''>
            <img src={featherwhite} alt="" />
        </div>
        <select name="" id="" className='outline-none  border-[1px] border-white text-white px-3 opacity-50 bg-[#0C3B2E]'>
            <option>English</option>
        </select>
        <div className="flex items-center space-x-1 opacity-50 text-[0.8rem]">
        
        <FaRegCopyright />
            <span className=''>2022</span>
            <span>Feather</span>
        
      
        </div>
    </div>
    <div className='px-5 md:flex md:w-[80%] lg:w-[60%]   justify-between'>
        {linkData.map(({Intro,firstLink,secondLink,ThirdLink,fourthLink,id,open})=>{
            return(
                
                     <div className='mb-6' key={id}>

            <div className='flex justify-between items-center border-b-[1.5px] border-[white] pb-4 mb-5 md:mb-0 md:border-none'>
                <p>{Intro}</p>
                <div className='md:hidden'>
                {open?<MdKeyboardArrowUp onClick={()=>{closeOthers(id)}} className='text-2xl'/>:
                <MdKeyboardArrowDown onClick={()=>{openOthers(id)}} className='text-2xl' /> }

                </div>
            
            </div>
            <ul className={`space-y-3 text-[1rem] font-light ${open ? " " :" hidden"} md:flex flex-col`}>
                <li className='hover:text-[1.2rem] md:hover:text-[1rem]'><a href="" >{firstLink}</a></li>
                <li className='hover:text-[1.2rem] md:hover:text-[1rem]'><a href="">{secondLink}</a></li>
                <li className='hover:text-[1.2rem] md:hover:text-[1rem]'><a href="">{ThirdLink}</a></li>
                <li className='hover:scale-[1.2rem] md:hover:text-[1rem] '><a href="">{fourthLink}</a></li>
                
            </ul>
            
            
            
    
                </div>
            )
        })}

    </div>


    {/* 
    <div>
        <div>
            <div className=''>
                <p>products</p>
                <div>
                <MdKeyboardArrowDown />
                <MdKeyboardArrowUp />
                </div>
            
            </div>
            <ul>
                <li><a href="">Pay Bills</a></li>
                <li><a href="">Swap</a></li>
                <li><a href="">Live trading</a></li>
            </ul>
            
            
            
        </div>

        <div>
            <div className=''><p >About us</p></div>
            <ul>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Customers</a></li>
            </ul>
            
            
            
        </div>


        
        <div>
            <div className=''><p>Security</p></div>
            <ul>
                <li><a href="">Legal</a></li>
                <li><a href="">Terms</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">P2P Encryption</a></li>
            </ul>
            
            
            
        </div>



        
        <div>
            <div className=''><p>Support</p></div>
            <ul>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Help Center</a></li>
                <li><a href="">Free Tutorials</a></li>
                <li><a href="">Send FeedBack</a></li>
            </ul>
            
            
            </div>
            
        

        

    </div> */}
    </div>

<div className='lg:flex justify-end lg:w-[80%] lg:mx-auto'>
    <div className='flex justify-center space-x-5 py-8'>
        <div className='w-[25px]'>
            <img src={facebook} alt="" className='w-full' />
        </div>

        <div className='w-[25px]'>
            <img src={instagram} alt="" className='w-full'/>
        
        </div>
        <div className='w-[25px]'>
            <img src={linkedln} alt="" className='w-full'/>
        </div>
        <div className='w-[25px]'>
            <img src={twitter} alt="" className='w-full'/>
        </div>

        </div>
    </div>



   </footer>

  )
}

export default FooterCont