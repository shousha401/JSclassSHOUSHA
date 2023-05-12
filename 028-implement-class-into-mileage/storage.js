function getTripData() {
  try {
    const tripDataJSON = localStorage.getItem('tripdata');
    if (tripDataJSON !== null && tripDataJSON !== undefined) {
      return JSON.parse(tripDataJSON);
    }
  } catch (error) {
    console.error('Error parsing trip data:', error);
  }

  return [];
}

function saveTripData(MY_DATA) {
    localStorage.setItem('tripdata', JSON.stringify(MY_DATA))
}

export {getTripData, saveTripData}