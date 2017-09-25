import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0;
  color: #666;
  font-size: 0.75rem;
  line-height: 1.5;
`;

const Copyright = styled.div``;
const About = styled.div``;

const Link = styled.a`
  color: #666;
  &:hover {
    text-decoration: none;
  }
`;

export default () => (
  <Wrapper>
    <Copyright>
      <Link href="http://sinyakov.com">Максим Синяков</Link> (c) 2к17
    </Copyright>
    <About>
      <Link href="https://github.com/sinyakov/instagram-react-client">Тестовое задание</Link>
      <span>&nbsp;для&nbsp;</span>
      <Link href="https://digdes.ru">Digital Design</Link>
    </About>
  </Wrapper>
);
