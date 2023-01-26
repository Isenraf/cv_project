import React from 'react';
import styled from 'styled-components';
import EducationPreview from './previews/EducationPreview';
import ExperiencePreview from './previews/ExperiencePreview';
import PersonalPreview from './previews/PersonalPreview';
import ProjectPreview from './previews/ProjectPreview';
import TechnicalPreview from './previews/TechnicalPreview';
import Button from './utils/Button';

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
  gap: 8px;
  height: calc(100vh - 68px - 16px);
  overflow-y: auto;
  width: 100%;

  .preview {
    width: 100%;
    font-size: ${(props) => (props.fs ? props.fs + 'px' : 'inherit')};
    border-radius: 0.5em;
  }

  .expand-preview {
    width: 960px;
    margin: 0 auto;
    border-radius: 0;
  }

  .preview,
  .expand-preview {
    flex-grow: 1;
    padding: 0 8px 8px;
    border: 0.1em solid #adadb2;

    display: flex;
    flex-direction: column;
    gap: 0.8em;
  }
`;

class Preview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: 16,
      expand: false,
    };

    this.handleExpand = this.handleExpand.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      const node = document.querySelector('.preview');
      const fs = ((node.offsetWidth - node.offsetHeight) / 100) * 5;

      this.setState({
        fontSize: fs,
      });
    }, 2000);
  }

  handleExpand(e) {
    this.setState(
      {
        expand: !this.state.expand,
      },
      () => {
        this.toggle(e);
      }
    );
  }

  toggle(e) {
    const target = e.target;

    const parent = target.parentNode;
    const gParent = target.parentNode.parentNode;
    const sibling = target.parentNode.previousSibling;
    const targetSibling = target.previousSibling;

    if (this.state.expand) {
      parent.classList.add('size');
      sibling.classList.add('hide');
      gParent.classList.add('expand');
      targetSibling.classList.add('expand-preview');
      targetSibling.classList.remove('preview');
    } else {
      parent.classList.remove('size');
      sibling.classList.remove('hide');
      gParent.classList.remove('expand');
      targetSibling.classList.add('preview');
      targetSibling.classList.remove('expand-preview');
    }
  }

  render() {
    console.log('rendered');
    const { education, experience, personal, project, technical } =
      this.props.data;

    return (
      <Aside fs={this.state.fontSize}>
        <div className="preview">
          <PersonalPreview data={personal} />
          <EducationPreview data={education} />
          <ExperiencePreview data={experience} />
          <ProjectPreview data={project} />
          <TechnicalPreview data={technical} />
        </div>
        <Button
          text={this.state.expand ? 'compress' : 'expand'}
          node={
            this.state.expand ? (
              <i class="las la-compress-arrows-alt"></i>
            ) : (
              <i class="las la-expand-arrows-alt"></i>
            )
          }
          bgCl="#0ca940"
          fn={this.handleExpand}
        />
      </Aside>
    );
  }
}

export default Preview;
