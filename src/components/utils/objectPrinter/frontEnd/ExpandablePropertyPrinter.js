import React from 'react';
import styled from 'styled-components';

// Prints out the title and then children of passed object

const ExpandablePropertyPrinter = (props) => {
  // checks if title passed is actually the array position, if
  // not the array pos then return
  const checkIsInt = (num) => {
    if (isNaN(parseInt(num, 10))) {
      return num;
    }
  };

  return (
    <>
      {console.log(props)}
      {<PropertyName>{checkIsInt(props.title)}</PropertyName>}
      {props.children}
    </>
  );
};

export default ExpandablePropertyPrinter;

const PropertyName = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
