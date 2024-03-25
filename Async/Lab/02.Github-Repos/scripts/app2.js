const user = document.getElementById('username');
const list = document.getElementById('repos');

async function loadRepos() {
    const username = user.value;
    const url = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(url);
        
        if(!response.ok) {
            throw new Error('Error');
        }

        const data = await response.json();
        list.replaceChildren(...data.map(createListItem))
        user.value = '';
    } catch(error) {
        list.textContent = error;
        console.error(error);
    }
}


function createListItem(data) {
    const newLi = document.createElement('li');
    const anchor = document.createElement('a');

    anchor.href = data.html_url;
    anchor.textContent = data.full_name;
    newLi.appendChild(anchor);
    return newLi;
}