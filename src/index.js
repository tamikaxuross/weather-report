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

// Only update if currentTemp has a value
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
//updated reset button and made default city blank
resetButton.addEventListener('click', () => {
  cityInput.value = "";
  cityDisplay.textContent = "";
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

