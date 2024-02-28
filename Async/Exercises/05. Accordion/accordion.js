function solution() {
    document.addEventListener('DOMContentLoaded', async function () {
        const mainSection = document.getElementById("main");
        const articlesUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';

        const response = await fetch(articlesUrl);
        const articlesData = await response.json();
        const reponseValues = Object.values(articlesData);

        for(let data of reponseValues) {
            let parentDiv = document.createElement('div');
            parentDiv.className = 'accordion';
            
            let headDiv = document.createElement("div");
            headDiv.className = 'head'

            let spanElement = document.createElement('span');
            spanElement.textContent = data.title;

            let button = document.createElement("button");
            button.className = 'button';
            button.id = data._id;
            button.textContent = 'More';
            
            let extraDivContent = document.createElement('div');
            extraDivContent.className = 'extra';
            extraDivContent.style.display = 'none';
            
            
            button.addEventListener('click', async function () {
                if(button.textContent == 'More') {
                    const detailsUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${data._id}`;
                    const detailsResponse = await fetch(detailsUrl);
                    const detailsData = await detailsResponse.json();
                    
                    extraDivContent.innerHTML = '';
                    
                    let newPelement = document.createElement('p');
                    newPelement.textContent = detailsData.content;
                    extraDivContent.appendChild(newPelement);
                    extraDivContent.style.display = 'block';
                    
                    parentDiv.appendChild(extraDivContent)
                    button.textContent = 'Less';
                } else {
                    extraDivContent.style.display = 'none';
                    button.textContent = 'More';
                }
            });
            headDiv.appendChild(spanElement);
            headDiv.appendChild(button);
            parentDiv.appendChild(headDiv);
            mainSection.appendChild(parentDiv)
        }

        
    })
}

solution();