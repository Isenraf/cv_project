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

  ul {
    grid-column: 1 / -1;
    padding-left: 8px;
    list-style: none;
    font-weight: 100;
  }
`;

function ExperiencePreview({ data }) {
  const { title, experiences } = data;
  // console.log(data.experiences[0].description.split('.'));

  if (experiences.length === 0) return null;

  return (
    <Section>
      <Headline text={title} />

      {experiences.map((exp) => {
        return (
          <React.Fragment key={uuidv4()}>
            <LeftColumn top={<h3>{exp.position}</h3>} bottom={exp.employer} />
            <RightColumn
              city={exp.city}
              startDate={exp.startDate}
              endDate={exp.endDate}
              flow="bottom"
            />

            <ul>
              {exp.description.length === 0
                ? null
                : exp.description
                    .split('.')
                    .filter((str) => str !== '\n' && str !== '')
                    .map((desc, id) => (
                      <li key={uuidv4()}>
                        {id + 1}. {desc}
                      </li>
                    ))}
            </ul>
          </React.Fragment>
        );
      })}
    </Section>
  );
}

export default ExperiencePreview;
