import React from 'react'

const GridCapsulesData = ({ serialNo, status, original_launch, type, details, reuse_count, }) => {
    return (
        <div className='md:w-[360px] h-45 border-2 shadow-2xl text-white  p-3 px-6'>
            <h1> 
               <b>Type : </b> {type}</h1>
            <div>
              <b>SerialNo. :</b>  {serialNo}
            </div> 

            <span className=''>
               <b>reuse : </b>  {reuse_count}
            </span>

            <div>
                {status === "active" ? <ul className="text-green-500 font-bold" >{status} </ul> : <ul className='text-red-500 font-bold'>{status}</ul>}
            </div>

            <p className='text-sm'><b>Original Lounch : </b>{original_launch}</p>
            <div className='text-sm'>
               
            <b>Details : </b> {details}
               

            </div>

            {/* <button className='border-2 text-white text-sm w-24 font-bold p-1 my-1 transform duration-300 hover:bg-white hover:text-black'>Show More</button> */}


        </div>
    )
}

export default GridCapsulesData
