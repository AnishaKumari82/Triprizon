"use client";
import React, { useState } from 'react'

import Nav from './Nav'
import Mobilenav from './Mobilenav'

const Responsivenav = () => {
  const [showNav, setShowNav] = useState(false)
  const handleNavShow = () => {
    setShowNav(true);}
  const handleCloseNav = () => {
    setShowNav(false);  
  }
  return (
    <div>
      <Nav openNav={handleNavShow} />
      <Mobilenav showNav={showNav} closeNav={handleCloseNav} />
    </div>
  );
};


export default Responsivenav
