import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import styled from 'styled-components';
import HoursSelector from './HoursSelector';
import NewWeekButton from './NewWeekButton';

export default function HoursOptions(data) {
  const [hours, setHours] = useState(_.get(data, ['data'], ''));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .put('/siteDatahoursData', hours)
      .then((response) => {
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteWeek = (e) => {
    let newHours = [...hours];

    let index = hours.findIndex((x) => x.id === e.currentTarget.id);

    newHours.splice(index, 1);
    setHours(newHours);
  };

  return (
    <HoursOptionsContainer>
      <HoursOptionsHeader>Open Hours</HoursOptionsHeader>

      <StyledForm onSubmit={handleSubmit}>
        {hours.map((data, index) => (
          <HoursSelector
            data={data}
            key={_.uniqueId()}
            hours={hours}
            setHours={setHours}
            parentIndex={index}
            deleteWeek={deleteWeek}
          />
        ))}
        <NewWeekButton hours={hours} setHours={setHours} />
        <input type="submit" value="Submit" onSubmit={handleSubmit} />
      </StyledForm>
    </HoursOptionsContainer>
  );
}

const HoursOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 10px;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const HoursOptionsHeader = styled.div`
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
