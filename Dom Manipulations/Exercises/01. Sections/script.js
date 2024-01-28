function create(words) {
  for (const word of words) {
    const contentDiv = document.getElementById("content");
    const divElement = document.createElement("div");
    const pElement = document.createElement("p");
    pElement.textContent = word;
    pElement.style.display = "none";
    divElement.appendChild(pElement);
    
    divElement.addEventListener("click", function () {
       pElement.style.display = (pElement.style.display) === "none" ? "block" : "none";
      });
      
      contentDiv.appendChild(divElement);
  }
}
