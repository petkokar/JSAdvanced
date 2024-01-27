function addItem() {
    const input = document.getElementById('newItemText');

    if (input.value.length == 0) {
        return;
    }
    const liElement = document.createElement('li')
    liElement.textContent = input.value;

    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = "#";
    deleteButton.addEventListener('click', function(event) {
        const deleteBtn = event.target;
        const element = deleteBtn.parentElement;
        element.remove();
    })
    liElement.appendChild(deleteButton);

    const list = document.getElementById('items');
    list.appendChild(liElement);
    input.value = "";
    
    
}