import React from 'react';

const ModalCap = ({ onClose, serialNo, status, original_launch, type, details, reuse_count }) => {


    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
          event.stopPropagation();
        }
      };
    return (
        <div className="fixed inset-0 flex items-center justify-center  " onClick={onClose} >
            <div className=" fixed inset-0 bg-black opacity-50"></div>
            <div className="  bg-gradient-to-r from-gray-950 to-gray-700 md:w-1/3 md:h-56 p-4 rounded shadow-lg relative" onClick={handleOverlayClick}>


                <div>
                    <h1> <b>Type : </b>{type}</h1>
                    <div>
                       <b>SerialNo :</b> {serialNo}
                    </div>
                    <p><b>Original Lounch:</b> {original_launch}</p>

                    <span className=''>
                        <b>reuse:</b> {reuse_count}
                    </span>

                    <div>
                        {status === "active" ? <ul className="text-green-500 font-bold" >{status} </ul> : <ul className='text-red-500 font-bold'>{status}</ul>}
                    </div>

                    <div>
                        <b>Details :</b> {details}
                    </div>
                </div>





                <button  className='border-2 text-white text-sm w-24 font-bold p-1 my-1 transform duration-300 hover:bg-white hover:text-black' onClick={onClose}>
                    Close
                </button>



            </div>
        </div>
    );
};

export default ModalCap;