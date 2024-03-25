window.onload = () => {
    loadAccordions();
}

const main = document.getElementById("main");

async function loadAccordions() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        data.map(showAccordions)
    } catch(error) {
        alert('No lists to show!');
        return;
    }
}

function showAccordions(data) {
    let accordDiv = document.createElement('div');
    accordDiv.className = 'accordion';
    let headDiv = document.createElement("div");
    headDiv.className = 'head';
    
    let span = document.createElement("span");
    span.textContent = data.title;
    let button = document.createElement("button")
    button.className = 'button';
    button.id = data._id;
    button.textContent = 'More';

    headDiv.appendChild(span);
    headDiv.appendChild(button);

    let extraDiv = document.createElement('div');
    extraDiv.className = 'extra';
    extraDiv.style.display = 'none';

    button.addEventListener('click', async function ()  {
        if(button.textContent === 'More') {
            const url = `http://localhost:3030/jsonstore/advanced/articles/details/${data._id}`;
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch details');
            const detailsData = await response.json();
            let p = document.createElement('p');
            p.textContent = detailsData.content;
            extraDiv.innerHTML = '';
            extraDiv.appendChild(p);
            accordDiv.appendChild(extraDiv);

            extraDiv.style.display = 'block';
            button.textContent = 'Less';

        } else {
            button.textContent = 'More';
            extraDiv.style.display = 'none';
        }
    })

    accordDiv.appendChild(headDiv);
    main.appendChild(accordDiv)
}