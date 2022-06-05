import React, { useEffect, useState } from 'react';
import UserInfoHeader from './UserInfoHeader';

import Logo from '../../assets/images/logo.png';


import './index.css';

function Header() {
  const [logged, setLogged] = useState('');

  useEffect(()=>{
    setLogged(true);
  }, []);

  return (
    <header className='header'>
      <img src={Logo} className="header--logo" alt="Logo do site" />
      <UserInfoHeader logged={logged} />
    </header>
  );
}

export default Header;