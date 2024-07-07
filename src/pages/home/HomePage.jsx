import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import BackGround from '../../assets/BackGround.jpg'


//Imagens
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import manicure from '../../assets/manicure.jpg'

const HomePage = () => {

  const Container = styled.div`
  max-width: 100%;
  height: 4000px;  //aqui era 4200
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  //background-color: #fffdd0;
  background-attachment: fixed;
  `
  const Sections = styled.section`
  padding: 0;
  margin: 0;
  width: 1440px;
  height: 800px;
  //border: 1px solid #fff;
  //border-radius: 8px;
  background-color: #fffdd0;
  `
  const Section_BackGround = styled.div`
  width: 1440px;
  height: 800px;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: red;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${BackGround});
  background-attachment: fixed;
  `
  const Main = styled.main`
  margin: 0;
  padding: 0;
`
  const TxtContainer = styled.div`
  margin: 50px;
  position: relative;
  top: 120px;
  color: #fff;
  width: 35%;
  height: 35%;
`
  const Heading = styled(motion.h1)`
  display: flex;
  justify-content: left;
  width: 100%;
  height: auto;
  font-family: "Poppins", sans-serif;
`
  const Line = styled(motion.p)`
  display: flex;
  justify-content: left;
  width: 100%;
  height: auto;
  font-family: "Poppins", sans-serif;
`
  const Button = styled.button`
  border: 2px solid #fff;
  padding: 10px;
  margin-left: 10px;
  border-radius: 4px;
  color: #fff;
  background-color: #999de2;
  position: relative;
  right: 10px;
  margin-top: 5px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;

  &:hover {
    background-color: #993399;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
`
  const LoginButton = styled(Button)`
  background-color: #dda0dd;
  font-family: "Poppins", sans-serif;

  &:hover {
    background-color: #ff0084;
  }
`
  const ManicureImage = styled(motion.img)`
  height: 50%;
  width: 40%;
  position: relative;
  left: 118vh;
  bottom: 32vh;
  border: none;
  border-width: 8px;
  border-style: solid;
  border-color: pink;
  border-radius: 5px;
  transition: transform 0.5s;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.4);

  &:hover {
    filter: grayscale(0);
    cursor: pointer;
    transform: scale(1.1);
  }
`
  const ContainerTxt = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  top: 30vh;
  right: -100vh;
  width: 50%;
  height: auto;
`
  const Subtitle = styled.h2`
  width: 100%;
  justify-content: center;
  display: flex;
  color: #fff;
  font-family: "Poppins", sans-serif;
`
  const Descript = styled.p`
  justify-content: center;
  text-align: center;
  display: flex;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
`
  const ContainerImg = styled.div`
  display: flex;
  justify-content: space-around;
`
  const Image = styled.img`
  padding: 0;
  height: 38vh;
  width: 30vh;
  position: relative;
  top: 0vh;
  border-top-width: 8px;
  border-right-width: 8px;
  border-bottom-width: 35px;
  border-left-width: 8px;
  border-style: solid;
  border-color: snow;
  border-radius: 5px;
  transition: transform 0.5s;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.4);

  &:hover {
    filter: grayscale(0);
    cursor: pointer;
    transform: scale(1.1);
  }
`
  const Img1 = styled(Image)`
  right: 10vh;
  transform: rotate(0deg);
`
  const Img2 = styled(Image)`
  right: 40vh;
  transform: rotate(0deg);
`
  const Img3 = styled(Image)`
  right: 127vh;
  top: -2vh;
`
const ContainerTextStyled = styled.div`
  text-align: left;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: auto;
  top: 30vh;
  width: 35%;
  right: 54vh;
  position: relative;
`

const ContainerServiceStyled = styled.h2`
  width: 100%;
  color: #fff;
  font-family: "Poppins", sans-serif;
`

const ContainerDescriptStyled = styled.p`
  width: 100%;
  color: #fff;
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
`

const ContainerCardStyled = styled.div`
  display: flex;
  justify-content: space-around;
`

const ImgOneStyled = styled.img`
  padding: 0;
  height: 38vh;
  width: 30vh;
  left: 94vh;
  position: relative;
  top: -16vh;
  transform: rotate(0deg);
  border-top-width: 8px;
  border-right-width: 8px;
  border-bottom-width: 35px;
  border-left-width: 8px;
  border-style: solid;
  border-color: snow;
  border-radius: 5px;
  transition: transform 0.5s;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.4);
  &:hover {
    filter: grayscale(0);
    cursor: pointer;
    transform: scale(1.1);
  }
`

const ImgTwoStyled = styled.img`
  padding: 0;
  height: 38vh;
  width: 30vh;
  left: 70vh;
  position: relative;
  top: -16vh;
  transform: rotate(0deg);
  border-top-width: 8px;
  border-right-width: 8px;
  border-bottom-width: 35px;
  border-left-width: 8px;
  border-style: solid;
  border-color: snow;
  border-radius: 5px;
  transition: transform 0.5s;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.4);
  &:hover {
    filter: grayscale(0);
    cursor: pointer;
    transform: scale(1.1);
  }
`

const ImgThreeStyled = styled.img`
  padding: 0;
  height: 38vh;
  width: 30vh;
  right: 20vh;
  position: relative;
  top: -18vh;
  border-top-width: 8px;
  border-right-width: 8px;
  border-bottom-width: 35px;
  border-left-width: 8px;
  border-style: solid;
  border-color: snow;
  border-radius: 5px;
  transition: transform 0.5s;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.4);
  &:hover {
    filter: grayscale(0);
    cursor: pointer;
    transform: scale(1.1);
  }
`



  return (

    <Container>
      <Sections as={motion.div}>
      <Main>
        <TxtContainer>
          
          <Heading initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>Agende online seus <br /> procedimentos estéticos.</Heading>

          <Line  initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>Crie sua conta agora para marcar seu procedimento <br /> estético com NailStyle.</Line>
            
          <Button>Criar Conta</Button>
          <LoginButton>Login</LoginButton>

        </TxtContainer>
      </Main>
      
      <ManicureImage src={manicure} alt='imagem de unha' title='Unhas'  initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}/>
      </Sections>
      
      <Sections>
      <ContainerTxt className='container-txt'>
        <Subtitle>Por que escolher nossos serviços</Subtitle>
        <Descript>
          Nossos serviços são oferecidos no conforto da sua casa, evitando deslocamentos e economizando seu tempo precioso. Mantemos rigorosos padrões de higiene, garantindo a esterilização completa de todos os equipamentos entre os clientes para sua tranquilidade e segurança. Utilizamos apenas produtos de alta qualidade, proporcionando resultados duradouros e uma experiência de manicure verdadeiramente satisfatória.
        </Descript>
      </ContainerTxt>
      <ContainerImg className='container-img'>
        <Img1 src={image1} alt='imagem de unha'/>
        <Img2 src={image2} alt='imagem de unha'/>
        <Img3 src={image3} alt='imagem de unha'/>
      </ContainerImg>
      </Sections>
      <Sections>
      <ContainerTextStyled>
        <ContainerServiceStyled>Com o quê trabalhamos</ContainerServiceStyled>
        <ContainerDescriptStyled>
          - Utilizar instrumentos, equipamentos e produtos<br/>
          <br/>
          - Conceitos sobre anatomia e patologia da pele e das unhas<br/>
          <br/>
          - Higienizar e esterilizar unhas<br/>
          <br/>
          - Retirar esmalte, cortar, lixar, polir e preparar unhas para retirada de cutícula<br/>
          <br/>
          - Hidratar e esfoliar mãos e pés<br/>
          <br/>
          - Esmaltar unhas com esmalte comum e em gel<br/>
          <br/>
          - Decorar unhas com películas e outros materiais<br/>
          <br/>
          - Atuar de acordo com normas de biossegurança
        </ContainerDescriptStyled>
      </ContainerTextStyled>
      <ContainerCardStyled>
        <ImgOneStyled src={image1} alt='imagem de unha'/>
        <ImgTwoStyled src={image2} alt='imagem de unha'/>
        <ImgThreeStyled src={image3} alt='imagem de unha'/>
      </ContainerCardStyled>
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
