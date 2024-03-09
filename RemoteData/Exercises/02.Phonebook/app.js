function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    const getUrl = 'http://localhost:3030/jsonstore/phonebook';
    const createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', onCreate);
    loadBtn.addEventListener('click', getPhonebooks);

    async function getPhonebooks(event) {
        const ulRef = document.getElementById('phonebook');

        const response = await fetch(getUrl)
        const data = await response.json();
        ulRef.innerHTML = '';

        Object.values(data).forEach(rec => {
            const li = document.createElement('li')
            const deleteBtn = document.createElement("button")
            deleteBtn.addEventListener("click", onDelete);
            deleteBtn.textContent = 'Delete';
            deleteBtn.dataset.id = rec._id;
            li.textContent = `${rec.person}: ${rec.phone}`;
            li.appendChild(deleteBtn)
            ulRef.appendChild(li);
        })
    }

    async function onDelete(event) {
        const delUrl = 'http://localhost:3030/jsonstore/phonebook/';
        let id = event.target.dataset.id;

        await fetch(delUrl + id, {
            method: 'DELETE',
        });
        getPhonebooks();
    }

    async function onCreate(event) {
        let personRef = document.getElementById('person');
        let phoneRef = document.getElementById("phone");

        let person = personRef.value;
        let phone = phoneRef.value;

        if(!person || !phone) {
            alert('Enter valid person/phone')
            return;
        } 

        await fetch(getUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({person, phone})
        })

        personRef.value = '';
        phoneRef.value = '';
        getPhonebooks();
    }
}

attachEvents();