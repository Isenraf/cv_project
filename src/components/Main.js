import React from 'react';
import styled from 'styled-components';
import data from './template-data';

import Form from './Form';
import Preview from './Preview';
import { v4 as uuidv4 } from 'uuid';

import ProjectForm from './forms/projectForm';
import EducationForm from './forms/EducationForm';
import ExperienceForm from './forms/ExperienceForm';

const SMain = styled.main`
  flex-grow: 1;

  display: grid;
  grid-template-columns: 50% 50%;

  .hide {
    display: none;
  }

  .size {
    width: 100%;
    margin: 0 auto;
  }
`;

class Main extends React.Component {
  components = {
    education: EducationForm,
    experience: ExperienceForm,
    project: ProjectForm,
  };

  constructor(props) {
    super(props);

    this.state = {
      personal: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        linkedin: '',
        github: '',
      },

      technical: {
        title: 'technical skills',
        languages: '',
        frameworks: '',
        devTools: '',
        libraries: '',
      },

      education: {
        title: 'education',
        educations: [],
      },

      experience: {
        title: 'experience',
        experiences: [],
      },

      project: {
        title: 'projects',
        projects: [],
      },

      projectForms: [],
      educationForms: [],
      experienceForms: [],
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange(e) {
    const name = e.target.id;
    const value = e.target.value;

    this.setState({
      personal: { ...this.state.personal, [name]: value },
      technical: { ...this.state.technical, [name]: value },
    });
  }

  handleAdd(e) {
    let section = '';
    const id = uuidv4();
    const target = e.target;

    section =
      target.localName === 'i'
        ? target.parentNode.previousSibling.firstChild.textContent
        : target.previousSibling.firstChild.textContent;

    const Component = this.components[section];

    this.setState({
      [`${section}Forms`]: this.state[`${section}Forms`].concat(
        <Component
          key={id}
          id={id}
          del={() => this.handleDelete(id, section)}
          change={this.handleUpdate}
        />
      ),
    });
  }

  handleUpdate(id, object) {
    let section = object.flag;
    const obj = this.state[section][`${section}s`].find((edu) => edu.id === id);

    if (!obj) {
      this.setState({
        [section]: {
          ...this.state[section],
          [`${section}s`]: this.state[section][`${section}s`].concat(object),
        },
      });
    } else {
      this.setState({
        [section]: {
          ...this.state[section],
          [`${section}s`]: this.state[section][`${section}s`].map((obj) => {
            if (obj.id === id) {
              return { ...object };
            } else {
              return obj;
            }
          }),
        },
      });
    }
  }

  handleDelete(id, section) {
    this.setState({
      [section]: {
        ...this.state[section],
        [`${section}s`]: this.state[section][`${section}s`].filter(
          (obj) => obj.id !== id
        ),
      },

      [`${section}Forms`]: this.state[`${section}Forms`].filter(
        (fm) => fm.props.id !== id
      ),
    });
  }

  handleLoad() {
    const { personal, technical, education, experience, project } = data;

    const educResult = this.loadArray(education, education.title);
    const expResult = this.loadArray(experience, experience.title);
    const proResult = this.loadArray(project, project.title);

    this.setState({
      personal,
      technical,
      education: { ...this.state.education, educations: educResult.objs },
      experience: { ...this.state.experience, experiences: expResult.objs },
      project: { ...this.state.project, projects: proResult.objs },
      educationForms: educResult.forms,
      experienceForms: expResult.forms,
      projectForms: proResult.forms,
    });
  }

  handleReset() {
    this.setState({
      personal: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        linkedin: '',
        github: '',
      },

      technical: {
        title: 'technical skills',
        languages: '',
        frameworks: '',
        devTools: '',
        libraries: '',
      },

      education: {
        title: 'education',
        educations: [],
      },

      experience: {
        title: 'experience',
        experiences: [],
      },

      project: {
        title: 'projects',
        projects: [],
      },

      projectForms: [],
      educationForms: [],
      experienceForms: [],
    });
  }

  loadArray(object, title) {
    const forms = [];
    const objs = [];

    object[`${title}s`].forEach((obj) => {
      const id = uuidv4();

      const Component = this.components[title];

      forms.push(
        <Component
          key={id}
          id={id}
          del={() => this.handleDelete(id, title)}
          change={this.handleUpdate}
          data={obj}
        />
      );

      obj.id = id;
      obj.flag = title;
      objs.push(obj);
    });

    return { forms, objs };
  }

  render() {
    return (
      <SMain>
        <Form
          state={this.state}
          change={this.handleChange}
          add={this.handleAdd}
          load={this.handleLoad}
          reset={this.handleReset}
        />
        <Preview data={this.state} />
      </SMain>
    );
  }
}

export default Main;
