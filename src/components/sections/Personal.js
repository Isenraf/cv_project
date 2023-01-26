import React from 'react';
import styled from 'styled-components';
import PersonalForm from '../forms/PersonalForm';

import Button from '../utils/Button';
import Title from '../utils/Title';

const Section = styled.section`
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  .hide {
    display: none;
  }
`;

class Personal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: false,
    };

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const target = e.target;

    switch (target.localName) {
      case 'i':
        this.toggle(target.parentNode.parentNode.nextElementSibling);
        break;

      default:
        this.toggle(target.parentNode.nextElementSibling);
        break;
    }
  }

  toggle(node) {
    this.setState(
      {
        hide: !this.state.hide,
      },
      () => {
        this.state.hide
          ? node.classList.add('hide')
          : node.classList.remove('hide');
      }
    );
  }

  render() {
    return (
      <Section>
        <Title
          name="personal details"
          node={
            <Button
              type="button"
              node={
                this.state.hide ? (
                  <i className="las la-angle-up"></i>
                ) : (
                  <i className="las la-angle-down"></i>
                )
              }
              fn={this.handleClick}
            />
          }
        />

        <PersonalForm personal={this.props.data} change={this.props.change} />
      </Section>
    );
  }
}

export default Personal;
