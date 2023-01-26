import React from 'react';
import styled from 'styled-components';

const STextArea = styled.textarea`
  font-family: inherit;
  font-size: inherit;
  border: none;
  background-color: #f1f3f5;
  box-sizing: border-box;
  padding: 12px 20px;
  resize: none;
  border-radius: 3px;
  width: 100%;
  height: 150px;

  &:focus {
    outline: 1px solid #5f3dc4;
  }
`;

function TextArea({ id, name, placeholder, fn, value }) {
  return (
    <STextArea
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={fn}
    />
  );
}

export default TextArea;
