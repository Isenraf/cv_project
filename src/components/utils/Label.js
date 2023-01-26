import React from 'react';
import styled from 'styled-components';

const SLabel = styled.label`
  font-size: 14px;
  color: #343a40;
  text-transform: capitalize;
`;

function Label({ text, id }) {
  return <SLabel htmlFor={id}>{text}</SLabel>;
}

export default Label;
