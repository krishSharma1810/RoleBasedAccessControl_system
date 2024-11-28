import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../other/Header';

gsap.registerPlugin(ScrollTrigger);

const EmployeeDashboard = (props) => {
  const [PrevClient, setPrevClient] = useState([]);
  const [currentClient, setcurrentClient] = useState([]);
  const currentClientRef = useRef(null);
  const prevClientRef = useRef(null);
  const cardRefs = useRef([]); // Define cardRefs here

  useEffect(() => {
    // Get previous and current clients from localStorage if available
    const storedPrevClients = JSON.parse(localStorage.getItem('prevClients')) || [];
    const storedCurrentClients = JSON.parse(localStorage.getItem('currentClients')) || [];

    setPrevClient(storedPrevClients);
    setcurrentClient(storedCurrentClients);

    const arrayCurrent = [];
    const arrayPrev = [];
    props.allclient.map((e) => {
      if (e.assigned_employee === props.data.id) {
        arrayCurrent.push(e);
      }
      if (e.previous_works[0].employee === props.data.name) {
        arrayPrev.push(e);
      }
    });
    setPrevClient(arrayPrev);
    setcurrentClient(arrayCurrent);

    // Check if the references exist before applying GSAP animation
    if (currentClientRef.current) {
      gsap.fromTo(
        currentClientRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: currentClientRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    if (prevClientRef.current) {
      gsap.fromTo(
        prevClientRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: prevClientRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Apply GSAP animation for cardRefs if available
    if (cardRefs.current.length > 0) {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRefs.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, [props]);

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

      // Save updated clients to localStorage
      localStorage.setItem('currentClients', JSON.stringify(updatedCurrentClients));
      localStorage.setItem('prevClients', JSON.stringify([...PrevClient, movedClient]));

      return updatedCurrentClients;
    });
  };

  return (
    <div className='p-5 sm:p-10 h-auto sm:h-screen'>
      <div>
        <Header changeUser={props.changeUser} data={props.data} />

        <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#444] mb-4'>Current Project :</p>
        {currentClient.length !== 0 ? (
          <div ref={currentClientRef}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-5'>
              {currentClient.map(function (e, idx) {
                return (
                  <div
                    key={idx}
                    ref={(el) => (cardRefs.current[idx] = el)} // Assign refs here
                    className='bg-[#fff] h-auto p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300'
                  >
                    <div className='flex justify-between items-center gap-4 sm:gap-8'>
                      <h1 className='text-[#1a5276] text-xl sm:text-2xl md:text-3xl font-bold'>{e.name}</h1>
                      {e.active ? (
                        <div className='bg-[#4CAF50] h-4 w-4 sm:h-5 sm:w-5 rounded-full'></div>
                      ) : (
                        <div className='bg-[#F44336] h-4 w-4 sm:h-5 sm:w-5 rounded-full'></div>
                      )}
                    </div>
                    <h2 className='text-sm sm:text-base text-[#1a5276]'>{e.email}</h2>
                    <div>
                      <p className='text-sm sm:text-base text-[#1a5276] mt-5'>CURRENT SERVICE :</p>
                      <p className='text-lg sm:text-2xl text-[#1a5276]'>{e.current_work.service}</p>
                    </div>
                    <div className='flex justify-center'>
                      <button
                        onClick={() => ChangeWork(e.name)}
                        className="mt-5 bg-[#4CAF50] w-full py-3 rounded-lg font-semibold text-white hover:bg-[#45A049]"
                      >
                        Mark as Complete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className='mt-5 text-[#1a5276] text-xl sm:text-2xl font-semibold p-10'>No Pending Work</div>
        )}

        <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#444] mb-4'>Previous Projects :</p>
        <div ref={prevClientRef}>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-5'>
            {PrevClient.map(function (e, idx) {
              return (
                <div
                  key={idx}
                  className='text-[#1a5276] bg-[#fff] h-auto p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300'
                >
                  <div className='flex justify-between items-center gap-4 sm:gap-8'>
                    <h1 className='text-[#1a5276] text-xl sm:text-2xl md:text-3xl font-bold'>{e.name}</h1>
                    {e.active ? (
                      <div className='bg-[#4CAF50] h-4 w-4 sm:h-5 sm:w-5 rounded-full'></div>
                    ) : (
                      <div className='bg-[#F44336] h-4 w-4 sm:h-5 sm:w-5 rounded-full'></div>
                    )}
                  </div>
                  <h2 className='text-sm sm:text-base text-[#1a5276]'>{e.email}</h2>
                  <div>
                    <p className='text-sm sm:text-base text-[#1a5276] mt-5'>CURRENT SERVICE :</p>
                    <p className='text-lg sm:text-2xl text-[#1a5276]'>{e.previous_works[0].service}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
