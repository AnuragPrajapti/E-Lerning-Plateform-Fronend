import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { SidebarData } from './sidebarData'
import { Navbar, MenuIconOpen, SidebarMenu, MenuIconClose, MenuItems, MenuItemLinks } from './adminStyle'
import { useState } from 'react'
// import { useParams } from 'react-router-dom';

const Sidebar: React.FunctionComponent = () => {
    // const { id } = useParams()
    const [close, setClose] = useState(false)
    const showSidebar = () => setClose(!close)

    return (
        <>
            <Navbar>
                <MenuIconOpen to="#" onClick={showSidebar}>
                    <FaIcons.FaBars />
                </MenuIconOpen>
            </Navbar>
            <SidebarMenu close={close}>
                <MenuIconClose to="#" onClick={showSidebar}>
                    <FaIcons.FaTimes />
                </MenuIconClose>
                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{ marginLeft: '16px' }}>{item.title}</span>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </SidebarMenu>
        </>
    )
}

export default Sidebar