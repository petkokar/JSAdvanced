function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let total = 0;
    for (let i = 1; i < rows.length; i++) {
        let value = rows[i].querySelector('td:nth-child(2)').textContent;
        total += Number(value);
    }
    document.getElementById('sum').textContent = total;
}