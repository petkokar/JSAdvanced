const input = document.getElementById('location');
const submitBtn = document.getElementById('submit');
const currentDiv = document.getElementById('current');
const upcomingDiv = document.getElementById("upcoming");
const forecastDiv = document.getElementById('forecast');

submitBtn.addEventListener('click', getWeather);

async function getWeather(){
    const locationName = input.value.trim(); 
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    try {
        const response = await fetch(url);

        if (!response.ok) { 
            throw new Error(`Could not fetch location data: ${response.statusText}`);
        }

        const data = await response.json();
        const location = data.find(l => l.name.toLowerCase() === locationName.toLowerCase())

        if(!location) {
            alert('Location not found.')
            return;
        }

        const locationCode = location.code;
        await Promise.all([
            todayConditions(locationCode),
            threeDayForecast(locationCode)
        ]);

        forecastDiv.style.display = 'block';
        input.value = '';
    } catch(error) {
        displayError(error.message);
    }
}

async function todayConditions(code){
    const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Could not fetch location data: ${response.statusText}`);
        }

        const data = await response.json();
        displayToday(data);
    } catch(error) {
        console.error(error);
    }
}

async function threeDayForecast(code) {
    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Could not fetch location data: ${response.statusText}`);
        }

        const data = await response.json();
        displayThreeDay(data);
    } catch(error) {
        console.error(error);
    }

}

function displayToday(data) {
    let todayInfo = `
    <div class="forecasts">
    <span class="condition symbol">${getWeatherSymbol(data.forecast.condition)}</span>
    <span class="condition">
    <span class="forecast-data">${data.name}</span>
    <span class="forecast-data">${data.forecast.low}${getWeatherSymbol('degrees')}/${data.forecast.high}${getWeatherSymbol("degrees")}</span>
    <span class="forecast-data">${data.forecast.condition}</span>
    </span>
    </div>
    `;

    currentDiv.innerHTML += todayInfo;
}

function displayThreeDay(data) {
    const newDiv = document.createElement("div");
    newDiv.className = 'forecast-info';
    data.forecast.forEach(day => {
        let parentSpan = document.createElement("span");
        parentSpan.className = 'upcoming';
        parentSpan.innerHTML = `
        <span class="symbol">${getWeatherSymbol(day.condition)}</span>
        <span class="forecast-data">${day.low}${getWeatherSymbol('degrees')}/${day.high}${getWeatherSymbol('degrees')}</span>
        <span class="forecast-data">${day.condition}</span>
        `;
        newDiv.appendChild(parentSpan);
    });

    upcomingDiv.appendChild(newDiv);
}

function getWeatherSymbol(condition) {
    switch (condition.toLowerCase()) {
        case 'sunny':
            return '&#x2600;';
        case 'partly sunny':
            return '&#x26C5;';
        case 'overcast':
            return '&#x2601;';
        case 'rain':
            return '&#x2614;';
        case 'degrees':
            return '&#176;';
        default:
            return '';
    }
}

function displayError() {
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.style.display = 'block';
    forecastDiv.innerHTML = '<div class="error">Error fetching weather data</div>';
}

