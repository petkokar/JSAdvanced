async function getInfo() {
    const busStop = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${busStop}`

    stopName.textContent = 'Loading...';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch bus stop information.'); 
        }

        const data = await response.json();
        displayTable(data);
    } catch (error) {
        stopName.textContent = 'Error';
        console.error('Error fetching bus stop info:', error);
    }
}

function displayTable(data) {
    const stopName = document.getElementById('stopName');
    const ulList = document.getElementById('buses');
    ulList.textContent = '';
    stopName.textContent = data.name;

    for(let [busId, time] of Object.entries(data.buses)) {
        const li = document.createElement('li');
        li.textContent = `Bus ${busId} arrives in ${time} minutes`;
        ulList.appendChild(li);
    }

    if(Object.entries(data.buses).length === 0) {
        ulList.textContent = 'No buses arriving soon.';
    }
}