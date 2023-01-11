 import { RiParentFill } from "react-icons/ri";
 import {FaTachometerAlt} from 'react-icons/fa';
 import {FaWpforms} from 'react-icons/fa'
import {AiTwotoneSetting} from 'react-icons/ai'
export const Helper = {
    adminMenu:[
        { 
            title:'account',
            icon: <RiParentFill/>,
            route:"/accounts",
            color:null
        },
        { 
            title:'my Client',
            icon: <FaTachometerAlt/>,
            route:"/dashboard",
            color:null
        },
        { 
            title:'Forms',
            icon:<FaWpforms/>,
            route:"/forms",
            color:null
        },{ 
            title:'Setting',
            icon:<AiTwotoneSetting/>,
            route:"/setting",
            color:null
        }
    ],
    userMenu:[
        { 
            title:'my Client',
            icon: <FaTachometerAlt/>,
            route:"/dashboard",
            color:null
        },
        { 
            title:'Forms',
            icon:<FaWpforms/>,
            route:"/forms",
            color:null
        },{ 
            title:'Setting',
            icon:<AiTwotoneSetting/>,
            route:"/setting",
            color:null
        }
    ]
}