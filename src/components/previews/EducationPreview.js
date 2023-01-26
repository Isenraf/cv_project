import React from 'react';
import styled from 'styled-components';
import Headline from '../utils/Headline';
import LeftColumn from '../utils/LeftColumn';
import RightColumn from '../utils/RightColumn';
import { v4 as uuidv4 } from 'uuid';

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: 4px;

  h2 {
    grid-column: 1 / -1;
  }
`;

function EducationPreview({ data }) {
  const { title, educations } = data;

  if (educations.length === 0) return null;

  return (
    <Section>
      <Headline text={title} />

      {educations.map((edu) => {
        const id = uuidv4();
        return (
          <React.Fragment key={id}>
            <LeftColumn top={<h3>{edu.school}</h3>} bottom={edu.degree} />

            <RightColumn
              city={edu.city}
              startDate={edu.startDate}
              endDate={edu.endDate}
            />
          </React.Fragment>
        );
      })}
    </Section>
  );
}

export default EducationPreview;
