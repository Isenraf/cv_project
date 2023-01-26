import styled from 'styled-components';
import React from 'react';

import Input from '../utils/Input';
import Label from '../utils/Label';
import Widget from '../utils/Widget';

const Div = styled.div`
  padding: 16px;
  border: 1px solid #adadb2;
  border-radius: 5px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  div:nth-child(1),
  div:nth-child(2),
  div:nth-child(3),
  div:nth-child(4) {
    grid-column: 1 / -1;
  }

  .done {
    grid-column: 2;
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    padding-top: 16px;
  }
`;

function TechnicalForm({ technical, change }) {
  return (
    <Div>
      <Widget
        nodeA={<Label text="languages:" id="languages" />}
        nodeB={
          <Input
            type="text"
            name="languages"
            id="languages"
            placeholder="Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R"
            value={technical.languages}
            fn={change}
          />
        }
      />

      <Widget
        nodeA={<Label text="frameworks" id="frameworks" />}
        nodeB={
          <Input
            type="text"
            name="frameworks"
            id="frameworks"
            placeholder="React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI"
            value={technical.frameworks}
            fn={change}
          />
        }
      />

      <Widget
        nodeA={<Label text="developer tools" id="devTools" />}
        nodeB={
          <Input
            type="text"
            name="devTools"
            id="devTools"
            placeholder="Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse"
            value={technical.devTools}
            fn={change}
          />
        }
      />

      <Widget
        nodeA={<Label text="libraries" id="libraries" />}
        nodeB={
          <Input
            type="text"
            name="libraries"
            id="libraries"
            placeholder="pandas, NumPy, Matplotlib"
            value={technical.libraries}
            fn={change}
          />
        }
      />
    </Div>
  );
}

export default TechnicalForm;
