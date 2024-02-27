const list = document.getElementById('repos');

function loadRepos() {
	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then(onHeaders)
		.then(onSuccess)
		.catch(onSuccess);
}

function onHeaders(response) {
	if(!response.ok) {
		throw 'Error';
	}
	return response.json()
}

function onSuccess(data) {
	list.replaceChildren(...data.map(createLiItem));
}

function onError(error) {
	list.textContent = error;
}

function createLiItem({html_url, full_name}) {
	const item = document.createElement('li');
	const anchor = document.createElement('a');
	anchor.href = html_url;
	anchor.textContent = full_name;
	item.appendChild(anchor)
	return item;
}

//COPY

// const list = document.getElementById('repos');

// async function loadRepos() {
// 	const username = document.getElementById('username').value;
// 	const url = `https://api.github.com/users/${username}/repos`;

// 	try {
// 		const reponse = await fetch(url);
// 		if(!reponse.ok) {
// 			throw 'Error';
// 		}

// 		const data = await response.json();
// 		list.replaceChildren(...data.map(createLiItem))
// 	} catch (error) {
// 		list.textContent = error;
// 	}
// }

// function createLiItem({html_url, full_name}) {
// 	const item = document.createElement('li');
// 	const anchor = document.createElement('a');
// 	anchor.href = html_url;
// 	anchor.textContent = full_name;
// 	item.appendChild(anchor)
// 	return item;
// }