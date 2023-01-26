import React from 'react';
import styled from 'styled-components';

const SInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  border: none;
  background-color: #f1f3f5;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 3px;
  text-transform: capitalize;

  &:focus {
    outline: 1px solid #5f3dc4;
  }
`;

function Input({ type, name, id, value, fn, placeholder }) {
  return (
    <SInput
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={fn}
      placeholder={placeholder}
    />
  );
}

export default Input;
