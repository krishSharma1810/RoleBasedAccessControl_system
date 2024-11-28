import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

    // Fade-in and scale animation for the form container
    tl.fromTo(
      formRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2 }
    )
      .fromTo(
        emailRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        '-=0.8'
      )
      .fromTo(
        passwordRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        buttonRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      );
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#f0f8ff]">
      <div
        ref={formRef}
        className="border-2 rounded-xl bg-[#e6f2fe] border-[#81bbf6] p-8 md:p-12 lg:p-16 w-full max-w-sm"
      >
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-[#81bbf6] font-medium text-base sm:text-lg md:text-xl py-2 px-6 rounded-full placeholder:text-[#717d7e] w-full"
            type="email"
            placeholder="Enter your email"
          />
          <input
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-[#81bbf6] font-medium text-base sm:text-lg md:text-xl py-2 px-6 rounded-full mt-3 placeholder:text-[#717d7e] w-full"
            type="password"
            placeholder="Enter password"
          />
          <button
            ref={buttonRef}
            className="mt-7 text-white border-none outline-none hover:bg-[#5dade2] hover:font-bold font-semibold bg-[#063970] text-lg py-2 px-8 w-full rounded-full"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
