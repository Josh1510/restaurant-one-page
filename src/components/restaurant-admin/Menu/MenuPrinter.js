import React from 'react';
import MenuObjectPrinter from '../../utils/objectPrinter/menuPrinter/MenuObjectPrinter';
import _ from 'lodash';
import { json } from 'body-parser';

export default function MenuPrinter({ menuData }) {
  const newData = { ...menuData };

  // const test = (menuData) => {
  //   for (let i = 0; i < menuData.length; i++) {
  //     console.log(menuData[i]);
  //     let foodCategory = Object.keys(menuData[i])[0];
  //     console.log(_.get(menuData, [`${foodCategory}`], ''));
  //     for (
  //       let j = 0;
  //       j < _.get(menuData, [`${foodCategory}`], '').length;
  //       j++
  //     ) {
  //       console.log(_.get(menuData, [`${foodCategory}`, `${j}`], ''));
  //     }
  //   }
  // };

  let str = JSON.stringify(newData, null, 4);
  console.log(str);
  return (
    <div>
      <MenuObjectPrinter property={newData} />
    </div>
  );
}
