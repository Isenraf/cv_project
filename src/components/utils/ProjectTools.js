import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h3 {
    text-transform: capitalize;
    padding-right: 8px;
    border-right: 1px solid;
  }

  p {
    font-weight: 100;
    font-style: italic;
    text-transform: capitalize;
  }
`;

function ProjectTools({ title, tools }) {
  return (
    <Div>
      <h3>{title}</h3>
      <p>{tools}</p>
    </Div>
  );
}

export default ProjectTools;
