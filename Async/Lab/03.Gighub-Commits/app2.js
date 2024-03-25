const commitsUl = document.getElementById('commits');

async function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();

        if(data.length === 0) {
            alert('No commits found');
            return;
        }

        commitsUl.textContent = '';
        data.forEach(displayCommits)

    } catch(error) {
        console.error(error);
    }
}

function displayCommits(data) {
    const li = document.createElement('li');
    const name = data.commit.author.name;
    const message = data.commit.message;

    li.textContent = `${name}: ${message}`;
    commitsUl.appendChild(li);
}