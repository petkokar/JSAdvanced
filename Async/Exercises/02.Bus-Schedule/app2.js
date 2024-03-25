function solve(){
    let currStop = 'depot';
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById('arrive');
    const infoBox = document.querySelector('.info');

    async function fetchStopInfo(stopId) {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stopId}`;
        const response = await fetch(url);
        const data = await response.json();

        return data;
    }

    async function depart() {
        const stopInfo = await fetchStopInfo(currStop);
        updateInfoBox(`Next stop ${stopInfo.name}`);
        currStop = stopInfo.next;

        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    async function arrive() {
        const stopInfo = await fetchStopInfo(currStop);
        updateInfoBox(`Arriving at ${stopInfo.name}`);


        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    function updateInfoBox(text) {
        infoBox.textContent = text;
    }

    return {
        depart,
        arrive
    }
}

let result = solve();