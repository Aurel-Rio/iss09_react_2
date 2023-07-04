import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 55px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
`;

const Footer = () => {
  return (
    <Container>
      <Line />
    </Container>
  );
};

export default Footer;
