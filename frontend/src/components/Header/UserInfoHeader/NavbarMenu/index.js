import React from 'react';

import { FaUserCog, FaShoppingBasket } from "react-icons/fa";

import { MdExitToApp } from "react-icons/md";

import './index.css';

function NavbarMenu({navbarToggle}) {
  return (
    <div className={(navbarToggle ? "navbar-menu show" : "navbar-menu")}>
      <p> <FaUserCog /> perfil</p>
      <p> <FaShoppingBasket /> carrinho</p>
      <p> <MdExitToApp /> Sair</p>
    </div>
  );
}

export default NavbarMenu;