// Creates an array of the times available for booking the stores them as a string.
// then returns the array with sliced start and end times to prevent end time
// being earlier than start or start after end.

function hoursList(startTime, endTime, startEnd) {
  let hoursArray = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 15) {
      hoursArray.push(
        `${i.toString().padStart(2, '0')}:${j.toString().padStart(2, '0')}`
      );
    }
  }

  if (startEnd === 'end') {
    let cutIndex = hoursArray.indexOf(startTime);
    hoursArray = hoursArray.slice(-(hoursArray.length - cutIndex - 1));
  } else {
    let cutIndex = hoursArray.indexOf(endTime);
    hoursArray = hoursArray.slice(0, cutIndex);
  }

  return hoursArray;
}

export default hoursList;
