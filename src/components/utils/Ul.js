import React from 'react';
import styled from 'styled-components';

const SUl = styled.ul`
  padding: 8px;
  display: flex;
  justify-content: center;
  gap: 8px;

  list-style: none;
`;

function Ul(props) {
  return <SUl>{props.children}</SUl>;
}

export default Ul;
