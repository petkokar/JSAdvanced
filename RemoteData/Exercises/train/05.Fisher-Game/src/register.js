window.onload = () => {
    start();
    document.getElementById('user').style.display = 'none';
    document.querySelector('a[id="home"]').classList.remove('active');
    document.querySelector('a[id="register"]').className = 'active';

}

function start() {
    document.querySelector('form').addEventListener('submit', onRegister);
}

async function onRegister(e) {
    e.preventDefault();
    const url = 'http://localhost:3030/users/register';

    const formData = new FormData(e.target);
    const email = formData.get('email').trim();
    const password = formData.get("password").trim();
    const rePass = formData.get('rePass').trim();

    if(!email || !password || !rePass) {
        alert('All input fields are required!')
        return;
    }

    if(password !== rePass) {
        alert('Passwords dont match!');
        return;
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        if(!response.ok) {
            throw new Error('bad request');
        }

        const userData = await response.json();
        sessionStorage.setItem('token', JSON.stringify(userData));
        window.location.href = 'index.html';
    } catch(error) {
        console.error(error);
    }
}