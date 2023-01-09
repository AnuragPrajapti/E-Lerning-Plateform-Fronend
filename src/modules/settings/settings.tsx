import React from 'react'
import SettingMenu from '../../common/cards/settingMenu';
import { useNavigate } from 'react-router-dom';
import { accountMenu } from '../../utils/accountMenu';

export const settings = () => {
  const navigate  = useNavigate();
  return (
    <div
    style={{
      marginTop: 20,
      width: '100%',
      float: 'left',
    }}
  >
    {accountMenu?.map((item, index) => (
      <SettingMenu 
        key={index}
        data={item}
        onClick={() => navigate(`/${item.route}`)}
      />
    ))}
  </div>
  )
}
