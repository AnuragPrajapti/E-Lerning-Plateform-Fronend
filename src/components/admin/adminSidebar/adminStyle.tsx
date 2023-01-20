import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Navbar = styled.div`
    display: flex;
    // justify-content: start;
    align-items: center;
    height: 3.5rem;
    background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(10, 55, 97, 0) 0%,
    rgba(10, 55, 97, 0.78) 0.01%,
    #0a3761 100%
  );
`

export const MenuIconOpen = styled(Link)`
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    margin-left: 2rem;
    width: 50%;
    color: #ffffff;
`
export const AdminProfileDetails = styled.div`
   width: 50%;
   display : flex;
   justify-content: end;
   img{
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin: 0 20px 0 0;
     }
`

export const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: #ffffff;
`

export const SidebarMenu = styled.div<{ close: boolean }>`
    width: 260px;
    height: 100vh;
     background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(10, 55, 97, 0) 0%,
    rgba(10, 55, 97, 0.78) 0.01%,
    #0a3761 100%
  );
    position: fixed;
    top: 0;
    left: ${({ close }) => close ? '0' : '-100%'};
    transition: .6s;
    z-index: 9999;
`

export const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;
`

export const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #ffffff;
        color: #000080;
        width: 100%;
        height: 45px;
        text-align: center;
        border-radius: 5px;
        margin: 0 2rem;
    }
`
