import React, { useState } from 'react'
import { IChatListItems } from '../interFace';

const Avatar = ({ image , isOnline } : any ) => {


  return (
    <div className="avatar">
    <div className="avatar-img">
      <img src={image} alt="#" />
    </div>
    <span className={`isOnline ${isOnline}`}></span>
  </div>
  )
}

export default Avatar;