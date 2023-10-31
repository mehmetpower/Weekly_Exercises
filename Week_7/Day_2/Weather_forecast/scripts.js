const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,rain';

        const weatherInfo = document.getElementById('weather-info');
        const rain = document.getElementById('rain');
        const temperature = document.getElementById('temperature_2m');
        const humidity = document.getElementById('time');
        const backgroundImage = document.getElementById('background-image');

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {

                rain.textContent = data.current.rain;
                temperature_2m.textContent = data.current.temperature_2m;
                time.textContent = data.current.time;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfo.innerHTML = 'Weather data not available';
            });