function focused() {
    const childDivs = document.querySelectorAll('div > div');
    
    for(let child of childDivs) {
        const inputFields = child.querySelectorAll('input[type="text"]');

        for(let field of inputFields) {
            field.addEventListener('focus', function () {
                this.parentElement.classList.add('focused');
            });

            field.addEventListener('blur', function () {
                this.parentElement.classList.remove("focused");
            })
        }
    }
}