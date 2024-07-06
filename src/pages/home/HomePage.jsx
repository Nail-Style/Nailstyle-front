import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HomePage = () => {

  const Container = styled.div`
  max-width: 100%;
  height: 4200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fffdd0;
  `
  const Sections =styled.div`
  width: 1440px;
  height: 800px;
  border: 1px solid #fff;
  border-radius: 8px;
  background-color: red;
  `
  return (
    <Container>
      <Sections as={motion.div} >

      </Sections>
      <Sections>
        <h2>Seções</h2>
      </Sections>
      <Sections>
        <h2>Seções</h2>
      </Sections>
      <Sections>
        <h2>Seções</h2>
      </Sections>
      <Sections>
        <h2>Seções</h2>
      </Sections>
    </Container>
  )
}

export default HomePage
