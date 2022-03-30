import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecursiveObjectPrinter from '../utils/objectPrinter/frontEnd/RecursiveObjectPrinter';
import styled from 'styled-components';
import SkeletonMenu from '../utils/skeletonLoading/SkeletonMenu';
import { Category } from '@material-ui/icons';

const Menu = () => {
  const [menuData, setMenuData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //Download menu from express server
  useEffect(() => {
    axios('/menu')
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <MenuContainer id="menuContainer">
      <MenuHeader>MENU</MenuHeader>
      {/* Loads in the skeleton menu while the menu is downloading from express server */}
      {loading ? (
        <SkeletonMenu />
      ) : (
        // Prints out the menu with indentation
        <>
          <RecursiveObjectPrinter property={menuData} />
        </>
      )}
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  padding-bottom: 20px;
`;

const MenuHeader = styled.div`
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
