import React from 'react';
import styled from 'styled-components';
import Headline from '../utils/Headline';
import LeftColumn from '../utils/LeftColumn';
import ProjectTools from '../utils/ProjectTools';
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

function ProjectPreview({ data }) {
  const { title, projects } = data;

  if (projects.length === 0) return null;

  return (
    <Section>
      <Headline text={title} />

      {projects.map((pr) => {
        return (
          <React.Fragment key={uuidv4()}>
            <LeftColumn
              top={<ProjectTools title={pr.name} tools={pr.tools} />}
            />
            <RightColumn startDate={pr.startDate} endDate={pr.endDate} />

            <ul>
              {pr.description.length === 0
                ? null
                : pr.description
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

export default ProjectPreview;
