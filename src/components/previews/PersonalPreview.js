import React from 'react';
import styled from 'styled-components';

import Ul from '../utils/Ul';
import List from '../utils/List';

const Section = styled.section`
  h1 {
    font-size: 4em;
    font-family: 'Rakkas', cursive;
    font-weight: 400;
    text-align: center;
    text-transform: capitalize;
  }
`;

function PersonalPreview({ data }) {
  const { firstName, lastName, linkedin, github, email, phoneNumber } = data;

  return (
    <Section>
      <h1>
        {firstName} {lastName}
      </h1>
      <nav>
        <Ul>
          <List text={phoneNumber} />
          <List text={email} isLink={true} />
          <List text={linkedin} isLink={true} />
          <List text={github} isLink={true} />
        </Ul>
      </nav>
    </Section>
  );
}

export default PersonalPreview;
