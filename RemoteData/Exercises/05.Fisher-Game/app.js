document.querySelector('a[id="home"]').className = 'active';
document.getElementById("logout").addEventListener('click', onLogout);
document.querySelector('.load').addEventListener('click', onLoadCatch);
document.getElementById('addForm').addEventListener('submit', onCreate);


const userNavRef = document.getElementById("user");
const guestNavRef = document.getElementById("guest");
const addBtnRef = document.querySelector(".add");
const catchesContainer = document.getElementById("catches")
const url = {
    logout: 'http://localhost:3030/users/logout',
    catches: 'http://localhost:3030/data/catches'
}

let userData = JSON.parse(sessionStorage.getItem('userData'));

function hasOwner(id) {
    return userData?._id === id;
}

updateNav();
function updateNav() {
    if (userData) {
        document.querySelector("nav p span").textContent = userData.email;
        userNavRef.style.display = 'inline-block';
        guestNavRef.style.display = 'none';
        addBtnRef.disabled = false;
    } else {
        addBtnRef.disabled = true;
        userNavRef.style.display = 'none';
        guestNavRef.style.display = 'inline-block';
        document.querySelector("nav p span").textContent = 'guest';
    }
}

async function onLogout(e) {
    let option = {
        method: 'GET',
        headers: {
            'X-Authorization': userData.accessToken
        }
    }
    await fetch(url.logout, option)
    sessionStorage.clear();
    userData = null;
    updateNav();
}

async function onLoadCatch() {
    catchesContainer.innerHTML = '';
    const response = await fetch(url.catches);
    const data = await response.json();

    data.forEach(element => {
        let div = listCatches(element);
        catchesContainer.appendChild(div);
    });
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

async function onCreate(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let angler = formData.get('angler');
    let weight = formData.get('weight');
    let species = formData.get('species');
    let location = formData.get("location");
    let bait = formData.get('bait');
    let captureTime = formData.get('captureTime')
    let _ownerId = userData._id;

    if(!angler || !weight || !species || !location || !bait || !captureTime) {
        return;
    }

    const data = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime,
        _ownerId
    }
    debugger
    const option = createOption('POST', data)

    await fetch(url.catches, option)
    debugger
    onLoadCatch();
}

function createOption(method, data) {
    return {
        method,
        headers: {
            "Content-Type": 'application/json',
            "X-Authorization": userData.accessToken
        },
        body: JSON.stringify(data)
    }
}
function onUpdate(e) {


};
async function onDelete(e) {
    const id = e.target.dataset.id;
    const option = {
        method: 'DELETE',
        headers: {
            "X-Authorization": userData.accessToken
        }
    }
    await fetch(url.catches + '/' + id, option)
    onLoadCatch();
};

