import React, { forwardRef } from 'react';
import styled from 'styled-components';

// takes the title of the button as a prop then returns a styled button

const HeaderButton = (props) => {
  return (
    <HeaderButtonElement
      type="button"
      onClick={() =>
        document
          .getElementById(`${props.title.toLowerCase()}Container`)
          .scrollIntoView({ behavior: 'smooth' })
      }
    >
      {props.title}
    </HeaderButtonElement>
  );
};

export default HeaderButton;

const HeaderButtonElement = styled.button`
  height: 6vh;
  width: 100px;
  margin: 0px 15px;
  border: none;
  color: white;
  background-color: Transparent;
  font-size: 16px;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  &:hover {
    border: 2px solid #ffffff;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
