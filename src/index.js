/* // Start with a variable that keeps track of the temperature we're showing on the screen
let currentTemp = 70;

// This function updates the temperature display on the page
const updateTempDisplay  = () => {
  // Grab the element on the page where the temperature is shown
  const tempDisplay = document.getElementById('temperature');
  // Actually show the number with a ° symbol
  tempDisplay.textContent = `${currentTemp}°`;
 // Take off any old color classes before adding the new one
  tempDisplay.classList.remove('temp-red', 'temp-orange', 'temp-yellow', 'temp-green', 'temp-teal')

  // Now add the right color based on how hot or cold it is
  if (currentTemp >= 80) {
    tempDisplay.classList.add('temp-red');
  } else if (currentTemp >= 70) {
    tempDisplay.classList.add('temp-orange');
  } else if (currentTemp >= 60) {
    tempDisplay.classList.add('temp-yellow');
  } else if (currentTemp >= 50) {
    tempDisplay.classList.add('temp-green');
  } else {
    tempDisplay.classList.add('temp-teal');
  }
};
// adds 1 to temperature when the "up" button is clicked
const increaseTemp = () => {
  currentTemp += 1;
  updateTempDisplay();
};

// subtracts 1 from temperature when the "down" button is clicked
const decreaseTemp = () => {
  currentTemp -= 1;
  updateTempDisplay();
};
// Wait until the page is fully loaded, then set up the buttons so they work when clicked,
// and also make sure the temperature shows up right away when the page opens
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('increase-temp').addEventListener('click', increaseTemp);
  document.getElementById('decrease-temp').addEventListener('click', decreaseTemp);
  updateTempDisplay(); 
}); */

////////////////////////////////


/* let currentTemp = null;  // or undefined, or something else

const updateTempDisplay  = () => {
  const tempDisplay = document.getElementById('temperature');

  if (currentTemp === null || currentTemp === undefined) {
    // Show placeholder
    tempDisplay.textContent = '--°F';
    // Remove all color classes since no temp is set yet
    tempDisplay.classList.remove('temp-red', 'temp-orange', 'temp-yellow', 'temp-green', 'temp-teal');
  } else {
    tempDisplay.textContent = `${currentTemp}°F`;
    tempDisplay.classList.remove('temp-red', 'temp-orange', 'temp-yellow', 'temp-green', 'temp-teal');

    if (currentTemp >= 80) {
      tempDisplay.classList.add('temp-red');
    } else if (currentTemp >= 70) {
      tempDisplay.classList.add('temp-orange');
    } else if (currentTemp >= 60) {
      tempDisplay.classList.add('temp-yellow');
    } else if (currentTemp >= 50) {
      tempDisplay.classList.add('temp-green');
    } else {
      tempDisplay.classList.add('temp-teal');
    }
  }
}; */

let currentTemp = null;

const updateTempDisplay = () => {
  const tempDisplay = document.getElementById('temperature');

  if (currentTemp === null || currentTemp === undefined) {
    tempDisplay.textContent = '--°F';
    tempDisplay.classList.remove('temp-red', 'temp-orange', 'temp-yellow', 'temp-green', 'temp-teal');
  } else {
    tempDisplay.textContent = `${currentTemp}°F`;
    tempDisplay.classList.remove('temp-red', 'temp-orange', 'temp-yellow', 'temp-green', 'temp-teal');

    if (currentTemp >= 80) {
      tempDisplay.classList.add('temp-red');
    } else if (currentTemp >= 70) {
      tempDisplay.classList.add('temp-orange');
    } else if (currentTemp >= 60) {
      tempDisplay.classList.add('temp-yellow');
    } else if (currentTemp >= 50) {
      tempDisplay.classList.add('temp-green');
    } else {
      tempDisplay.classList.add('temp-teal');
    }
  }
  updateLandscape();
};

//updates landscape images along with the temperature; according to the temp levels 
const updateLandscape = () => {
  const landscape = document.getElementById("landscape");

  if (currentTemp >= 80) {
    landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
  } else if (currentTemp >= 70) {
    landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
  } else if (currentTemp >= 60) {
    landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
  } else {
    landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
  }
};

// 🛑 Only update if currentTemp has a value
const increaseTemp = () => {
  if (currentTemp !== null && currentTemp !== undefined) {
    currentTemp += 1;
    updateTempDisplay();
  }
};

const decreaseTemp = () => {
  if (currentTemp !== null && currentTemp !== undefined) {
    currentTemp -= 1;
    updateTempDisplay();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('increase-temp').addEventListener('click', increaseTemp);
  document.getElementById('decrease-temp').addEventListener('click', decreaseTemp);
  updateTempDisplay(); 
});

// wave 3
const cityInput = document.getElementById('cityNameInput');
const cityDisplay = document.getElementById('headerCityName');
const resetButton = document.getElementById('cityNameReset');

cityInput.addEventListener('input', () => {
  cityDisplay.textContent = cityInput.value;
});
//updated reset button and made default city New Orleans
resetButton.addEventListener('click', () => {
  const defaultCity = "New Orleans";
  cityInput.value = defaultCity;
  cityDisplay.textContent = defaultCity;
});

// wave 5
const updateSky = () => {
  const sky = document.getElementById("sky");
  const selectedSky = document.getElementById("sky-select").value;

  if (selectedSky === "sunny") {
    sky.textContent = "☀️ ☀️ ☀️ ☀️ ☀️";
  } else if (selectedSky === "partly-cloudy") {
    sky.textContent = "⛅🌤️⛅🌤️⛅";
  } else if (selectedSky === "cloudy") {
    sky.textContent = "☁️ ☁️ ☁️ ☁️ ☁️";
  } else if (selectedSky === "rainy") {
    sky.textContent = "🌧️🌧️🌈🌧️🌦️";
  } else if (selectedSky === "stormy") {
    sky.textContent = "🌩️⛈️⚡🌩️⛈️";
  } else if (selectedSky === "snowy") {
    sky.textContent = "🌨❄️🌨🌨❄️❄️";
  } else if (selectedSky === "foggy") {
    sky.textContent = "🌫️🌫️🌫️";
  } else if (selectedSky === "windy") {
    sky.textContent = "🍃🍃🍃🍃🍃";
  }
};

// Attach the event listener
document.getElementById("sky-select").addEventListener("change", updateSky);


// wave 4
/// Get lat/lon for city name via Weather Report proxy server
/* const getLatLonForPlace = (place) => {
  return axios
    .get('/location', {
      params: { q: place }
    })
    .then(response => {
      const { lat, lon } = response.data[0];
      return { lat, lon };
    })
    .catch(error => {
      console.error('Error fetching coordinates:', error);
      throw error;
    });
};

// Get temperature via Weather Report proxy server using lat/lon
const getTemperatureForPlace = ({ lat, lon }) => {
  return axios
    .get('/weather', {
      params: { lat, lon }
    })
    .then(response => {
      const temp = response.data.current.temp;
      return temp;
    })
    .catch(error => {
      console.error('Error fetching temperature:', error);
      throw error;
    });
}; */
const API_BASE_URL = 'http://127.0.0.1:5000';

const getLatLonForPlace = (place) => {
  return axios
    .get(`${API_BASE_URL}/location`, {
      params: { q: place }
    })
    .then(response => {
      const { lat, lon } = response.data[0];
      return { lat, lon };
    })
    .catch(error => {
      console.error('Error fetching coordinates:', error);
      throw error;
    });
};

const getTemperatureForPlace = ({ lat, lon }) => {
  return axios
    .get(`${API_BASE_URL}/weather`, {
      params: { lat, lon }
    })
    .then(response => {
      const temp = response.data.main.temp;
      return temp;
    })
    .catch(error => {
      console.error('Error fetching temperature:', error);
      throw error;
    });
};

// Handle button click
document.getElementById('currentTempButton').addEventListener('click', () => {
  const city = document.getElementById('cityNameInput').value.trim();

  if (!city) {
    alert('Please enter a city name.');
    return;
  }

/*   getLatLonForPlace(city)
    .then(getTemperatureForPlace)
    .then(temp => {
      const tempCelsius = (temp - 273.15).toFixed(1); // Convert Kelvin to Celsius
      document.getElementById('temperature').textContent = `${tempCelsius}°`;
    })
    .catch(() => {
      alert(`Could not retrieve temperature for "${city}".`);
    }); */
     getLatLonForPlace(city)
    .then(getTemperatureForPlace)
    .then(temp => {
      currentTemp = parseInt((temp - 273.15) * 9 / 5 + 32);
      updateTempDisplay();                                              
    })
    .catch(() => {
      alert(`Could not retrieve temperature for "${city}".`);
    });
});

