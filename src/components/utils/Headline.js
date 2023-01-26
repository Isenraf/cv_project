import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
  text-transform: capitalize;
  font-weight: 100;
  border-bottom: 1px solid;
`;

function Headline({ text }) {
  return <Header>{text}</Header>;
}

export default Headline;
