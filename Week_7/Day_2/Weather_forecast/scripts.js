const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=46.52&longitude=6.64&current=temperature_2m,relativehumidity_2m,rain,surface_pressure,windspeed_10m,winddirection_10m';

const rain = document.getElementById('rain');
const temperature = document.getElementById('temperature_2m');
const time = document.getElementById('time');
const humidity = document.getElementById('relativehumidity_2m');
const pressure = document.getElementById('surface_pressure');
const windSpeed = document.getElementById('windspeed_10m');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        rain.textContent = data.current.rain + ' ' + data.current_units.rain;
        temperature.innerHTML = data.current.temperature_2m + ' ' + data.current_units.temperature_2m;
        time.textContent = formatTime(data.current.time);
        humidity.textContent = data.current.relativehumidity_2m + ' ' + data.current_units.relativehumidity_2m;
        pressure.textContent = data.current.surface_pressure + ' ' + data.current_units.surface_pressure;
        windSpeed.textContent = data.current.windspeed_10m + ' ' + data.current_units.windspeed_10m;
    })
    .catch(error => {
        console.log('Error fetching weather data:', error);
    });

function formatTime(apiTime) {
    const date = new Date(apiTime);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year} ${hours}:${minutes}`;
}