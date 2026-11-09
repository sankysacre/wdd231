const currentTempEl = document.querySelector("#current-temp");
const weatherDescEl = document.querySelector("#weather-desc");
const weatherIconEl = document.querySelector("#weather-icon");
const forecastContainer = document.querySelector("#forecast-container");

const apiKey = "YOUR_API_KEY_HERE"; 
const lat = "YOUR_LATITUDE";
const lon = "YOUR_LONGITUDE";

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(currentUrl);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }

        const forecastResponse = await fetch(forecastUrl);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            displayForecast(forecastData);
        } else {
            throw Error(await forecastResponse.text());
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayCurrentWeather(data) {
    if (currentTempEl) {
        currentTempEl.textContent = Math.round(data.main.temp);
    }
    if (weatherDescEl) {
        weatherDescEl.textContent = data.weather[0].description;
    }
    if (weatherIconEl) {
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherIconEl.setAttribute('src', iconsrc);
        weatherIconEl.setAttribute('alt', data.weather[0].description);
    }
}

function displayForecast(data) {
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes("18:00:00")).slice(0, 3);

    if (forecastContainer) {
        forecastContainer.innerHTML = dailyForecasts.map(day => {
            const date = new Date(day.dt * 1000);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            const temp = Math.round(day.main.temp);

            return `
                <div class="forecast-day">
                    <span class="day-name">${dayName}</span>
                    <span class="day-temp">${temp}°C</span>
                </div>
            `;
        }).join('');
    }
}

apiFetch();