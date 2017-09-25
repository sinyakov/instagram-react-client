import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  text-align: center;
  font-family: 'Neucha', cursive;
`;

const Logo = styled.img`
  display: inline-block;
  width: 4rem;
  margin: 0 0.5rem;
  transition: transform 0.75s ease-in-out;

  @media (max-width: 40rem) {
    width: 3.5rem;
    margin: 0 0.5rem 0 0;
  }

  &:hover {
    transform: rotateZ(360deg);
  }
`;

const Text = styled.div``;

const Title = styled.h1`
  display: inline-block;
  margin: 0;
  font-size: 2.25rem;
  line-height: 1.1;

  @media (max-width: 40rem) {
    font-size: 2rem;
  }
`;

const Tagline = styled.p`
  margin: 0;
  font-size: 1.125em;
`;

const Link = styled.a`
  color: #44a;
  &:hover {
    text-decoration: none;
  }
`;

export default () => (
  <Wrapper>
    <Logo src={logo} alt="Logo" />
    <Text>
      <Title>Факты о котиках</Title>
      <Tagline>
        Из инстаграма&nbsp;
        <Link href="https://instagram.com/catsfromreddit">@catsfromreddit</Link>
      </Tagline>
    </Text>
  </Wrapper>
);
