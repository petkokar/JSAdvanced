const authorInput = document.querySelector('input[name="author"]');
const messageInput = document.querySelector('input[name="content"]');
const conversationWindow = document.getElementById('messages');
const sendBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');

sendBtn.addEventListener('click', onSend);
refreshBtn.addEventListener('click', onRefresh);

async function onSend(e) {
    e.preventDefault();

    const author = authorInput.value.trim();
    const message = messageInput.value.trim();


    if(!author || !message) {
        alert('All input fields are required!')
        return;
    }

    const object = {
        author: author,
        content: message
    }
    const sendUrl = 'http://localhost:3030/jsonstore/messenger';

    try {
        const response = await fetch(sendUrl, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })

        if(!response.ok) {
            throw new Error('Fetch error');
        }

        authorInput.value = '';
        messageInput.value = '';
    } catch(error) {
        console.error(error);
    }
}

async function onRefresh(e) {
    e.preventDefault();

    const messagesUrl = 'http://localhost:3030/jsonstore/messenger';

    try {
        const response = await fetch(messagesUrl);
        if(!response.ok) {
            throw new Error('Bad Request');
        }

        const data = await response.json();
        conversationWindow.value = '';

        const messageLines = Object.values(data).map(rec => `${rec.author}: ${rec.content}`);
        conversationWindow.value = messageLines.join('\n').trim();

    } catch(error) {
        console.error(error);
    }
}
