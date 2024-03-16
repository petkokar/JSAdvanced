import { showRegisterForm } from "./register.js";
import { showHome } from "./home.js";
import { getUserData } from "./userHelper.js";
import { showLoginForm } from "./login.js";
import { showLogout } from "./logout.js";

document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
})

const userNav = document.querySelectorAll('li.user');
const guestNav = document.querySelectorAll('li.guest');
const navigationBar = document.querySelector('nav');
navigationBar.addEventListener('click', onNavigate);


const routes = {
    "register": showRegisterForm,
    "home": showHome,
    "login": showLoginForm,
    "logout": showLogout
}

export function updateNav() {
    const userData = getUserData();
    if(userData) {
        userNav.forEach(li => li.style.display = 'block');
        document.getElementById('welcome-msg').textContent = `Welcome ${userData.email}`;
        guestNav.forEach(li => li.style.display = 'none');
    } else {
        userNav.forEach(li => li.style.display = 'none')
        guestNav.forEach(li => li.style.display = 'block');
    }
}

export function onNavigate(e) {
    if(e.target.tagName !== 'A' || !e.target.href) {
        return;
    }
    e.preventDefault();
    const url = new URL(e.target.href);
    const path = url.pathname;
    const segments = path.split('/');
    const lastSegment = segments.pop();
    console.log(lastSegment);
    routes[lastSegment]();
}
updateNav();
showHome();
