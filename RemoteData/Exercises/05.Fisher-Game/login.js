document.querySelector('form').addEventListener('submit', onSubmit);
const url = 'http://localhost:3030/users/login';
document.getElementById("logout").style.display = 'none';
document.querySelector('a[id="login"]').classList.add("active");
async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if(!email || !password) {
        alert('Email or Password field are empty')
        return;
    }

    await loginUser({email, password})
    e.target.reset();
    window.location = 'index.html';
}

async function loginUser(data) {
    const option = createOption('POST', data)
    const response = await fetch(url, option);
    const userData = await response.json();
    sessionStorage.setItem('userData', JSON.stringify(userData));
}

function createOption(method,data) {
    return {
        method,
        Headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    }
}