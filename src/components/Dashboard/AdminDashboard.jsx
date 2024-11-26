import React from 'react'
import AllClients from '../other/AllClients'
import Allemployees from '../other/Allemployees'
import Header from '../other/Header'

const AdminDashboard = (props) => {

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Header */}
      <Header changeUser={props.changeUser} data={props.data} />

      {/* Clients Section */}
      <div className="mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#444] mb-4">
          Clients:
        </h1>
        <AllClients allclient={props.allclient} />
      </div>

      {/* Employees Section */}
      <div className="mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#444] mb-4">
          Employees:
        </h1>
        <Allemployees allemployee={props.allemployee} data={props.data} />
      </div>
    </div>
  )
}

export default AdminDashboard
