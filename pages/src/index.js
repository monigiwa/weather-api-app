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

function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

function showCity() {
  let cityInput = document.querySelector("#city-input").value;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${cityInput}`;

  let apiKey = `14e466d9db948177786a4330301cfa0e`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  // let city = po

  let apiKey = `14e466d9db948177786a4330301cfa0e`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
  console.log(position.data.name);
}
function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let submitForm = document.querySelector("#search-input-form");
submitForm.addEventListener("submit", showCity);

let currentLocationBtn = document.querySelector("#current-location-btn");
currentLocationBtn.addEventListener("click", getCurrentLocation);
