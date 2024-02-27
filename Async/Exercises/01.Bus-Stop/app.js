const stopName = document.getElementById("stopName");
let ulElement = document.getElementById("buses");

function getInfo() {
    const busId = document.getElementById("stopId").value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;

    fetch(url)
        .then(onHeader)
        .then(onDone)
        .catch(verifyError)
}

function onHeader(response) {
    if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
}

function onDone(data) {
    console.log(data);
    stopName.textContent = data.name;
    ulElement.innerHTML = '';
    for(let [busId, time] of Object.entries(data.buses)) {
        let listItem = document.createElement('li');
        listItem.textContent = `Bus ${busId} arrives in ${time} minutes`;
        ulElement.appendChild(listItem);
    }
}

function verifyError(error) {
    stopName.textContent = 'Error';
    ulElement.innerHTML = '';
}
