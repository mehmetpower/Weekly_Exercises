const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,rain';

const weatherInfo = document.getElementById('weather-info');
const rain = document.getElementById('rain');
const temperature_2m = document.getElementById('temperature_2m');
const time = document.getElementById('time'); // Changed the variable name to 'time' for consistency

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        rain.textContent = data.current.rain;
        temperature_2m.textContent = data.current.temperature_2m;

        // Format the time
        const apiTime = data.current.time;
        const formattedTime = formatTime(apiTime);
        time.textContent = `${formattedTime}`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = 'Weather data not available';
    });

function formatTime(apiTime) {
    const date = new Date(apiTime);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${hours}:${minutes} ${day}-${month}-${year}`;
}