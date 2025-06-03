// Start with a variable that keeps track of the temperature we're showing on the screen
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
});

// wave 3
const cityInput = document.getElementById('cityNameInput');
const cityDisplay = document.getElementById('headerCityName');
const resetButton = document.getElementById('cityNameReset');

cityInput.addEventListener('input', () => {
  cityDisplay.textContent = cityInput.value;
});

resetButton.addEventListener('click', () => {
  cityInput.value = '';
  cityDisplay.textContent = '';
});
