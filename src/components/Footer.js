import React from 'react';
import styled from 'styled-components';

const SFooter = styled.footer`
  text-align: center;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 12px;
`;

function Footer() {
  return <SFooter>copyright @ 2022 isenraf</SFooter>;
}

export default Footer;
