import React, { useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
import { SidebarData } from './sidebarData'
import { Navbar, MenuIconOpen, SidebarMenu, MenuIconClose, MenuItems, MenuItemLinks, AdminProfileDetails } from './adminStyle'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../services/useTypeSelector'
import AdminProfileMidal from '../../modalPopup/AdminProfilePopup'
import { getAdminData } from '../../../services/authAdmin/adminSlice'

const Sidebar: React.FunctionComponent = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAdminData());
      }, [])
    const [close, setClose] = useState(false)
    const showSidebar = () => setClose(!close)
    const adminInfo = useAppSelector(state => state?.authAdminReducer?.adminData?.data)
    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {
                AdminProfileMidal &&
                <AdminProfileMidal
                    show={show}
                    handleClose={handleClose}
                    adminInfo={adminInfo}
                />
            }
            <Navbar>
                <MenuIconOpen to="#" onClick={showSidebar}>
                    <FaIcons.FaBars />
                </MenuIconOpen>
                <AdminProfileDetails>
                    <img src={adminInfo?.image} onClick={handleShow} alt="profile-img" />
                </AdminProfileDetails>
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