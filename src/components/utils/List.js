import React from 'react';
import styled from 'styled-components';

const SList = styled.li`
  font-size: 1em;
  text-transform: lowercase;
  padding-left: 8px;
  border-left: 1px solid;

  a {
    text-decoration: none;
    color: black;
    border-bottom: 1px solid;
  }
`;

function List({ text, isLink }) {
  if (!isLink) {
    return <li>{text}</li>;
  } else {
    return (
      <SList>
        <a href="# ">{text}</a>
      </SList>
    );
  }
}

export default List;
