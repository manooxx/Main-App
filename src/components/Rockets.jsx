import React, { useEffect, useState } from 'react'
import rockImg from '../assets/bg4.jpg'
import rockImg2 from '../assets/rockBg.jpg'
import GridItem from './GridItem'
import axios from 'axios'


const url = "https://api.spacexdata.com/v3"
const rockets = "rockets"



const Rockets = () => {

    const [gridData, setGridData] = useState([])

    useEffect(() => {

        const fetchData = async () => {


            const { data } = await axios.get(`${url}/${rockets}`)
            setGridData(data)



        };

        fetchData();

        window.scrollTo(0, 0);

    }, [])




    return (
        <section>
            <div className='bg-fixed bg-cover bg-center bg-no-repeat min-h-screen flex items-center   ' style={{ backgroundImage: `url(${rockImg})` }}>

                <div className=' px-5 flex flex-col gap-5  '>
                    <h1 className=' text-white font-bold text-6xl'>
                        Rockets
                    </h1>

                    <p className='text-white text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, omnis.</p>
                </div>


            </div>

            <div className='bg-fixed bg-cover bg-center bg-no-repeat min-h-screen flex items-center   ' style={{ backgroundImage: `url(${rockImg2})` }}>

                <div className='w-full min-h-screen  md:m-20'>

                    <div className='p-2 md:p-6 max-width  gap-5 grid  sm:grid-cols-1 md:grid-cols-2 '>

                        {
                            gridData.map((item) => (
                                <GridItem
                                    key={item.id}

                                    img={item.flickr_images}
                                    name={item.rocket_name}
                                    stage={item.stages}
                                    cost_per_launch={item.cost_per_launch}
                                    active={item.active}
                                    description={item.description}


                                />

                            ))
                        }

                    </div>

                </div>


            </div>

        </section>
    )
}

export default Rockets
