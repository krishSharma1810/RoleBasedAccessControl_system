import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Allemployees = (props) => {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: cardRefs.current, start: 'top 80%' } }
    );
  }, [props]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-5">
      {props.allemployee.map((e, idx) => (
        <div
          ref={(el) => (cardRefs.current[idx] = el)}
          key={idx}
          className="bg-[#fff] h-auto p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300"
        >
          <div className="flex justify-between items-center gap-4 sm:gap-8">
            <h1 className="text-[#1a5276] text-xl sm:text-2xl md:text-3xl font-bold">{e.name}</h1>
            {e.active ? <div className="bg-green-600 h-5 w-5 rounded-full"></div> : <div className="bg-red-600 h-5 w-5 rounded-full"></div>}
          </div>
          <h2 className="text-sm sm:text-base text-[#1a5276]">{e.email}</h2>
          <div className="flex flex-col sm:flex-row justify-between mt-4 gap-4">
            <div>
              <p className="text-sm sm:text-base text-[#1a5276]">
                Live Project:
              </p>
              <p className="text-xl sm:text-2xl text-[#1a5276]">
                {e.current_projects[0].project}
              </p>
            </div>
            <div>
              <p className="text-sm sm:text-base text-[#1a5276]">Client:</p>
              <p className="text-xl sm:text-2xl text-[#1a5276]">
                {e.current_projects[0].client}
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm sm:text-base mt-5 text-[#1a5276]">
              Services:
            </p>
            {e.services.map((ele, idx) => (
              <p key={idx} className="text-xl sm:text-2xl text-[#1a5276]">
                {ele}
              </p>
            ))}
          </div>
          <div className="mt-5">
            <p className="text-sm sm:text-base text-[#1a5276]">
              Qualification:
            </p>
            <p className="text-xl sm:text-2xl text-[#1a5276]">
              {e.qualifications}
            </p>
          </div>

          {props.data.role === 'Client' && (
            <div className="p-5">
              <button
                onClick={() => props.onSelectEmployee(e)}
                className="mt-5 bg-green-200 hover:bg-green-700 hover:text-white hover:font-bold w-full rounded-lg px-5 py-3 text-slate-500 transition-transform transform hover:scale-105"
              >
                Select for the Work
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Allemployees;
