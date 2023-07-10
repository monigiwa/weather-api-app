function displayCurrentDateAndTime() {
  let current = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[current.getDay()];
  let hours = current.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = current.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let currentDateAndTime = document.querySelector("#current-date-time");
  currentDateAndTime.innerHTML = `${day} ${hours}:${minutes}`;
}
displayCurrentDateAndTime();
/*Challenge 2*/

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input").value;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${cityInput}, Nigeria`;
}
let submitForm = document.querySelector("#search-input-form");
submitForm.addEventListener("submit", showCity);
/* Challenge 3 */
function convertTempToCelsius() {
  let convertToCelcius = document.querySelector("#temperature");
  convertToCelcius.innerHTML = `⛅ 30`;
}
let tempC = document.querySelector("#celcius-link");
tempC.addEventListener("click", convertTempToCelsius);

function convertTempToFahrenheit() {
  let convertToFahrenheit = document.querySelector("#temperature");
  convertToFahrenheit.innerHTML = `⛅ 73`;
}
let tempF = document.querySelector("#fahrenheit-link");
tempF.addEventListener("click", convertTempToFahrenheit);
