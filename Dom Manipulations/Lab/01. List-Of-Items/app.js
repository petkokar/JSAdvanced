function addItem() {
    const inputText = document.getElementById('newItemText');
    const li = document.createElement('li')
    if (inputText.value !== '') {
        li.textContent = inputText.value;
        const list = document.getElementById("items");
        list.appendChild(li)
        inputText.value = '';
    } else {
        return;
    }
}