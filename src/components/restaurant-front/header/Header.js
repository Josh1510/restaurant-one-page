import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import heroImage from '../../../images/HeroImage.avif';
import HeaderButton from './HeaderButton';

export default function Header(props) {
  return (
    <HeaderContainer id="homeContainer">
      <HeaderMenuContainer>
        <PushRight></PushRight>
        <HeaderButton title="HOME"></HeaderButton>
        <HeaderButton title="MENU"></HeaderButton>
        <HeaderButton title="RESERVE"></HeaderButton>
        <HeaderButton title="CONTACT"></HeaderButton>
      </HeaderMenuContainer>
      <RestaurantName>
        {props.data.headerData.restaurantName.toString()}
      </RestaurantName>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background-image: url('${heroImage}');
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const HeaderMenuContainer = styled.div`
  height: 10vh;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 45px;
`;

const PushRight = styled.div`
  flex-grow: 1;
`;

const RestaurantName = styled.div`
  display: flex;
  align-items: center;
  color: white;
  height: 70%;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: min(max(16px, 10vw), 150px);
`;
