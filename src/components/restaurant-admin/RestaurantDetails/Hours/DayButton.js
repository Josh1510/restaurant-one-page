import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

export default function DayButton({
  dayId,
  dayValue,
  DayshortCode,
  isChecked,
  parentIndex,
  setHours,
  hours,
  dayIndex,
}) {
  const [isTicked, setIsTicked] = useState(true);

  const onClick = () => {
    setIsTicked((prevState) => !prevState);

    let newHours = [...hours];
    newHours[parentIndex].days[dayIndex][1] =
      !newHours[parentIndex].days[dayIndex][1];

    setHours(newHours);
  };
  const handleOnChange = () => {
    if (isChecked) {
      setIsTicked(!isTicked);
    }
  };
  useEffect(() => {
    if (isChecked) {
      setIsTicked(!isTicked);
    }
  }, []);

  const uniqDayId = `${dayId}-${_.uniqueId()}`;

  return (
    <DayConainer ticked={isTicked}>
      <StyledInput
        type="checkbox"
        id={uniqDayId}
        value={dayValue}
        onClick={onClick}
        checked={isChecked}
        onChange={handleOnChange}
      />
      <StyledLabel htmlFor={uniqDayId}>
        <StyledSpan>{DayshortCode}</StyledSpan>
      </StyledLabel>
    </DayConainer>
  );
}

const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  display: inline-block;
  width: 100px;
  height: 50px;
`;

const StyledSpan = styled.span``;

const DayConainer = styled.div`
  background-color: ${(p) =>
    !p.ticked ? 'hsl(125, 94%, 80%)' : 'hsl(125, 94%, 95%)'};
  border: ${(p) =>
    !p.ticked
      ? '2px solid hsl(125, 94%, 65%)'
      : '2px solid hsl(125, 94%, 85%)'};
`;
