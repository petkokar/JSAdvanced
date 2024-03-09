window.addEventListener("load", start);

function start(){

    const userData = localStorage.getItem('user');

    if(!userData) {
        window.location = '/login.html';
        return;
    }
    document.querySelector('form').addEventListener('submit', onCreate);
}

async function onCreate(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    const body = {
        name: data.name.trim(),
        img: data.img.trim(),
        ingredients: parseMultiLines(data.ingredients),
        steps: parseMultiLines(data.steps)
    }

    try {
        const url = 'http://localhost:3030/data/recipes';

        const userData = JSON.parse(localStorage.getItem('user'));

        if(!userData) {
            throw new Error('You must be logged in!'); 
        }

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken
            },
            body: JSON.stringify(body)
        });

        if(!res.ok) {
            const errr = await res.json();
            throw new Error(errr.message)
        }

        window.location = '/';
    } catch (error) {
        alert(error.message);
    }

}

function parseMultiLines(data) {
    return data
        .split('\n')
        .map(r => r.trim())
        .filter(r => r);
}