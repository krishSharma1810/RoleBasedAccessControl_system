import React, { useState, useEffect } from 'react'
import AllClients from '../other/AllClients';
import Allemployees from '../other/Allemployees'
import Header from '../other/Header'

const ClientDashboard = (props) => {
  const [services, setServices] = useState([
    "AI-dependent services and solutions",
    "Cloud infrastructure VAPT",
    "Threat monitoring & SOC",
    "Company infrastructure & services VAPT"
  ]);

  const [CurrentEmployee, setCurrentEmployee] = useState([])

  useEffect(() => {
    const Array = []
    props.allemployee.map((e) => {
      if (e.current_projects[0].client == props.data.name) {
        Array.push(e)
      }
    })
    setCurrentEmployee(Array)
  }, [props])

  return (
    <div>
      <div>
        <Header changeUser={props.changeUser} data={props.data} />
        
        {/* Services Section */}
        <p className='text-[#444] text-2xl sm:text-3xl mt-10 px-5 font-semibold'>Available Services :</p>
        <div className='flex flex-wrap justify-start sm:justify-evenly mt-5'>
          {services.map((e, idx) => {
            return (
              <h4 key={idx} className='text-[#1a5276] font-semibold text-lg sm:text-xl mb-4 sm:mb-0 sm:mr-8'>
                {e}
              </h4>
            )
          })}
        </div>
        
        {/* Employees Section */}
        <p className='text-[#444] text-2xl sm:text-3xl mt-10 px-5 font-semibold'>Employees :</p>
        <Allemployees allemployee={props.allemployee} data={props.data} />

        {/* Current Works Section */}
        <p className='text-[#444] text-2xl sm:text-3xl mt-10 px-5 font-semibold'>Current Works :</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5'>
          {CurrentEmployee.map((e, idx) => {
            return (
              <div key={idx} className='bg-[#fff] h-auto p-6 sm:p-8 rounded-lg shadow-lg'>
                <div className='flex justify-between items-center gap-4 sm:gap-20'>
                  <h1 className='text-[#1a5276] text-2xl sm:text-3xl font-bold'>{e.name}</h1>
                  {e.active ? 
                    <div className='bg-green-600 h-5 w-5 rounded-full'></div> :
                    <div className='bg-red-600 h-5 w-5 rounded-full'></div>
                  }
                </div>
                <h2 className='text-sm sm:text-base text-[#1a5276]'>{e.email}</h2>
                <div className='mt-4'>
                  <p className='text-sm sm:text-base text-[#1a5276]'>CURRENT SERVICE :</p>
                  <p className='text-lg sm:text-2xl text-[#1a5276]'>{e.current_projects[0].project}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ClientDashboard
