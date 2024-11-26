import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import ClientDashboard from './components/Dashboard/ClientDashboard'
import Preloader from './components/Preloader/Preloader'

const App = () => {
  const [user, setUser] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)
  const [Allemployee, setAllemployee] = useState([])
  const [Allclient, setAllclient] = useState([])
  const [Loading, setLoading] = useState(true)

  // Handle the loading state and user authentication logic
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)

    const AnyLoggedIn = localStorage.getItem('LoggedInBy')
    if (AnyLoggedIn) {
      setUser(JSON.parse(AnyLoggedIn))
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const employees = [];
      const clients = [];

      userData.forEach((e) => {
        if (e.role === "Employee") {
          employees.push(e);
        } else if (e.role === "Client") {
          clients.push(e);
        }
      });

      setAllemployee(employees);
      setAllclient(clients);
    }, 2000)
  }, [userData]);

  useEffect(() => {
    { user ? localStorage.setItem('LoggedInBy', JSON.stringify(user)) : null }
  }, [user])

  const handleLogin = (email, password) => {
    const currentuser = userData.find((e) => email == e.email && e.password == password)
    if (currentuser) {
      setUser(currentuser)
    }
    else {
      alert('Invalid Credentials....')
    }
  }

  return (
    <>
      {/* Loading and Login Screen */}
      {!user && Loading ? <Preloader /> : !user ? <Login handleLogin={handleLogin} /> : ''}

      {/* Main Dashboard (Admin, Employee, Client) */}
      {user ? user.role === 'Administrator' ?
        <AdminDashboard
          changeUser={setUser}
          data={user}
          allemployee={Allemployee}
          allclient={Allclient}
        /> :
        user.role === 'Employee' ?
          <EmployeeDashboard
            changeUser={setUser}
            data={user}
            allclient={Allclient} /> :
          user.role === 'Client' ?
            <ClientDashboard
              changeUser={setUser}
              data={user}
              allemployee={Allemployee} />
            : null : null}
    </>
  )
}

export default App
