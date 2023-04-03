const API_KEY = "1d67f66cd30e65bcf6e124167155df91";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert(
    "I don't know where you are. You must be somewhere in space. I wish I could know the weather where you are and how you feel."
  );
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
