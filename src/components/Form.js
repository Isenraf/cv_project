import React from 'react';
import styled from 'styled-components';

import Personal from './sections/Personal';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Project from './sections/Project';
import Technical from './sections/Technical';
import Button from './utils/Button';

const SForm = styled.form`
  align-self: stretch;
  height: calc(100vh - 68px - 16px);
  overflow-y: auto;

  .load {
    padding: 16px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`;

function Form({ state, change, add, load, reset }) {
  const { personal, educationForms, experienceForms, projectForms, technical } =
    state;

  return (
    <SForm>
      <Personal data={personal} change={change} />
      <Education data={educationForms} add={add} />
      <Experience data={experienceForms} add={add} />
      <Project data={projectForms} add={add} />
      <Technical data={technical} change={change} />
      <div className="load">
        <Button text="cv example" bgCl="#1d1d20" fn={load} type="button" />
        <Button text="reset form" type="button" fn={reset} />
        {/* <Button text="download" type="button" bgCl="#364fc7" /> */}
      </div>
    </SForm>
  );
}

export default Form;
