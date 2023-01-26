import React from 'react';
import styled from 'styled-components';
import Headline from '../utils/Headline';
import ProjectTools from '../utils/ProjectTools';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .pro {
    // font-size: 0.875em;
    display: flex;
    align-items: baseline;
    gap: 4px;
    padding-left: 8px;
    flex-direction: column;
  }
`;

function TechnicalPreview({ data }) {
  const { title, languages, frameworks, devTools, libraries } = data;

  if (
    languages.length === 0 &&
    frameworks.length === 0 &&
    devTools.length === 0 &&
    libraries.length === 0
  )
    return null;

  return (
    <Section>
      <Headline text={title} />
      <div className="pro">
        <ProjectTools title="languages" tools={languages} />
        <ProjectTools title="frameworks" tools={frameworks} />
        <ProjectTools title="developer tools" tools={devTools} />
        <ProjectTools title="libraries" tools={libraries} />
      </div>
    </Section>
  );
}

export default TechnicalPreview;
