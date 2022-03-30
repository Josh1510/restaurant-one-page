import React from 'react';
import uniqid from 'uniqid';

export default function NewWeekButton({ hours, setHours }) {
  // New week object with all days set to False
  const newWeek = {
    id: uniqid(),
    days: [
      ['Sunday', false],
      ['Monday', false],
      ['Tuesday', false],
      ['Wednesday', false],
      ['Thursday', false],
      ['Friday', false],
      ['Saturday', false],
    ],
    times: [['00:00', '23:45']],
  };

  // Adds a newWeek object to the current Hours object
  const onWeekClick = () => {
    let newHours = [...hours];

    newHours.push(newWeek);
    setHours(newHours);
  };

  return (
    <div>
      <button type="button" onClick={onWeekClick}>
        new week
      </button>
    </div>
  );
}
