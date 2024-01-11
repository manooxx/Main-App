import React from 'react'

const Pagination = ({totalPost, capPerPage, setCurrentPage}) => {
    const pageArr= [];

    for(let i=1; i<=Math.ceil(totalPost/capPerPage); i++)
    pageArr.push(i);

  return (
    <div className='flex gap-5 ' >
        
        {
            pageArr.map((page, index)=>{
                return <button key={index} className='border-2 text-sm text-white w-8 rounded-full h-8 flex justify-center items-center  font-bold p-2 my-2 transform duration-300 hover:bg-white hover:text-black' onClick={()=>setCurrentPage(page)}>
                        {page}
                        
                 </button>
            })
        }
     </div>
  )
}

export default Pagination
