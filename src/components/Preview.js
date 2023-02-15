import html2pdf from 'html2pdf.js';
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

  .load {
    padding: 16px;
    display: flex;
    justify-content: center;
    gap: 8px;
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

  handleDownload() {
    let element = document.querySelector('.preview');

    if (!element) {
      element = document.querySelector('.expand-preview');
    }

    const opt = {
      margin: 0,
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { width: 960, x: -70, y: -30 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save('cv-document');
  }

  handleExpand(e) {
    const target = e.target;

    switch (target.localName) {
      case 'i':
        this.toggle(target.parentNode.parentNode);
        break;

      default:
        this.toggle(target.parentNode);
        break;
    }
  }

  toggle(target) {
    const parent = target.parentNode;
    const gParent = target.parentNode.parentNode;
    const sibling = target.parentNode.previousSibling;
    const targetSibling = target.previousSibling;

    parent.classList.toggle('size');
    sibling.classList.toggle('hide');
    gParent.classList.toggle('expand');
    targetSibling.classList.toggle('expand-preview');
    targetSibling.classList.toggle('preview');

    this.setState({
      expand: !this.state.expand,
    });
  }

  render() {
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

        <div className="load">
          <Button
            text={this.state.expand ? 'compress' : 'expand'}
            node={
              this.state.expand ? (
                <i className="las la-compress-arrows-alt"></i>
              ) : (
                <i className="las la-expand-arrows-alt"></i>
              )
            }
            bgCl="#0ca940"
            fn={this.handleExpand}
          />
          <Button
            text="download"
            type="button"
            node={<i className="las la-file-pdf"></i>}
            bgCl="#4314b6"
            fn={this.handleDownload}
          />
        </div>
      </Aside>
    );
  }
}

export default Preview;
