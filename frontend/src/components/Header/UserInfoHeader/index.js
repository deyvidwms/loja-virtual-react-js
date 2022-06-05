import React, { useState } from 'react';

import NavbarMenu from './NavbarMenu';

import { FaUserAlt } from "react-icons/fa";

import './index.css';

function UserInfoHeader({logged}) {
  const [navbarToggle, setNavbarToggle] = useState(false);

  const msgNotLogged = <p className='user-info-header--text'>Olá, seja bem vindo!</p>

  const msgLogged = <p className='user-info-header--text'>DEYVID</p>

  return (
    <div className='user-info-header' onClick={()=>{setNavbarToggle(!navbarToggle)}}>
      { !logged ? 
        msgNotLogged :
        msgLogged
      }
      <FaUserAlt className='user-info-header--user-icon' />
      <NavbarMenu navbarToggle={navbarToggle} />
    </div>
  );
}

export default UserInfoHeader;