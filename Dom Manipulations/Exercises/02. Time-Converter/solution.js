function attachEventsListeners() {
    const convertButtons = document.querySelectorAll('input[value="Convert"]');
    let arrayButtons = Array.from(convertButtons);
    
    for (let button of arrayButtons) {
        button.addEventListener('click', (event) => {
            const inputValue = Number(event.currentTarget.previousElementSibling.value);
            const unit = event.currentTarget.previousElementSibling.id;

            const days = convertToDays(inputValue, unit);
            const hours = days * 24;
            const minutes = hours * 60;
            const seconds = minutes * 60;

            document.getElementById('days').value = days;
            document.getElementById('hours').value = hours;
            document.getElementById('minutes').value = minutes;
            document.getElementById('seconds').value = seconds;
        })

    }

    function convertToDays(value, unit) {
        switch (unit) {
            case 'days':
                return value;
            case 'hours':
                return value / 24;
            case 'minutes':
                return value / (24 * 60);
            case 'seconds':
                return value / (24 * 60 * 60);
            default:
                return value;
        }
    }
}