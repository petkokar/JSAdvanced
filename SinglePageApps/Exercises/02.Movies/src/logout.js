import { updateNav } from "./app.js";
import { showLoginForm } from "./login.js";
import { clear } from "./userHelper.js";
import { logout } from "./userService.js";

export async function showLogout(){
    await logout();
    clear();
    updateNav();
    showLoginForm();
}