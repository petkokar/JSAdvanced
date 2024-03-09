function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    refreshBtn.addEventListener('click', onRefresh);
    submitBtn.addEventListener('click', onSubmit);

    async function onSubmit(event) {
        event.preventDefault();

        let authorRef = document.querySelector('input[name="author"]');
        let contentRef = document.querySelector('input[name="content"]');
        let author = authorRef.value;
        let content = contentRef.value

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({author, content})
            });
            if(!response.ok) {
                return;
            }

            authorRef.value = '';
            contentRef.value = '';

            const data = await response.json();
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    async function onRefresh(event) {
        event.preventDefault();

        let response = await fetch(url);
        let data = await response.json();

        const messages = document.getElementById("messages");
        messages.value = '';
        Object.values(data).forEach(rec => {
            messages.value += `${rec.author}: ${rec.content}\n`;            
        })
        messages.value = messages.value.trim();
    }
}

attachEvents();