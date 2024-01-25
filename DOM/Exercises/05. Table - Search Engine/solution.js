function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const searchInput = document.getElementById("searchField");
  let tableRows = Array.from(document.querySelectorAll("tbody tr"));

  function onClick() {
    let searchText = searchInput.value;
    if (searchText !== "") {
      for (let tableRow of tableRows) {
        let rowCol = Array.from(tableRow.querySelectorAll("td"));

        for (let data of rowCol) {
          if (data.textContent.includes(searchText)) {
            tableRow.classList.add("select");
            break;
          } else {
            tableRow.classList.remove("select");
          }
        }
      }
    }
    searchInput.value = "";
  }
}
