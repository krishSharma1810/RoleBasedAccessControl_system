import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header = (props) => {
  const headerRef = useRef(null);
  const greetingRef = useRef(null);
  const nameRef = useRef(null);
  const buttonRef = useRef(null);

  const logOutUser = () => {
    localStorage.setItem('LoggedInBy', '');
    props.changeUser('');
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

    // Animate the header container
    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      // Bounce effect for the greeting text
      .fromTo(
        greetingRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, ease: 'bounce.out', duration: 1 },
        '-=0.5'
      )
      // Fade-in effect for the name
      .fromTo(
        nameRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 },
        '-=0.8'
      )
      // Slide-in effect for the log-out button
      .fromTo(
        buttonRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1 },
        '-=0.8'
      );
  }, []);

  return (
    <div
      ref={headerRef}
      className="flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-10 my-5"
    >
      {/* Left Section: Greeting and Name */}
      <div className="text-center sm:text-left">
        <h1 ref={greetingRef} className="text-2xl sm:text-3xl md:text-4xl text-slate-500">
          Hello <br />
          <span ref={nameRef} className="font-bold text-slate-600">
            {props.data.name} 👋
          </span>
        </h1>
      </div>

      {/* Right Section: Log Out Button */}
      <div className="mt-4 sm:mt-0">
        <button
          ref={buttonRef}
          onClick={logOutUser}
          className="bg-red-500 px-8 sm:px-10 py-2 rounded-xl font-bold text-lg sm:text-xl text-white hover:bg-red-600 hover:scale-105 transition-all"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
