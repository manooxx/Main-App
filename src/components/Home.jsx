import React from 'react'
import PartTwoList from './PartTwoList/PartTwoList'

import img1 from '../assets/bg1.jpg'
import img2 from '../assets/rockBg.jpg'
import img3 from '../assets/bg4.jpg'
import img4 from '../assets/cap1.jpg'
// import img5 from '../assets/rocket.png'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <>

      <div className='bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex justify-center items-center ' style={{ backgroundImage: `url(${img1})` }}>


        <div className=' md:w-[1100px] md:h-[600px] flex md:gap-20 '>
         <div className=' pt-40 w-80'>
         <h1 className='font-extrabold text-4xl md:text-6xl text-white'>
            SpaceX
          </h1>

          <p className='text-white md:w-[500px] md:text-l font-semibold px-1 py-4'> is the first private company to develop a liquid-propellant rocket that has reached orbit.</p>
         </div>

          {/* <div className='h-full'>

            <div className='md:w-[500px] md:h-[500px] flex justify-end animate-moveUpDown  '>
              <img  className='md:w-96 md:h-2/3  bg-cover vector-graphics brightness- opacity-40' src={img5} alt="" />
              <img  className='vector-graphics border' boxSize={'sm'}  src={img5} alt="" />
            </div>
          </div> */}





        </div>
      </div>

      <div className='bg-gradient-to-r from-gray-950 to-gray-700  p-10 h-[1100px] md:h-[650px] md:flex flex-row md:gap-20 justify-center items-center '>

        <div className='md:w-[1000px] h-[500px] md:flex md:justify-center  md:items-center md:gap-28 '>

          <div className=' flex flex-col items-center justify-center tracking-wider md:w-[400px] h-[500px] px-4 gap-3'>

            <img className='md:w-[380px] md:h-[250px] border duration-300 md:hover:scale-105 md:hover:brightness-50' src={img3} alt="cover" />

            <h2 className='text-white text-4xl font-extrabold'>
              Rockets
            </h2>
            <p className='text-white text-justify text-sm'>Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond.</p>

            
              <Link to="/rockets" className='flex justify-center items-center w-60'>
                <button className='border-2 text-white text-sm w-1/2 font-bold p-2 my-2 transform duration-300 hover:bg-white hover:text-black'>MORE...</button>
              </Link>

          </div>



          <div className=' flex flex-col gap-3 items-center justify-center tracking-wider md:w-[400px] h-[500px] px-4'>

            <img className=' h-44 md:w-[380px] md:h-[250px] border duration-300 md:hover:scale-105 md:hover:brightness-50' src={img4} alt="cover" />

            <h2 className='text-white text-4xl font-extrabold'>
              Capsules
            </h2>
            <p className='text-white text-sm text-justify'>The Dragon capsule, also known as the pressurized section, allows for the transport of people as well as environmentally sensitive cargo.Dragon is equipped with Draco...</p>

            <Link to="/Capsules" className='flex justify-center items-center w-60'>
                <button className='border-2 text-white text-sm w-1/2 font-bold p-2 my-2 transform duration-300 hover:bg-white hover:text-black'>MORE...</button>
            </Link>




          </div>

        </div>

      </div>
      <div className='bg-cover bg-center bg-no-repeat bg-fixed min-h-screen' style={{ backgroundImage: `url(${img2})` }}>

          <PartTwoList/>

      </div>


    </>
  )
}

export default Home
