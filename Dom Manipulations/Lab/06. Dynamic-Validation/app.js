function validate() {
    const inputField = document.getElementById('email');
    let value = inputField.value;
    
    inputField.addEventListener('change', checkEmail);
    const reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

    function checkEmail (event) {
        if (reg.test(event.target.value)) {
            event.target.classList.remove('error');
            return;
        }
        event.target.classList = "error";
    }
}