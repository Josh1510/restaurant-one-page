import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <CreatedBy>
      <div>Created by JoshMoon</div>
      <div>
        <a href="https://github.com/Josh1510" target="_blank" rel="noreferrer">
          <FooterButtonElement type="button">GitHub</FooterButtonElement>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://www.linkedin.com/in/joshua-moon-770324106/"
          target="_blank"
          rel="noreferrer"
        >
          <FooterButtonElement type="button">LinkedIn</FooterButtonElement>{' '}
        </a>
      </div>
    </CreatedBy>
  );
}

const CreatedBy = styled.div`
  padding 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: min(max(16px, 10vw), 14px);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: rgba(255,255,255,.95);
  background-color: rgba(0, 0, 0, 1);
  width: 100vw;
`;

const FooterButtonElement = styled.button`
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
  text-decoration: none;
  &:hover {
    border: 2px solid #ffffff;
    background-color: rgba(255, 255, 255, 0.2);
    text-decoration: none;
  }
`;
