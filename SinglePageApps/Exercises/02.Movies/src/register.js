import { updateNav } from "./app.js";
import { showHome } from "./home.js";
import { setUserData } from "./userHelper.js";
import { register } from "./userService.js";

document.getElementById('register-form').addEventListener("submit", onRegister);
export function showRegisterForm() {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    })    
    document.querySelector('#form-sign-up').style.display = 'block';
}

async function onRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get("password");
    const rePassword = formData.get('repeatPassword');

    if(!email || !password || !rePassword) {
        alert('All inputs are required!');
        return;
    }

    if(password.length < 6) {
        alert('Password length must be atleast 6 symbols') 
        return;
    }

    if(password !== rePassword) {
        alert('Password and Repeat password must be equal!')
        return;
    }

    const data = await register({email, password});

    setUserData(data);
    updateNav();
    showHome();
}
