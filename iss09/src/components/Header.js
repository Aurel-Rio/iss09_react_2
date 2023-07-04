import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Container = styled.div`
  height: 55px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  object-fit: contain;
`;

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="Logo" />
    </Container>
  );
};

export default Header;
