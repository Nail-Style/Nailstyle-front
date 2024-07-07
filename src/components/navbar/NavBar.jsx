import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import LogoNailstyle from '../../assets/LogoNailstyle.png'

const NavBar = () => {

  const NavBar_Container = styled(motion.nav)`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  z-index: 2;
  `
  const H2_Logo = styled(motion.h2)`
    padding: 0;
    margin: 0;
    font-family: "Lily Script One", sans-serif;
    font-size: 55px;
    font-weight: 400;
    color: #999DE2;
  `
  const Img_Logo = styled(motion.img)`
    padding: 0;
    margin-left: 30px;
    width: 55px;
  `
  return (
    <NavBar_Container>
        <Img_Logo src={LogoNailstyle} alt="LogoNailstyle" initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}/>
            
      <H2_Logo initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>Nailstyle</H2_Logo>
    </NavBar_Container>
  )
}

export default NavBar
