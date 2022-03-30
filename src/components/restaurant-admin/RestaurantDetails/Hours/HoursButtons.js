import React, { useState } from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import hoursList from '../../../utils/hoursList';
import _ from 'lodash';

export default function HoursButtons({ parentIndex, setHours, hours }) {
  const [startTime, setStartTime] = useState(
    _.get(hours, [parentIndex, 'times', [0], [0]], '')
  );
  const [endTime, setEndTime] = useState(
    _.get(hours, [parentIndex, 'times', [0], [1]], '')
  );

  const handleChangeStart = (event) => {
    setStartTime(event.target.value);
    updateHours(0, event.target.value);
  };
  const handleChangeEnd = (event) => {
    setEndTime(event.target.value);
    updateHours(1, event.target.value);
  };

  const updateHours = (num, time) => {
    let newHours = [...hours];
    console.log(time);
    newHours[parentIndex].times[0][num] = time;
    console.log(newHours);
    setHours(newHours);
  };

  return (
    <div>
      <TextField
        id="standard-select-time-start"
        select
        label="Opening Time"
        value={startTime}
        onChange={handleChangeStart}
        helperText="Please select your opening time"
        variant="standard"
      >
        {hoursList(startTime, endTime, 'start').map((option) => (
          <MenuItem key={`${parentIndex}-start-${option}`} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="standard-select-time-end"
        select
        label="Closing Time"
        value={endTime}
        onChange={handleChangeEnd}
        helperText="Please select your closing time"
        variant="standard"
      >
        {hoursList(startTime, endTime, 'end').map((option) => (
          <MenuItem key={`${parentIndex}-start-${option}`} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
