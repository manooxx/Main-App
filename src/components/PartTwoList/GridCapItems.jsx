import React, { useState } from 'react'
import ModalCap from './ModalCap';





const GridCapItems = ({serialNo, status, original_launch, type, details, reuse_count}) => {

    const [itemId, setItemId] = useState(null);







    const handleShowMore =()=>{

      if(itemId === null)
      setItemId(serialNo);
     
    
    }
    const handleCloseModal = ()=>{
      setItemId(null);
    }

  return (
    <div className='md:w-96 h-45 border  p-3 px-6'>
      <h1> {type}</h1>
      <div>
        {serialNo}
      </div>
      <p>Original Lounch: {original_launch}</p>

      <span className=''>
        reuse: {reuse_count}
      </span>

      <div>
        {status==="active"? <ul className="text-green-500 font-bold" >{status} </ul> : <ul className='text-red-500 font-bold'>{status}</ul> }
      </div>

      <button className='border-2 text-white text-sm w-24 font-bold p-1 my-1 transform duration-300 hover:bg-white hover:text-black' onClick={handleShowMore}>Show More</button>
      
      
      
          {itemId === serialNo && (
            <ModalCap onClose={handleCloseModal} serialNo={serialNo} status={status} original_launch={original_launch} type={type} details={details} reuse_count={reuse_count} />
            
           
          )}  
      
   
      
       
      
    </div>
  )
}

export default GridCapItems;
