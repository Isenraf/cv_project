import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  fieldset {
    border: none;
    border-top: 1px solid #ced4da;
    flex-grow: 1;
  }

  legend {
    font-size: 20px;
    font-weight: 600;
    padding-right: 16px;
    text-transform: capitalize;
  }
`;

function Title({ name, node }) {
  return (
    <Div>
      <fieldset>
        <legend>{name}</legend>
      </fieldset>
      {node}
    </Div>
  );
}

export default Title;
