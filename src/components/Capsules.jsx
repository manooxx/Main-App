import React, { useEffect, useState } from 'react'
import Img from '../assets/cap2.jpg'
import img2 from '../assets/rockBg.jpg'
import axios from 'axios'
import GridCapsulesData from './GridCapsulesData'

const url = "https://api.spacexdata.com/v3"
const capsules = "capsules"

const Capsules = () => {
  const [capsulesData, setCapsulesData] = useState([]);

const fetchingData = async()=>{

    const {data} = await axios.get(`${url}/${capsules}`)
    setCapsulesData(data);
}

useEffect(()=>{

fetchingData();
window.scrollTo(0, 0);

},[])


  return (
    <section>
      <div className='bg-fixed bg-cover bg-center bg-no-repeat min-h-screen flex items-center   ' style={{ backgroundImage: `url(${Img})` }}>

        <div className=' px-5 flex flex-col gap-5  '>
          <h1 className=' text-white font-bold text-6xl'>
            Capsules
          </h1>

          <p className='text-white text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, omnis.</p>
        </div>


      </div>

      <div className='p-10 bg-cover bg-center bg-no-repeat bg-fixed min-h-screen' style={{ backgroundImage: `url(${img2})` }}>
        
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
        capsulesData.map((data)=>(
          <GridCapsulesData
          key={data.capsule_serial}
          serialNo={data.capsule_serial}
          status={data.status}
          original_launch={data.original_launch}
          type={data.type}
          details={data.details}
          reuse_count={data.reuse_count}

        />
        ))
       }
        </div>

      </div>




    </section>
  )
}

export default Capsules
