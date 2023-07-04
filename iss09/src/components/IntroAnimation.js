import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.png';

const initialRotateAnimation = keyframes`
  0% {
    transform: rotateY(0deg) scale(0.6);
  }
  30% {
    transform: rotateY(360deg) scale(1.2);
  }
  100% {
    transform: rotateY(360deg) scale(1);
  }
`;


const lineAnimationTop = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const lineAnimationBottom = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const AnimationContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 800px;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  perspective: 1000px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${initialRotateAnimation} 2s ease-in-out forwards;
  transform-origin: center center;
  image-rendering: auto;
`;


const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: white;
`;

const TopLine = styled(Line)`
  top: 55px;
  left: 0;
  animation: ${lineAnimationTop} 1.5s linear forwards;
`;

const BottomLine = styled(Line)`
  bottom: 55px;
  right: 0;
  animation: ${lineAnimationBottom} 1.5s linear forwards;
`;

class IntroAnimation extends Component {
  state = {
    isImageLoaded: false,
  };

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.setState({ isImageLoaded: true });
    };
    img.src = logo;
  }

  render() {
    const { isImageLoaded } = this.state;

    return (
      <AnimationContainer>
        <LogoContainer>
          {isImageLoaded && <Logo src={logo} alt="iss09" />}
        </LogoContainer>
        <TopLine onAnimationEnd={(e) => e.stopPropagation()} />
        <BottomLine onAnimationEnd={(e) => e.stopPropagation()} />
      </AnimationContainer>
    );
  }
}

export default IntroAnimation;
