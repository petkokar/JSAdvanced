function generateReport() {
    let checkbox = Array.from(document.querySelectorAll("input[type=checkbox]"));
    let data = Array.from(document.querySelectorAll("tbody tr"));
   
    let objArray = [];
   
    for (const row of data) {
      let currentEmployee = {};
   
      checkbox.forEach((checkEl, index) => {
        if (checkEl.checked) {
          currentEmployee[checkEl.name] = row.children[index].textContent
        }
      });
   
      objArray.push(currentEmployee)
    }
   
    document.querySelector("#output").value = JSON.stringify(objArray)
  }