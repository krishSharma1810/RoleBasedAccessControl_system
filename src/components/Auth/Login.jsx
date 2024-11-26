import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl bg-[#e6f2fe] border-[#81bbf6] p-8 md:p-12 lg:p-16 w-full max-w-sm'>
        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
          className='flex flex-col items-center justify-center'
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
            className='outline-none bg-transparent border-2 border-[#81bbf6] font-medium text-base sm:text-lg md:text-xl py-2 px-6 rounded-full placeholder:text-[#717d7e] w-full'
            type="email"
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
            className='outline-none bg-transparent border-2 border-[#81bbf6] font-medium text-base sm:text-lg md:text-xl py-2 px-6 rounded-full mt-3 placeholder:text-[#717d7e] w-full'
            type="password"
            placeholder='Enter password'
          />
          <button className='mt-7 text-white border-none outline-none hover:bg-[#5dade2] hover:font-bold font-semibold bg-[#063970] text-lg py-2 px-8 w-full rounded-full'>
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
