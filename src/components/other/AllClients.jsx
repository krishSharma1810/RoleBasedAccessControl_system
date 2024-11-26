import React from 'react'

const AllClients = (props) => {

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-5'>
        {props.allclient.map(function (e, idx) {
          return (
            <div key={idx} className='bg-[#fff] h-auto p-6 sm:p-8 rounded-lg shadow-lg'>
              <div className='flex justify-between items-center gap-4 sm:gap-10'>
                <h1 className='text-[#1a5276] text-xl sm:text-2xl md:text-3xl font-bold'>{e.name}</h1>
                {e.active ? 
                  <div className='bg-green-600 h-5 w-5 rounded-full'></div> : 
                  <div className='bg-red-600 h-5 w-5 rounded-full'></div>
                }
              </div>
              <h2 className='text-sm sm:text-base text-[#1a5276]'>{e.email}</h2>
              <div className='flex flex-col sm:flex-row justify-between mt-4 gap-4'>
                <div>
                  <p className='text-sm sm:text-base text-[#1a5276]'>CURRENT SERVICE :</p>
                  <p className='text-xl sm:text-2xl text-[#1a5276]'>{e.current_work.service}</p>
                </div>
                <div>
                  <p className='text-sm sm:text-base text-[#1a5276]'>EMPLOYEE :</p>
                  <p className='text-xl sm:text-2xl text-[#1a5276]'>{e.current_work.employee}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllClients;
