import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import MenuPrinter from './MenuPrinter';
import MenuObjectPrinter from '../../utils/objectPrinter/menuPrinter/MenuObjectPrinter';

export default function MenuBuilder() {
  const [menuData, setMenuData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
    <MenuBuilderContainer>
      <MenuBuilderHeader>Menu Builder</MenuBuilderHeader>
      <div>hello</div>
      <MenuPrinter menuData={menuData} />

      <button onclick="myFunction()">New Category</button>
      <button onclick="myFunction()">New Item</button>
    </MenuBuilderContainer>
  );
}

const MenuBuilderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 10px;
`;

const MenuBuilderHeader = styled.div`
  padding 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: min(max(16px, 3vw), 75px);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  margin-bottom:10px
`;
