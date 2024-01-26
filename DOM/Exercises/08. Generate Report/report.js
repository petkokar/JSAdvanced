function generateReport() {
    
    let checkboxes = document.querySelectorAll('thead input[type="checkbox"]');
    const outputTextarea = document.getElementById('output');
  
    const checkedColumns = Array.from(checkboxes)
      .filter(function (checkbox) {
        return checkbox.checked;
      })
      .map(function (checkbox) {
        return checkbox.parentElement.textContent.trim();
      });
  
    const columnDataArray = [];
  
    const rows = document.querySelectorAll('tbody tr');
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const rowData = {};
  
      for (let j = 0; j < checkedColumns.length; j++) {
        const columnIndex = Array.from(row.cells).indexOf(row.querySelector(`td:nth-child(${j + 1})`));
        const columnName = checkedColumns[j];
  
        rowData[columnName] = row.cells[columnIndex].textContent.trim();
      }
  
      columnDataArray.push(rowData);
    }
  
    outputTextarea.value = JSON.stringify(columnDataArray, null, 2);
      
  }