document.querySelector('form').addEventListener('submit', onRegister);
document.querySelector('a[id="logout"]').style.display = 'none';
document.querySelector('a[id="register"]').className = 'active';
let regUrl = 'http://localhost:3030/users/register';

async function onRegister(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('rePass');

    if(!email || !password || !rePass || password !== rePass) {
        alert('Invalid email/passwordd')
        return;
    }

    await createUser({email, password});
    e.target.reset();
    window.location = 'index.html'
}

async function createUser(data) {
    const option = createOption('POST', data);
    let response = await fetch(regUrl, option);

    const userData = await response.json();
    sessionStorage.setItem("userData", JSON.stringify(userData))
}

function createOption(method,data) {
    return {
        method,
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    }
}