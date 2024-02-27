function attachEvents() {
    const inputField = document.getElementById('location');
    const button = document.getElementById("submit");

    button.addEventListener('click', getWeather);

    async function getWeather() {
        const url = 'http://localhost:3030/jsonstore/forecaster/locations';
        const location = inputField.value.trim();
        if(location === '') {
            alert('Invalid location')
            return;
        }

        try {
            const locationsResponse = await fetch(url);
            if(!locationsResponse.ok) {
                throw new Error('Location request failed.');
            }

            const locationsData = await locationsResponse.json();
            const locationFind = locationsData.find(loc=> loc.name.toLowerCase() === location.toLowerCase());
            if(!locationFind) {
                throw new Error('Location not found.');
            }

            const [currentResponse, upcomingResponse] = await Promise.all([
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationFind.code}`),
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationFind.code}`)
            ]);

            if(!currentResponse.ok || !upcomingResponse.ok) {
                throw new Error('Weather request failed');
            }

            const currData = await currentResponse.json();
            const upcomingData = await upcomingResponse.json();
            displayWeather(currData, upcomingData);

        } catch(error){
            displayError();
            console.error(error);
        }
        
    }

    function displayWeather(currData, upcomingData) {
        let forecastDiv = document.getElementById('forecast');
        forecastDiv.style.display = 'block';

        const currentDiv = document.getElementById('current');
        const upcomingDiv = document.getElementById('upcoming');

        let newForecastsDiv = document.createElement('div');
        let conditionSpan = document.createElement('span');
        conditionSpan.className = 'condition';
        conditionSpan.innerHTML = `
        <span class="forecast-data">${currData.name}</span>
        <span class="forecast-data">${currData.forecast.low}°/${currData.forecast.high}°</span>
        <span class="forecast-data">${currData.forecast.condition}</span>
        `
        newForecastsDiv.className = 'forecasts';
        newForecastsDiv.innerHTML = `
        <span class="condition symbol">${getWeatherSymbol(currData.forecast.condition)}</span>
        `;
        currentDiv.appendChild(newForecastsDiv)
        currentDiv.appendChild(conditionSpan)


        let newForecastInfoDiv = document.createElement("div");
        newForecastInfoDiv.className = 'forecast-info';
        upcomingData.forecast.forEach(day => {
            let newUpcomingSpan = document.createElement("span");
            newUpcomingSpan.className = 'upcoming';
            newUpcomingSpan.innerHTML = `
            <span class="symbol">${getWeatherSymbol(day.condition)}</span>
            <span class="forecast-data">${day.low}°/${day.high}°</span>
            <span class="forecast-data">${day.condition}</span>
            `
            newForecastInfoDiv.appendChild(newUpcomingSpan);
        });

        upcomingDiv.appendChild(newForecastInfoDiv)
        
    }

    function displayError() {
        const forecastDiv = document.getElementById('forecast');
        forecastDiv.style.display = 'block';
        forecastDiv.innerHTML = '<div class="error">Error fetching weather data</div>';
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
            default:
                return '';
        }
    }
}

attachEvents();