import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

function Widget({ nodeA, nodeB }) {
  return (
    <Div>
      {nodeA}
      {nodeB}
    </Div>
  );
}

export default Widget;
