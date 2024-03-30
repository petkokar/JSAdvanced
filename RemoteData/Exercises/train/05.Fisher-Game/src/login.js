window.onload = () => {
    start();
    document.querySelector('a[id="home"]').classList.remove('active');
    document.querySelector('a[id="login"]').className = 'active';
    document.getElementById("user").style.display = 'none';
}

function start() {
    const form = document.querySelector('form');
    form.addEventListener('submit', onLogin);
}

const url = 'http://localhost:3030/users/login';


async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get('password');

    if(!email || !password) {
        alert('All input fields are required!');
        return;
    }

    try {
        const response = await fetch(url, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        if(!response.ok) {
            throw new Error('Bad request');
        }
        const userData = await response.json();
        sessionStorage.setItem('token', JSON.stringify(userData));
        alert("Login Succesful!")
        window.location.href = 'index.html';
    }catch(error) {
        console.error(error);
    }
}