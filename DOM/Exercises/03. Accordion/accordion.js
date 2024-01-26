function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const accordion = document.getElementById('extra');
    debugger

    // accordion.style.display= (accordion.style.display === 'none') ? "block" : "none";
    // button.textContent = (accordion.style.display === 'none') ? "More" : "Less";
    if (button.textContent === 'More') {
        button.textContent = 'Less'
        accordion.style.display = 'block';
    } else if (button.textContent === 'Less') {
        button.textContent = 'More'
        accordion.style.display = 'none';
    }

    // if (accordion.style.display = 'none') {
    //     accordion.style.display = 'block';
    // } else if (accordion.style.display = 'block') {
    //     accordion.style.display = 'none';
    // }
}