import React from 'react'
import styled from 'styled-components'

const NavBar = () => {

  const NavBar_Container = styled.nav`
  background-color: #f19900;
  position: relative;
  z-index: 2;

  `

  return (
    <NavBar_Container>
      <h2>Nailstyle</h2>
    </NavBar_Container>
  )
}

export default NavBar
