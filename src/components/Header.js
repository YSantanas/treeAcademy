import React from 'react';
import Arbol from '../assets/logoArbol.png';

const Header = () => {
  return (
    <div class="d-flex justify-content-center gap-5 pb-6 bg-light">
     


    <img  src={Arbol} class="d-flex p-2" alt="logo" />
  
    </div>
  );
}

export default Header