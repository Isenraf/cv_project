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

  div:nth-child(3),
  div:nth-child(4),
  div:nth-child(5),
  div:nth-child(6) {
    grid-column: 1 / -1;
  }
`;

function PersonalForm({ personal, change }) {
  const { firstName, lastName, phoneNumber, email, linkedin, github } =
    personal;

  return (
    <Div>
      <Widget
        nodeA={<Label text="first name" id="firstName" />}
        nodeB={
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="jake"
            value={firstName}
            fn={change}
          />
        }
      />

      <Widget
        nodeA={<Label text="last name" id="lastName" />}
        nodeB={
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="ryan"
            value={lastName}
            fn={change}
          />
        }
      />

      <Widget
        nodeA={<Label text="email address" id="email" />}
        nodeB={
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="jake@su.edu"
            value={email}
            fn={change}
          />
        }
      />

      <Widget
        nodeA={<Label text="linkedin address" id="linkedin" />}
        nodeB={
          <Input
            type="url"
            name="linkedin"
            id="linkedin"
            placeholder="https://www.linkedin.com/"
            value={linkedin}
            fn={change}
          />
        }
      />

      <Widget
        nodeA={<Label text="github address" id="github" />}
        nodeB={
          <Input
            type="url"
            name="github"
            id="github"
            placeholder="https://github.com/"
            value={github}
            fn={change}
          />
        }
      />

      <Widget
        nodeA={<Label text="phone number" id="phoneNumber" />}
        nodeB={
          <Input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="123-456-7890"
            value={phoneNumber}
            fn={change}
          />
        }
      />
    </Div>
  );
}

export default PersonalForm;
