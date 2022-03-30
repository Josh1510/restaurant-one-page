import React from 'react';
import ExpandablePropertyPrinter from './ExpandablePropertyPrinter';
import styled from 'styled-components';

//Switch to case??

// checks if the passed property is a number and inserts $ for price and converts to string,
// then checks if property is a string which is printed. Next checks if property is an array,
// if it is an array it's printed. If no data is found it prompts the user to log in an create
// their menu.

const RecursiveObjectPrinter = (props) => {
  return (
    <PropertyContainer>
      {props.property ? (
        typeof props.property === 'number' ? (
          <MenuDetails>
            <div>$ {props.property.toString()}</div>
          </MenuDetails>
        ) : typeof props.property === 'string' ? (
          <MenuDetails>
            <div>{props.property.toString()}</div>
          </MenuDetails>
        ) : (
          <ExpandablePropertyPrinter title={props.propertyName}>
            {Object.values(props.property).map((property, index) => (
              <RecursiveObjectPrinter
                key={index}
                property={property}
                propertyName={Object.getOwnPropertyNames(props.property)[index]}
              />
            ))}
          </ExpandablePropertyPrinter>
        )
      ) : (
        'Please log in and create your menu'
      )}
    </PropertyContainer>
  );
};

export default RecursiveObjectPrinter;

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
