function showText() {
    const textToRemove = document.getElementsByTagName('a')[0];
    textToRemove.style.display = 'none';
    const text = document.getElementById('text');
    text.style.display = 'inline';
}