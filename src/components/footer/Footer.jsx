import styled from 'styled-components';

const FooterNavStyled = styled.footer`
  position: relative;
  left: 30px;
  height: 50px;
  width: 1440px;
  background-color: #1e1e1e;
  position: relative;
  border: 2px solid #fff;
  border-radius: 4px;
`;

const NavLinkStyled = styled.nav`
  height: 100%;
  width: 100%;
  padding-top: 5px;
`;

const ListaFooterStyled = styled.ul`
  display: flex;
  position: relative;
  height: auto;
  width: auto;
  justify-content: space-around;
  list-style: none;
  color: #fff;
  top: 10px;

  li,a{
    color: #fff;
    font-family: "Poppins", sans-serif;
  }
`;

function Footer() {
  return (
    <FooterNavStyled>
      <NavLinkStyled>
        <ListaFooterStyled>
          <li><a href="#">Copyright © 2024 FIA. Todos os direitos reservados</a></li>
        </ListaFooterStyled>
      </NavLinkStyled>
    </FooterNavStyled>
  );
}

export default Footer;

