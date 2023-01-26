import React from 'react';
import styled from 'styled-components';

const SHeader = styled.header`
  padding: 16px;
  text-transform: capitalize;
  font-family: 'Rakkas', cursive;
  color: #f8f9fa;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  background-color: #1d1d20;
`;

function Header({ title }) {
  return <SHeader>{title}</SHeader>;
}

export default Header;
