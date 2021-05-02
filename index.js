function showTempAgain(response) {
  let tempAgain = Math.round(response.data.main.temp);
  let showCelAgain = document.querySelector("span.temperature");
  showCelAgain.innerHTML = tempAgain;
  document.querySelector("h3").innerHTML = response.data.name;
}
function showRealPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrlAgain = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e45e9e8d6214d5b1940ffacb75074bb9&units=metric`;
  axios.get(apiUrlAgain).then(showTempAgain);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showRealPosition);
}

function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let weatherDes = response.data.weather[0].description;
  let showCel = document.querySelector("span.temperature");
  let showDes = document.querySelector("span.weather-description");
  showCel.innerHTML = temp;
  showDes.innerHTML = weatherDes;
}

function showCity(event) {
  event.preventDefault();
  let header = document.querySelector("h3");
  let cityName = document.querySelector("#city-name");
  header.innerHTML = cityName.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=e45e9e8d6214d5b1940ffacb75074bb9&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
let formCityName = document.querySelector("#city-form");
formCityName.addEventListener("submit", showCity);
let buttonClick = document.querySelector("button.btn-success");
buttonClick.addEventListener("click", getCurrentLocation);

function showCel() {
  let celTemp = document.querySelector("span.temperature");
  celTemp.innerHTML = "19";
}
let clickCel = document.querySelector("span .celsius");
clickCel.addEventListener("click", showCel);

function showFah() {
  let fahTemp = document.querySelector("span.temperature");
  fahTemp.innerHTML = "66";
}
let clickFah = document.querySelector("span .fahrenheit");
clickFah.addEventListener("click", showFah);

let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
let year = now.getFullYear();
let date = now.getDate();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

if (minute >= 10) {
  let realTime = document.querySelector("span.time");
  realTime.innerHTML = `${year} ${month} ${date} <br />${day}, ${hour} : ${minute}`;
} else {
  let realTime = document.querySelector("span.time");
  realTime.innerHTML = `${year} ${month} ${date} <br /> ${day}, ${hour} : 0${minute}`;
}
