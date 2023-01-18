import * as FaIcons from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { ImProfile } from "react-icons/im";

export const SidebarData = [
    {
        title: 'Users_data',
        path: '/admin_index',
        icon: <FaIcons.FaUsers />
    },
    // {
    //     title: 'AdminProfile',
    //     path: '/admin_index/admin-profile',
    //     icon: <ImProfile />
    // },
    {
        title: 'Messages',
        path: '/admin_index/messages',
        icon: <FaIcons.FaRocketchat />
    },
    {
        title: 'Settings',
        path: '/admin_index/settings',
        icon: <FaIcons.FaRegSun />
    },
    {
        title: 'Logout',
        path: `/`,
        icon: <BiLogOut style={{ fontSize: '28px' }}
            onClick={() => localStorage.removeItem('authToken')}
             />
    },
]
