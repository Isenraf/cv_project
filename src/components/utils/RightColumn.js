import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  text-transform: capitalize;
  text-align: right;
  padding-right: 8px;

  p {
    font-style: italic;
  }
`;

function RightColumn({ city, startDate, endDate, flow }) {
  switch (flow) {
    case 'bottom':
      return (
        <Div>
          {startDate.length === 0 && endDate.length === 0 ? null : (
            <p>
              {startDate} - {endDate}
            </p>
          )}
          <p>{city}</p>
        </Div>
      );

    default:
      return (
        <Div>
          <p>{city}</p>
          {startDate.length === 0 && endDate.length === 0 ? null : (
            <p>
              {startDate} - {endDate}
            </p>
          )}
        </Div>
      );
  }
}

export default RightColumn;
