import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

// Prints out the title and then children of passed object

const MenuPropertyPrinter = (props) => {
  // checks if title passed is actually the array position, if
  // not the array pos then return
  const checkIsInt = (num) => {
    if (isNaN(parseInt(num, 10))) {
      return (
        <TextField
          required
          id="standard-required"
          label="Category"
          defaultValue={num}
          variant="standard"
          // onChange={handleMenuChange}
          // error={error}
          // disabled={loading}
        />
      );
    }
  };

  return (
    <>
      {<PropertyName>{checkIsInt(props.title)}</PropertyName>}
      {props.children}
    </>
  );
};

export default MenuPropertyPrinter;

const PropertyName = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
