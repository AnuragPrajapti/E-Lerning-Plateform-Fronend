import * as FaIcons from 'react-icons/fa' 
import { BiLogOut } from 'react-icons/bi' 
import { ImProfile } from "react-icons/im";

export const SidebarData = [
    {
        title: 'AdminProfile',
        path: '/admin_index',
        icon: <ImProfile />
    },
    {
        title: 'Users_data',
        path: ':id',
        icon: <FaIcons.FaUsers />
    },
    {
        title: 'Messages',
        path: ':id/messages',
        icon: <FaIcons.FaRocketchat />
    },
    {
        title: 'Settings',
        path: ':id/settings',
        icon: <FaIcons.FaRegSun />
    },
    {
        title: 'Logout',
        path: `/`,
        icon: <BiLogOut style={{ fontSize : '28px' }} />
    },
]
