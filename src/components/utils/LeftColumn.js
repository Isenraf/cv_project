import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  text-transform: capitalize;
  padding-left: 8px;

  p {
    font-style: italic;
  }
`;

function LeftColumn({ top, bottom }) {
  return (
    <Div>
      {top}
      <p>{bottom}</p>
    </Div>
  );
}

export default LeftColumn;
