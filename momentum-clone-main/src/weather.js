document.addEventListener("DOMContentLoaded", function() {
  const weatherIcon = document.querySelector('.weather__icon');
  const weatherTemp = document.querySelector('.weather__temp');
  const weatherCity = document.querySelector('.weather__city');
  const weatherDescription = document.querySelector('.weather__description');
  const forecastContainer = document.querySelector('.weather-forecast');

  function fetchWeatherForecast(lat, lon) {
    const WEATHER_API = '75f83b7bc827452aac000227241504'; // Enclose API key in quotes
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API}&q=${lat},${lon}&days=3`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const forecastData = data.forecast.forecastday;
        displayWeatherForecast(forecastData);
      })
      .catch(error => {
        console.error('Error fetching weather forecast:', error);
        // Handle error
      });
  }

  function displayWeatherForecast(forecastData) {
    forecastContainer.innerHTML = ''; // Clear previous forecast data
  
    forecastData.forEach(day => {
      const date = new Date(day.date);
      const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
      const icon = day.day.condition.icon.replace('//', 'https://'); // Corrected icon URL
      const tempMin = day.day.mintemp_c;
      const tempMax = day.day.maxtemp_c;
  
      const forecastItem = document.createElement('div');
      forecastItem.classList.add('forecast-item');
      forecastItem.innerHTML = `
        <div class="forecast-day">${dayOfWeek}</div>
        <img class="forecast-icon" src="${icon}" alt="Weather Icon">
        <div class="forecast-temp">${tempMin}°C - ${tempMax}°C</div>
      `;
  
      forecastContainer.appendChild(forecastItem);
    });
  }

  function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetchWeatherForecast(lat, lon);

    const WEATHER_API = '75f83b7bc827452aac000227241504'; // Enclose API key in quotes
    const url = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API}&q=${lat},${lon}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const city = data.location.name;
        const temp = data.current.temp_c;
        const description = data.current.condition.text;
        const icon = data.current.condition.icon.replace('//', 'https://'); // Corrected icon URL
        weatherIcon.src = icon;
        weatherDescription.innerText = description;
        weatherTemp.innerHTML = `${temp}&#8451;`;
        weatherCity.innerText = city;
      })
      .catch(error => {
        console.error('Error fetching current weather:', error);
        alert("Can't find your location or fetch weather data.");
      });
  }

  function onGeoError(error) {
    console.error('Error getting geolocation:', error);
    alert("Can't find your location. No weather for you.");
  }

  navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
});
