function solve() {

  const [inputTextAreaRef, resultTextAreaRef] = document.querySelectorAll('textarea');
  const [generateBtnRef, buyButnRef] = document.querySelectorAll('button');
  const tableBodyRef = document.querySelector('tbody');

  generateBtnRef.addEventListener('click', generateInputHandler);
  buyButnRef.addEventListener('click', buyHandler);

  function generateInputHandler(e) {
    let data = JSON.parse(inputTextAreaRef.value);

    for(let item of data) {
      createRowAndAppend(item);
    }
  }

  function createRowAndAppend(item) {
    const tr = document.createElement('tr');
    tr.innerHTML += createTableData(`<img src=${item.img}>`)
    tr.innerHTML += createTableData(`<p>${item.name}</p>`)
    tr.innerHTML += createTableData(`<p>${item.price}</p>`)
    tr.innerHTML += createTableData(`<p>${item.decFactor}</p>`)
    tr.innerHTML += createTableData(`<input type='checkbox'>`)
    tableBodyRef.appendChild(tr);
  }
  
  function createTableData(item) {
    return `<td>${item}</td>`
  }
  
  function buyHandler(e) {
    let name = [];
    let price = 0;
    let sumDecFac = 0;
    let selectedRows = document.querySelectorAll('input[type="checkbox"]:checked');

    for (let checkbox of selectedRows) {
      let [img, nameVal, priceVal, decFacVal] = Array.from(checkbox.parentElement.parentElement.children);
      nameVal = nameVal.children[0].textContent;
      priceVal = Number(priceVal.children[0].textContent);
      decFacVal = Number(decFacVal.children[0].textContent);

      name.push(nameVal);
      price += priceVal;
      sumDecFac += decFacVal;
    }

    let res = "Bought furniture: ";
    res += name.join(', ');
    res += '\n';
    res += `Total price: ${price.toFixed(2)}\n`;
    res += `Average decoration factor: ${sumDecFac / name.length}`

    resultTextAreaRef.value = res;
  }
}