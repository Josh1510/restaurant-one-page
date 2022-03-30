import React from 'react';
import styled from 'styled-components';
import Widget from './Widget';

export default function Reserve(props) {
  return (
    <ReserveContainer id="reserveContainer">
      <ReserveHeader>RESERVE</ReserveHeader>
      <WidgetContainer>
        <Widget {...props} />
      </WidgetContainer>
    </ReserveContainer>
  );
}

const ReserveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;

const ReserveHeader = styled.div`
  padding 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: min(max(16px, 10vw), 75px);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
`;
const WidgetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
