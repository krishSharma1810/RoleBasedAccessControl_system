import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Allemployees from '../other/Allemployees';
import Header from '../other/Header';

gsap.registerPlugin(ScrollTrigger);

const ClientDashboard = (props) => {
  const [services] = useState([
    'AI-dependent services and solutions',
    'Cloud infrastructure VAPT',
    'Threat monitoring & SOC',
    'Company infrastructure & services VAPT',
  ]);

  const [CurrentEmployee, setCurrentEmployee] = useState([]);
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const employeesRef = useRef(null);
  const currentWorksRef = useRef(null);

  useEffect(() => {
    const array = props.allemployee.filter((e) => e.current_projects[0].client === props.data.name);
    setCurrentEmployee(array);
  }, [props]);

  const handleSelectEmployee = (employee) => {
    // Add the employee to the CurrentEmployee list if not already added
    if (!CurrentEmployee.find((e) => e.id === employee.id)) {
      setCurrentEmployee((prev) => [...prev, employee]);
    }
  };

  useEffect(() => {
    gsap.fromTo(headerRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo(
      servicesRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, scrollTrigger: { trigger: servicesRef.current, start: 'top 80%' } }
    );
    gsap.fromTo(
      employeesRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: employeesRef.current, start: 'top 80%' } }
    );
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div ref={headerRef}>
        <Header changeUser={props.changeUser} data={props.data} />
      </div>

      {/* Services Section */}
      <p className='text-[#444] text-2xl sm:text-3xl mt-10 px-5 font-semibold'>Available Services :</p>
      <div ref={servicesRef} className='flex flex-wrap justify-start sm:justify-evenly mt-5'>
        {services.map((e, idx) => (
          <h4 key={idx} className='text-[#1a5276] font-semibold text-lg sm:text-xl mb-4 sm:mb-0 sm:mr-8'>
            {e}
          </h4>
        ))}
      </div>

      {/* Employees Section */}
      <p className='text-[#444] text-2xl sm:text-3xl mt-10 px-5 font-semibold'>Employees :</p>
      <div ref={employeesRef}>
        <Allemployees allemployee={props.allemployee} data={props.data} onSelectEmployee={handleSelectEmployee} />
      </div>

      {/* Current Works Section */}
      {CurrentEmployee.length > 0 && (
        <>
          <p className='text-[#444] text-2xl sm:text-3xl mt-10 px-5 font-semibold'>Current Works :</p>
          <div ref={currentWorksRef} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5'>
            {CurrentEmployee.map((e, idx) => (
              <div key={idx} className='bg-[#fff] h-auto p-6 sm:p-8 rounded-lg shadow-lg'>
                <div className='flex justify-between items-center gap-4 sm:gap-20'>
                  <h1 className='text-[#1a5276] text-2xl sm:text-3xl font-bold'>{e.name}</h1>
                  {e.active ? <div className='bg-green-600 h-5 w-5 rounded-full'></div> : <div className='bg-red-600 h-5 w-5 rounded-full'></div>}
                </div>
                <h2 className='text-sm sm:text-base text-[#1a5276]'>{e.email}</h2>
                <div className='mt-4'>
                  <p className='text-sm sm:text-base text-[#1a5276]'>CURRENT SERVICE :</p>
                  <p className='text-lg sm:text-2xl text-[#1a5276]'>{e.current_projects[0].project}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ClientDashboard;
