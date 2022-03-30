import React, { setState } from 'react';
import styled from 'styled-components';
import DayButton from './DayButton';
import _ from 'lodash';
import deleteIcon from '../../../../images/delete_icon.svg';
import HoursButtons from './HoursButtons';

export default function HoursSelector({
  data,
  hours,
  setHours,
  parentIndex,
  deleteWeek,
}) {
  return (
    <StyledParentContainer>
      <StyledDaysContainer>
        {data.days.map((day, index) => (
          <DayButton
            dayId={day[0]}
            dayValue={day[0]}
            DayshortCode={day[0].substring(0, 3)}
            isChecked={day[1]}
            key={`${index}-${_.uniqueId()}`}
            parentIndex={parentIndex}
            setHours={setHours}
            hours={hours}
            dayIndex={index}
          />
        ))}
        <StyledButton id={data.id} onClick={deleteWeek} key={data.id}>
          <img src={deleteIcon} alt="delete" />
        </StyledButton>
      </StyledDaysContainer>
      <HoursButtons
        parentIndex={parentIndex}
        setHours={setHours}
        hours={hours}
      />
    </StyledParentContainer>
  );
}

const StyledParentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDaysContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DeleteInput = styled.input``;

const StyledButton = styled.button``;
