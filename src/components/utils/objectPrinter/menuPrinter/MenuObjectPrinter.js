import React from 'react';
import MenuPropertyPrinter from './MenuPropertyPrinter';
import styled from 'styled-components';

import { TextField } from '@material-ui/core';

// checks if the passed property is a number and inserts $ for price and converts to string,
// then checks if property is a string which is printed. Next checks if property is an array,
// if it is an array it's printed. If no data is found it prompts the user to log in an create
// their menu.

const MenuObjectPrinter = (props) => {
  const notUndefined = (props) => {
    if (props.propertyName !== undefined) {
      return (
        <MenuPropertyPrinter title={props.propertyName}>
          {Object.values(props.property).map((property, index) => (
            <MenuObjectPrinter
              key={index}
              property={property}
              propertyName={Object.getOwnPropertyNames(props.property)[index]}
            />
          ))}
        </MenuPropertyPrinter>
      );
    }
  };

  return (
    <PropertyContainer>
      {props.property ? (
        typeof props.property === 'number' ? (
          <MenuDetails>
            $
            <TextField
              required
              id="standard-required"
              label="Price"
              defaultValue={props.property.toString()}
              variant="standard"
              // onChange={handleMenuChange}
              // error={error}
              // disabled={loading}
            />
          </MenuDetails>
        ) : typeof props.property === 'string' ? (
          <>
            <TextField
              required
              id="standard-required"
              label="Description"
              defaultValue={props.property.toString()}
              variant="standard"
              // onChange={handleMenuChange}
              // error={error}
              // disabled={loading}
            />
          </>
        ) : (
          // notUndefined(props)
          <MenuPropertyPrinter title={props.propertyName}>
            {Object.values(props.property).map((property, index) => (
              <MenuObjectPrinter
                key={index}
                property={property}
                propertyName={Object.getOwnPropertyNames(props.property)[index]}
              />
            ))}
          </MenuPropertyPrinter>
        )
      ) : (
        'Please log in and create your menu'
      )}
    </PropertyContainer>
  );
};

export default MenuObjectPrinter;

const PropertyContainer = styled.div`
  padding-top: 10px;
  padding-left: 3px;
  margin-left: 10px;
  font-size: 20px;
  max-width: 500px;
`;

const MenuDetails = styled.div`
  display: flex;
`;
