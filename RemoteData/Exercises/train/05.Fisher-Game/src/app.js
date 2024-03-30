window.onload = () => {
    document.querySelector('a[id="home"]').className = 'active';
    document.querySelector('.load').addEventListener('click', onLoad);
    checkUser();
}
const url = 'http://localhost:3030/data/catches';

const userData = JSON.parse(sessionStorage.getItem('token'));
function hasOwner(id) {
    return userData?._id === id;
}

function checkUser(){

    if(userData) {
        document.querySelector('p span').textContent = userData.email;
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        document.getElementById("user").addEventListener("click", onLogout);
        const form = document.querySelector('form');
        form.querySelector('button').disabled = false;
        form.addEventListener('submit', onAddCatch);
    } else {
        const catchDiv = document.getElementById('catches');
        catchDiv.querySelectorAll('button').forEach(button => {
            button.disabled = true;
        })
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

async function onAddCatch(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const angler = formData.get('angler').trim();
    const weight = formData.get('weight').trim();
    const species = formData.get('species').trim();
    const location = formData.get('location').trim();
    const bait = formData.get('bait').trim();
    const captureTime = formData.get('captureTime').trim();

    console.log(angler);

    if(!angler || !weight || !species || !location || !bait || !captureTime) {
        alert('All input fields are required!')
        return;
    }

    const userData = JSON.parse(sessionStorage.getItem('token'));
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.accessToken
        },
        body: JSON.stringify({angler, weight, species, location, bait, captureTime})
    })

    if(!response.ok) {
        throw new Error('Bad Request');
    }

    e.target.reset();
    await onLoad();
}

async function onLoad(e) {
    const catchesDiv = document.getElementById('catches');
    catchesDiv.textContent = '';


    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error('Bad Request');
        }

        const data = await response.json();
        data.forEach(element => {
            let div = listCatches(element);
            catchesDiv.appendChild(div);
        });
    } catch(error) {
        console.error(error);
    }
}

function listCatches(data) {
    let isOwner = hasOwner(data._ownerId);
    let div = document.createElement('div');
    div.className = 'catch';

    div.innerHTML += `<label>Angler</label>`
    div.innerHTML += `<input type="text" class="angler" ${!isOwner ? "disabled" : ""} value="${data.angler}">`
    div.innerHTML += `<label>Weight</label>`;
    div.innerHTML += `<input type="text" class="weight" ${!isOwner ? "disabled" : ""} value="${data.weight}">`;
    div.innerHTML += `<label>Species</label>`;
    div.innerHTML += `<input type="text" class="species" ${!isOwner ? "disabled" : ""} value="${data.species}">`;
    div.innerHTML += `<label>Location</label>`;
    div.innerHTML += `<input type="text" class="location" ${!isOwner ? "disabled" : ""} value="${data.location}">`;
    div.innerHTML += `<label>Bait</label>`;
    div.innerHTML += `<input type="text" class="bait" ${!isOwner ? "disabled" : ""} value="${data.bait}">`;
    div.innerHTML += `<label>Capture Time</label>`;
    div.innerHTML += `<input type="number" class="captureTime" ${!isOwner ? "disabled" : ""} value="${data.captureTime}">`;

    const updateBtn = document.createElement("button")
    updateBtn.classList.add('update');
    updateBtn.dataset.id = data._id;
    updateBtn.textContent = 'Update';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.dataset.id = data._id;
    deleteBtn.textContent = 'Delete';

    if(!hasOwner(data._ownerId)) {
        updateBtn.disabled = true;
        deleteBtn.disabled = true;
    }

    div.appendChild(updateBtn)
    div.appendChild(deleteBtn)

    updateBtn.addEventListener('click', onUpdate);
    deleteBtn.addEventListener("click", onDelete);

    return div;
}

async function onDelete(e) {
    let key = e.target.dataset.id;
    const userData = JSON.parse(sessionStorage.getItem('token'));

    const response = await fetch(url + '/' + key,{
        method: 'DELETE',
        headers: {
            'X-Authorization': userData.accessToken
        }
    })

    if(!response.ok) {
        throw new Error('Bad Request')
    }

    await onLoad();
}

async function onUpdate(e) {
    const key = e.target.dataset.id;
    const div = e.target.parentElement;

    const angler = div.querySelector('.angler').value.trim();
    const weight = div.querySelector('.weight').value.trim();
    const species = div.querySelector('.species').value.trim();
    const location = div.querySelector('.location').value.trim();
    const bait = div.querySelector('.bait').value.trim();
    const captureTime = div.querySelector('.captureTime').value.trim();

    const userData = JSON.parse(sessionStorage.getItem('token'));
    const response = await fetch(url + '/' + key, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.accessToken
        },
        body: JSON.stringify({angler, weight, species, location, bait, captureTime})
    })

    if(!response.ok) {
        throw new Error('Bad request');
    }

    await onLoad();
}

async function onLogout(e) {
    e.preventDefault();
    try {
        const logoutUrl = 'http://localhost:3030/users/logout';
        const storedUserData = JSON.parse(sessionStorage.getItem('token'));
        const accessToken = storedUserData.accessToken;

        const response = await fetch(logoutUrl, {
        method: 'get',
        headers: {
            'X-Authorization': accessToken
        },
    });

        if(!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        sessionStorage.clear();
        window.location.href = 'index.html';
    } catch(error) {
        console.error('Logout failed:', error.message);
    }
}