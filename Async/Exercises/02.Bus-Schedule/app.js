function solve() {

    let currentStop = 'depot';
    let infoBox = document.querySelector('.info')
    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById("arrive");

    function fetchStopInfo(stopId) {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stopId}`;
        return fetch(url)
            .then(response => {
                return response.json();
            })
    }

    function depart() {
        fetchStopInfo(currentStop)
            .then(data => {
                updateInfoBox('Next stop ' + data.name);
                currentStop = data.next;
                departButton.disabled = true;
                arriveButton.disabled = false;
            })
            .catch(() => {
                updateInfoBox('Error');
                departButton.disabled = true;
                arriveButton.disabled = true;
            })
    }

    function arrive() {
        fetchStopInfo(currentStop)
            .then(data => {
                updateInfoBox('Arriving at ' + data.name);
                arriveButton.disabled = true;
                departButton.disabled = false;
            })
            .catch(() => {
                updateInfoBox('Error');
                arriveButton.disabled = true;
                departButton.disabled = true;
            })
    }

    function updateInfoBox(text) {
        infoBox.textContent = text;
    }

    
    departButton.disabled = false;

    return {
        depart,
        arrive
    };
}

let result = solve();