import React from 'react'
import { Link } from 'react-router-dom'
import{SiSpacex} from "react-icons/si"
import { IoReorderThree } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from 'react'




const Header = () => {
 const [visible, SetVisible] = useState(false)


  return (
  <nav className='sd:absolute w-full md:flex md:items-center md:justify-between px-5  md:px-16   top-0 bg-black text-white font-semibold'>

       <div className=''>
            <Link to='/'>
                 <SiSpacex className='text-7xl h-18 text-white'/>
                 </Link>
        </div>

        <div className='' onClick={()=>(SetVisible(!visible))}>
        { 
        visible?  <IoClose className='md:hidden absolute top-7 right-5  text-2xl'/>: <IoReorderThree  className='md:hidden absolute top-7 right-5  text-2xl'/> 

        }
          

          


        </div>

        
        <ul className={`absolute md:static bg-black md:flex md:justify-center md:items-center md:gap-10 left-0 w-full pl-2 md:z-auto  md:w-auto md:pl-0 transition-all duration-500 ease-in  text-white ${visible? 'top-16 opacity-100 ': 'md:opacity-100 opacity-0  z-[-1]'} `}>

            <li className= 'py-3 md:p-2' onClick={()=>(SetVisible(!visible))}>
              <Link to='/'>Home</Link>
            </li>
            <li className='py-3 md:p-2 '  onClick={()=>(SetVisible(!visible))}>
              <Link to='/Rockets'>Rockets</Link>
            </li>
            <li className='py-3 md:p-2' onClick={()=>(SetVisible(!visible))}>
              <Link to='/Capsules'>Capsules</Link>
            </li>
            <li className='py-3 md:p-2' onClick={()=>(SetVisible(!visible))}>Contacts</li>
            <li className='py-3 md:p-2' onClick={()=>(SetVisible(!visible))}>About</li>
        </ul>
  </nav>
  )
}

export default Header
