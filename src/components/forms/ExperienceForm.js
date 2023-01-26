import styled from 'styled-components';
import React from 'react';

import Input from '../utils/Input';
import TextArea from '../utils/TextArea';
import Label from '../utils/Label';
import Widget from '../utils/Widget';
import Button from '../utils/Button';

const Div = styled.div`
  padding: 16px;
  border: 1px solid #adadb2;
  border-radius: 5px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  div:nth-child(1),
  div:nth-child(6) {
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

class ExperienceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: {
        id: this.props.id,
        flag: 'experience',
        position: '',
        employer: '',
        city: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { id, value } = e.target;

    this.setState(
      {
        experience: { ...this.state.experience, [id]: value },
      },
      () => {
        this.props.change(this.props.id, this.state.experience);
      }
    );
  }

  componentDidMount() {
    if (this.props.data) {
      this.setState({
        experience: { ...this.state.experience, ...this.props.data },
      });
    }
  }

  render() {
    return (
      <Div>
        <Widget
          nodeA={<Label text="position" id="position" />}
          nodeB={
            <Input
              type="text"
              name="position"
              id="position"
              placeholder="Undergraduate Research Assistant"
              value={this.state.experience.position}
              fn={this.handleChange}
            />
          }
        />

        <Widget
          nodeA={<Label text="employer" id="employer" />}
          nodeB={
            <Input
              type="text"
              name="employer"
              id="employer"
              placeholder="Texas A&M University"
              value={this.state.experience.employer}
              fn={this.handleChange}
            />
          }
        />

        <Widget
          nodeA={<Label text="city" id="city" />}
          nodeB={
            <Input
              type="text"
              name="city"
              id="city"
              placeholder="College Station, TX"
              value={this.state.experience.city}
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
              value={this.state.experience.startDate}
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
              value={this.state.experience.endDate}
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
              placeholder="EX -> Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems. 
              NB: don't forget ending your sentence with a point"
              value={this.state.experience.description}
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

export default ExperienceForm;
