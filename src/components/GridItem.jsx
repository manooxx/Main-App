import React from 'react'

const GridItem = ({img, name, stage, cost_per_launch, active, description}) => {
  return (
    <div className='bg-black  border s :text-white overflow-hidden'>

        <img className='h-40  md:h-64 w-full md:bg-cover object-center' src={img} alt="error" />

        <div className='text-white p-3'>

            <h2> <b className='font-semibold text-gray-400'>Rocket name:</b> {name}</h2>
            <p> <b className='font-semibold text-gray-400'>Stage: </b> {stage}</p>
            <p> <b className='text-gray-400 font-semibold'>Launch Cost:</b>  {cost_per_launch} $</p>
            <p>{active}</p>
            <p className='text-justify text-[10px]  '><b className='text-gray-400'>Description: </b> {description} </p>

            

        </div>

      
    </div>
  )
}

export default GridItem
