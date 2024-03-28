window.onload = () => {
    document.querySelector('tbody').innerHTML = '';
}
const loadBooksBtn = document.getElementById('loadBooks');
const form = document.querySelector('form'); 
const tbodyRef = document.querySelector('tbody');

form.addEventListener('submit', onCreate);
loadBooksBtn.addEventListener('click', loadBooks);
const url = 'http://localhost:3030/jsonstore/collections/books';

async function loadBooks(e) {
    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error('bad request');
        }

        const data = await response.json();
        createTableRows(data);
    } catch(error) {
        console.error(error);
    }
}

async function onCreate(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get('title');
    const author = formData.get('author');

    if(!title || !author) {
        alert('All input fields are required!');
        return;
    }

    const object = {
        author: author,
        title: title
    }

    try {
        const response = await fetch(url, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })

        if(!response.ok) {
            throw new Error('Bad Request');
        }
        e.target.reset();
        await loadBooks();
    } catch(error){
        console.error(error);
    }
}

function createTableRows(booksData) {
    tbodyRef.innerHTML = '';

    Object.entries(booksData).map(([key, { author, title }]) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        `;
        const tdButtons = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.dataset.id = key;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = 'Delete';
        deleteBtn.dataset.id = key;
        editBtn.addEventListener('click', onEdit)
        deleteBtn.addEventListener('click', onDelete);

        tdButtons.appendChild(editBtn);
        tdButtons.appendChild(deleteBtn);
        tr.appendChild(tdButtons);
        tbodyRef.appendChild(tr);
    })
}

async function onDelete(e) {
    const key = e.target.dataset.id;

    await fetch(url + '/' + key, {
        method: 'DELETE'
    })

    loadBooks();
}

function onEdit(e) {
    form.querySelector('h3').textContent = 'Edit FORM';
    form.querySelector("button").textContent = 'Save';

    form.removeEventListener('submit', onCreate);
    form.addEventListener('submit', onUpdate);
    const key = e.target.dataset.id;

    async function onUpdate(e) {
        const formData = new FormData(e.target);
        const title = formData.get('title');
        const author = formData.get('author');
    
        if(!title || !author) {
            alert('all input fields are required!');
            return;
        }
    
        const object = {
            author: author,
            title: title
        }
    
        const response = await fetch(url + '/' + key, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })

        if(!response.ok) {
            throw new Error('Bad request');
        }

        e.target.reset();
        form.querySelector('h3').textContent = 'FORM';
        form.querySelector('button').textContent = 'Submit';
        form.removeEventListener('submit', onUpdate);
        form.addEventListener('submit', onCreate);
        loadBooks();
    }
}
