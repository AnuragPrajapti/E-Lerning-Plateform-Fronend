import React from 'react'
import Sidebar from './adminSidebar/adminSidebar'
import { Outlet } from 'react-router-dom'

const AdminIndex = () => {

  return (
    <div>
         <Sidebar />
         <Outlet />
         {/* <AdminProfile />
         <UsersData /> */}
    </div>
  )
}

export default AdminIndex;