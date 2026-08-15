import React, { useContext } from 'react'
import Dashboard from '../pages/Admin/Dashboard'
import DoctorDashboard from '../pages/Doctor/DoctorDashboard'
import { AdminContext } from '../context/AdminContext'

const Home = () => {

    const { aToken } = useContext(AdminContext)

    if (aToken) {
        return <Dashboard/>
    }

    return <DoctorDashboard/>
}

export default Home