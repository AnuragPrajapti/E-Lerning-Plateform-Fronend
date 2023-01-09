import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

export const Header = () => {
  return (
    <div>
        header
        <div className='navbar'>
            <span>header</span>

                <Link className='menuItems' to="#">
                </Link>
            </div>
    </div>
  )
}
