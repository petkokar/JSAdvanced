function deleteByEmail() {
    const input = document.querySelector('[name="email"]');
    const resultDiv = document.getElementById('result');
    const table = document.getElementById('customers');
    const rows = table.querySelectorAll('tbody tr');

    const arrayRows = Array.from(rows);
    let success = false;
    // let matches = [];

    for(let row of arrayRows) {
        let children = row.children[1].textContent == input.value;
        if (children) {
            // matches.push(row.children[1].textContent);
            row.remove();
            success = true;
        }
    }
    
    if (success) {
        resultDiv.textContent = 'Deleted.';
    } else {
        resultDiv.textContent = 'Not found.';
    }
    
}