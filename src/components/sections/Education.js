import React from 'react';
import styled from 'styled-components';

import Button from '../utils/Button';
import Title from '../utils/Title';

const Section = styled.section`
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function Education(props) {
  return (
    <Section>
      <Title
        name="education"
        node={
          <Button
            type="button"
            node={<i className="las la-plus"></i>}
            fn={props.add}
          />
        }
      />

      {props.data}
    </Section>
  );
}

export default Education;
