const searchBtn = document.getElementById('searchBtn');
const weatherInfo = document.getElementById('weatherInfo');

searchBtn.addEventListener('click', () => {
  const cityInput = document.getElementById('cityInput');
  const cityName = cityInput.value;
  const apiKey = 'ba431de7b0b6b9c6407085b5b9432b1b'; // Replace with your OpenWeatherMap API key

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      weatherInfo.innerHTML = `
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
      `;
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
      weatherInfo.innerHTML = 'Error fetching weather data';
    });
});
