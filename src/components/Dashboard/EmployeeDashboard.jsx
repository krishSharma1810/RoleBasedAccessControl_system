import React, { useState, useEffect } from 'react'
import AllClients from '../other/AllClients'
import Header from '../other/Header'

const EmployeeDashboard = (props) => {

  const [PrevClient, setPrevClient] = useState([])
  const [currentClient, setcurrentClient] = useState([])

  useEffect(() => {
    const arrayCurrent = []
    const arrayPrev = []
    props.allclient.map((e) => {

      if (e.assigned_employee == props.data.id) {
        arrayCurrent.push(e)
      }
      if (e.previous_works[0].employee == props.data.name) {
        arrayPrev.push(e)
      }
    })
    setPrevClient(arrayPrev)
    setcurrentClient(arrayCurrent)
  }, [props])


  const ChangeWork = (clientName) => {
    setcurrentClient((prevCurrentClients) => {
      const updatedCurrentClients = prevCurrentClients.filter(
        (client) => client.name !== clientName
      );
      const movedClient = prevCurrentClients.find(
        (client) => client.name === clientName
      );

      if (movedClient) {
        setPrevClient((prevPrevClients) => [...prevPrevClients, movedClient]);
      }

      return updatedCurrentClients;
    });
  };

  return (
    <div className='p-5 sm:p-10 bg-[#1C1C1C] h-auto sm:h-screen'>
      <div>
        <Header changeUser={props.changeUser} data={props.data} />
        
        <p className='mt-10 text-2xl sm:text-4xl font-semibold text-slate-500'>Current Project :</p>
        {currentClient.length !== 0 ?
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-5 gap-5'>
              {currentClient.map(function (e, idx) {
                return (
                  <div key={idx} className='bg-slate-500 h-auto p-6 sm:p-8 rounded-lg'>
                    <div className='flex justify-between items-center gap-4 sm:gap-8'>
                      <h1 className='text-slate-300 text-xl sm:text-2xl md:text-3xl font-bold'>{e.name}</h1>
                      {e.active ? <div className='bg-green-600 h-4 w-4 sm:h-5 sm:w-5 rounded-full'></div> :
                        <div className='bg-red-600 h-4 w-4 sm:h-5 sm:w-5 rounded-full'></div>}
                    </div>
                    <h2 className='text-sm sm:text-base'>{e.email}</h2>
                    <div>
                      <p className='text-sm sm:text-base text-slate-400 mt-5'>CURRENT SERVICE :</p>
                      <p className='text-lg sm:text-2xl'>{e.current_work.service}</p>
                    </div>
                    <div className='flex justify-center'>
                      <button
                        onClick={() => ChangeWork(e.name)}
                        className="mt-5 bg-green-300 w-full py-3 rounded-lg font-semibold text-slate-700 hover:bg-green-500"
                      >
                        Mark as Complete
                      </button>
                    </div>
                  </div>)
              })}
            </div>
          </div>
          : <div className='mt-5 text-slate-500 text-xl sm:text-2xl font-semibold p-10'>No Pending Work</div>}

        <p className='mt-10 text-2xl sm:text-4xl font-semibold text-slate-500'>Previous Projects :</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-5 gap-5'>
          {PrevClient.map(function (e, idx) {
            return (
              <div key={idx} className='bg-slate-500 h-auto p-6 sm:p-8 rounded-lg'>
                <div className='flex justify-between items-center gap-4 sm:gap-8'>
                  <h1 className='text-slate-300 text-xl sm:text-2xl md:text-3xl font-bold'>{e.name}</h1>
                  {e.active ? <div className='bg-green-600 h-4 w-4 sm:h-5 sm:w-5 rounded-full'></div> :
                    <div className='bg-red-600 h-4 w-4 sm:h-5 sm:w-5 rounded-full'></div>}
                </div>
                <h2 className='text-sm sm:text-base'>{e.email}</h2>
                <div>
                  <p className='text-sm sm:text-base text-slate-400 mt-5'>CURRENT SERVICE :</p>
                  <p className='text-lg sm:text-2xl'>{e.previous_works[0].service}</p>
                </div>
              </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
