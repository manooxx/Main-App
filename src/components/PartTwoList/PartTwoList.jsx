import React, { useEffect, useState } from 'react'
import GridCapItems from './GridCapItems'
import axios from 'axios';
import Pagination from './Pagination';

const url = "https://api.spacexdata.com/v3";
const capsules = "capsules"

const PartTwoList = () => {

  // this is for showing all the capsules
  const [capData, setCapData] = useState([]);
  // these two are for currentPage and capsule per page
  const [currentPage, setCurrentPage] = useState(1);
  const [capPerPage] = useState(6);

  // this is for selecting status our 1st filter
  const [selectStatus, setSelectStatus] = useState('Select Status')
  const [selectType, setSelectType] = useState('Select Type')
  
  // this is for selecting type our second filter
  
  const [filteredAllData, setFilteredAllData ] = useState([])
  






  const fetchCapData = async () => {

    const { data } = await axios.get(`${url}/${capsules}`)

    setCapData(data);
    

  }
  useEffect(() => {

    fetchCapData();

  }, [])

  // this is for the pagination purpose
  const lastPostIndex = currentPage * capPerPage;
  const firstPostIndex = lastPostIndex - capPerPage;
  const paginatedCapData = filteredAllData.slice(firstPostIndex, lastPostIndex)



  // the function for Extracting unique status values from api data
   const uniqueStatus = [...new Set(capData.map((items)=>items.status))]
   console.log(uniqueStatus)
    uniqueStatus.unshift("Select Status");

  // the function for Extracting unique type values from api data
   const uniqueType = [...new Set(capData.map((items)=>items.type))]
   console.log(uniqueType)
    uniqueType.unshift("Select Type");




    // the function to handle onchange for status
    const handleStatus =(e)=>(setSelectStatus(e.target.value))

    // the function to handle onchange for type
    const handleType =(e)=>(setSelectType(e.target.value))




    const applyFilter=()=>{

  
      // let updatedCapList = capData;
      // if(selectStatus) updatedCapList= updatedCapList.filter((item)=>item.status===selectStatus)


      // filterStatus logic
      // const filteredData = selectStatus === 'Select Status' ? capData : capData.filter(item => item.status === selectStatus);
      // const filteredType = selectType === 'Select Type' ? capData : capData.filter(item => item.type === selectType);
     
     if( capData.length > 0){
      const filteredData = capData.filter(
        item => 
          (selectStatus === 'Select Status' || item.status === selectStatus) &&
          (selectType === 'Select Type' || item.type === selectType)
      );
      setFilteredAllData(filteredData)
     }
    
      
      // filterType logic
      



     }; 
  

   useEffect(()=>{




     applyFilter();

    
    

   },[selectStatus, capData, selectType])

 
  




  return (
    <div className=''>
      <div className='flex flex-col pt-8 items-center gap-2 '>

        <div>

          <h1 className='text-5xl font-bold text-white'>Capsules</h1>

        </div>
        <div className='w-20 h-[2px] bg-white rounded-full'></div>

      </div>
      <div className='flex m-3 gap-3'> 
        <h1 className=' font-bold text-white'>Filters : </h1>

        <select className=' w-28 md:w-40 h-8 bg-black border text-sm font-semibold px-2 text-white outline-none' value={selectStatus} onChange={handleStatus}  id="statusFilter">
          {/* <option value="">Select Status</option>
          <option value="">Active</option>
          <option value="">Retired</option>
          <option value="">Unknown</option> */}
          {
            uniqueStatus.map((status)=> <option key={status} value={status} >{status}</option>)
          }
        </select>
        <select className='w-28 md:w-40 h-8 bg-black border text-sm font-semibold px-2 text-white outline-none' value={selectType} onChange={handleType}  id="statusFilter">
          {/* <option value="">Select Status</option>
          <option value="">Active</option>
          <option value="">Retired</option>
          <option value="">Unknown</option> */}
          {
            uniqueType.map((type)=> <option key={type} value={type} >{type}</option>)
          }
        </select>
      </div>


      <div className=' px-4 w-full md:h-[430px]'>

        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 px-4 gap-4 text-white  '>

          {
            paginatedCapData.map((data) => (
              <GridCapItems
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



      <div className=' flex justify-center items-center '>
        <Pagination totalPost={filteredAllData.length} capPerPage={capPerPage} setCurrentPage={setCurrentPage} />
      </div>


    </div>
  )
}

export default PartTwoList
