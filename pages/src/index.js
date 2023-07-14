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
  console.log(response.data);
}

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input").value;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${cityInput}`;

  let apiKey = `14e466d9db948177786a4330301cfa0e`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let submitForm = document.querySelector("#search-input-form");
submitForm.addEventListener("submit", showCity);
