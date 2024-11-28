import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AllClients from '../other/AllClients';
import Allemployees from '../other/Allemployees';
import Header from '../other/Header';

gsap.registerPlugin(ScrollTrigger);

const AdminDashboard = (props) => {
  const headerRef = useRef(null);
  const clientSectionRef = useRef(null);
  const employeeSectionRef = useRef(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }
    );

    // Clients Section Animation
    gsap.fromTo(
      clientSectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: clientSectionRef.current,
          start: 'top 80%',
        },
      }
    );

    // Employees Section Animation
    gsap.fromTo(
      employeeSectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: employeeSectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div ref={headerRef}>
        <Header changeUser={props.changeUser} data={props.data} />
      </div>

      {/* Clients Section */}
      <div ref={clientSectionRef} className="mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#444] mb-4">
          Clients:
        </h1>
        <AllClients allclient={props.allclient} />
      </div>

      {/* Employees Section */}
      <div ref={employeeSectionRef} className="mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#444] mb-4">
          Employees:
        </h1>
        <Allemployees allemployee={props.allemployee} data={props.data} />
      </div>
    </div>
  );
};

export default AdminDashboard;
