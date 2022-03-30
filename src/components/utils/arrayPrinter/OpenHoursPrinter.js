import React from 'react';
import styled from 'styled-components';

export default function OpenHoursPrinter({ props }) {
  const startingWeek = {
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  };

  props.map((week) => {
    for (let i = 0; i < week.days.length; i++) {
      if (week.days[i][1]) {
        let day = week.days[i][0];
        startingWeek[day].push(week.times);
      }
    }
  });

  // returns the times open for the day or the closed string
  const checkClosedDay = (days) => {
    if (days.length > 0) {
      return days.map((day) => (
        <PropertyContainer>
          {day.map((times) => `${times[0]} - ${times[1]}`)}
        </PropertyContainer>
      ));
    } else {
      return <PropertyContainer>Closed</PropertyContainer>;
    }
  };

  return (
    <>
      <div>
        {Object.keys(startingWeek).map((days) => (
          <>
            <PropertyName>{days}</PropertyName>
            {checkClosedDay(startingWeek[days])}
          </>
        ))}
      </div>
    </>
  );
}

const PropertyName = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

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
