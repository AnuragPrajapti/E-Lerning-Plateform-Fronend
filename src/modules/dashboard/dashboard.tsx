import React from 'react'
import SidebarMenu from '../../common/sidebar/sidebarMenu'
import { Helper } from '../../utils/Helper'

const Dashboard = () => {
  return (
    <div>
     <SidebarMenu adminMenu={Helper?.adminMenu} />
    </div>
  )
}

export default Dashboard;

