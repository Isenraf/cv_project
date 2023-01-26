import React from 'react';
import styled from 'styled-components';

const SButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  background-color: ${(props) => (props.bgCl ? props.bgCl : 'inherit')};
  border: none;
  box-sizing: border-box;
  padding: 4px 8px;
  border-radius: 3px;
  outline: 1px solid #343a40;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(props) => (props.bgCl ? '#ffffff' : '#343a40')};
  text-transform: capitalize;

  &:hover {
    outline: 1px solid #5f3dc4;
    background-color: ${(props) => (props.bgCl ? null : '#f8f9fa')};
    cursor: pointer;
  }
`;

function Button({ text, node, bgCl, type, fn }) {
  return (
    <SButton type={type} bgCl={bgCl} onClick={fn}>
      {node}
      {text}
    </SButton>
  );
}

export default Button;
