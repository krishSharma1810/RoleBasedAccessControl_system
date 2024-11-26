import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('LoggedInBy', '')
    props.changeUser('')
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-10 my-5">
      {/* Left Section: Greeting and Name */}
      <div className="text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-slate-500">
          Hello <br />
          <span className="font-bold text-slate-600">{props.data.name} 👋</span>
        </h1>
      </div>

      {/* Right Section: Log Out Button */}
      <div className="mt-4 sm:mt-0">
        <button 
          onClick={logOutUser} 
          className="bg-red-500 px-8 sm:px-10 py-2 rounded-xl font-bold text-lg sm:text-xl text-white hover:bg-red-600 transition-all"
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Header
