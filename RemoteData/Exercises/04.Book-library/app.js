document.addEventListener('DOMContentLoaded', function () {

    const loadButton = document.getElementById('loadBooks');
    const tbodyRef = document.querySelector("tbody");
    const form = document.querySelector("form");
    const urlGet = 'http://localhost:3030/jsonstore/collections/books';
    const updateUrl = 'http://localhost:3030/jsonstore/collections/books/';
    
    loadButton.addEventListener('click', loadBooks);
    form.addEventListener('submit', onCreateBook);
    async function loadBooks(e) {
        e.preventDefault();
        try {
            const response = await fetch(urlGet);
            const data = await response.json();
            tbodyRef.innerHTML = '';
            showBooks(data);
        } catch(error) {
            console.error(error);
            throw new Error('bad request');
        }
    }
    
    async function onCreateBook(e) {
        e.preventDefault();
        tbodyRef.innerHTML = '';
        const formData = new FormData(e.target);
        let title = formData.get('title');
        let author = formData.get('author');
        await createBook({title, author});
    
        e.target.reset();
    }
    
    async function createBook(data) {
        try {
            const response = await fetch(urlGet, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const bookData = await response.json();
            showBook(bookData);
        } catch (error) {
            console.error(error);
            throw new Error('Failed to create book');
        }
    }
    
    async function showBooks(data) {
        if (Object.keys(data).length > 0) {
            const books = Object.values(data)
            books.forEach(book => showBook(book));
        } else {
            showBook(data);
        }
    }
    
    function showBook(book) {
        console.log(book);
        let tr = document.createElement('tr');
        tr.setAttribute('data-id', book._id)
        let tdName = document.createElement('td');
        tdName.textContent = book.title;
        let tdAuthor = document.createElement('td');
        tdAuthor.textContent = book.author;
        let tdButtons = document.createElement('td');
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        deleteBtn.textContent = 'Delete';
        tdButtons.appendChild(editBtn);
        tdButtons.appendChild(deleteBtn);
        tr.appendChild(tdName);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdButtons);
    
        editBtn.addEventListener('click', () => {
            document.querySelector('form h3').textContent = 'Edit Form';
            const titleInput = document.querySelector('form input[name="title"]');
            const authorInput = document.querySelector('form input[name="author"]');
            titleInput.value = book.title;
            authorInput.value = book.author;
    
            const submitButton = document.querySelector('form button');
            submitButton.textContent = 'Save';
            form.removeEventListener('submit', onCreateBook);
            form.addEventListener('submit', () => onUpdateBook(book._id));
        });
        // deleteBtn.addEventListener('click', onDelete);
        
        tbodyRef.appendChild(tr);
    }
    
    async function onUpdateBook(id) {
        const formData = new FormData(form);
        const title = formData.get('title');
        const author = formData.get('author');
        try {
            const response = await fetch(updateUrl + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author })
            })
    
            const updatedBook = await response.json();
            const tr = document.querySelector(`tr[data-id="${id}"]`);
            tr.querySelector('td:nth-child(1)').textContent = updatedBook.title;
            tr.querySelector('td:nth-child(2)').textContent = updatedBook.author;
        } catch(error) {
            console.error(error);
            throw new Error('Failed to update book');
        }
    
        form.reset();
        document.querySelector('form h3').textContent = 'FORM';
        const submitBtn = document.querySelector('form button')
        submitBtn.textContent = document.textContent = 'Submit';
        form.removeEventListener('submit', onUpdateBook);
        form.addEventListener('submit', onCreateBook)
    }
})
