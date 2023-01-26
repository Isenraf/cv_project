import styled from 'styled-components';
import React from 'react';

import Input from '../utils/Input';
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

  div:nth-child(1) {
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

class EducationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        flag: 'education',
        id: this.props.id,
        degree: '',
        school: '',
        city: '',
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
        education: { ...this.state.education, [id]: value },
      },
      () => {
        this.props.change(this.props.id, this.state.education);
      }
    );
  }

  componentDidMount() {
    if (this.props.data) {
      this.setState({
        education: { ...this.state.education, ...this.props.data },
      });
    }
  }

  render() {
    return (
      <Div>
        <Widget
          nodeA={<Label text="degree" id="degree" />}
          nodeB={
            <Input
              type="text"
              name="degree"
              id="degree"
              placeholder="Southwestern University"
              value={this.state.education.degree}
              fn={this.handleChange}
            />
          }
        />

        <Widget
          nodeA={<Label text="school" id="school" />}
          nodeB={
            <Input
              type="text"
              name="school"
              id="school"
              placeholder="Southwestern University"
              value={this.state.education.school}
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
              placeholder="Georgetown, TX"
              value={this.state.education.city}
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
              placeholder="Aug. 2018"
              value={this.state.education.startDate}
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
              placeholder="May 2021"
              value={this.state.education.endDate}
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

export default EducationForm;
