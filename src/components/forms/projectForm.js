import styled from 'styled-components';
import React from 'react';

import Input from '../utils/Input';
import Label from '../utils/Label';
import Widget from '../utils/Widget';
import Button from '../utils/Button';
import TextArea from '../utils/TextArea';

const Div = styled.div`
  padding: 16px;
  border: 1px solid #adadb2;
  border-radius: 5px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  div:nth-child(1),
  div:nth-child(2),
  div:nth-child(5) {
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

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {
        flag: 'project',
        id: this.props.id,
        name: '',
        tools: '',
        description: '',
        startDate: '',
        endDate: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { id, value } = e.target;

    this.setState(
      {
        project: { ...this.state.project, [id]: value },
      },
      () => {
        this.props.change(this.props.id, this.state.project);
      }
    );
  }

  componentDidMount() {
    if (this.props.data) {
      this.setState({
        project: { ...this.state.project, ...this.props.data },
      });
    }
  }

  render() {
    return (
      <Div>
        <Widget
          nodeA={<Label text="project name" id="name" />}
          nodeB={
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Gitlytics"
              value={this.state.project.name}
              fn={this.handleChange}
            />
          }
        />

        <Widget
          nodeA={<Label text="tools" id="tools" />}
          nodeB={
            <Input
              type="text"
              name="tools"
              id="tools"
              placeholder="Python, Flask, React, PostgreSQL, Docker"
              value={this.state.project.tools}
              fn={this.handleChange}
            />
          }
        />

        <Widget
          nodeA={<Label text="start date" id="startDate" />}
          nodeB={
            <Input
              type="text"
              name="startDate"
              id="startDate"
              placeholder="June 2020"
              value={this.state.project.startDate}
              fn={this.handleChange}
            />
          }
        />

        <Widget
          nodeA={<Label text="end date" id="endDate" />}
          nodeB={
            <Input
              type="text"
              name="endDate"
              id="endDate"
              placeholder="Present or July 2019"
              value={this.state.project.endDate}
              fn={this.handleChange}
            />
          }
        />

        <Widget
          nodeA={<Label text="description" id="description" />}
          nodeB={
            <TextArea
              name="description"
              id="description"
              placeholder="EX -> Developed a full-stack web application using with Flask serving a REST API with React as the frontend. 
              NB: don't forget ending your sentence with a point"
              value={this.state.project.description}
              fn={this.handleChange}
            />
          }
        />

        <div className="done">
          <Button
            type="button"
            node={<i className="las la-trash"></i>}
            bgCl="#f03e3e"
            fn={this.props.del}
          />
        </div>
      </Div>
    );
  }
}

export default ProjectForm;
