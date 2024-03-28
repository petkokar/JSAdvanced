function attach() {

    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    
    const ul = document.getElementById('phonebook');
    
    const url = 'http://localhost:3030/jsonstore/phonebook';
    
    loadBtn.addEventListener('click', onLoad);
    createBtn.addEventListener("click", onCreate);
    
    async function onLoad(e){
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error("Bad Request");
            }
            
            const data = await response.json();
            ul.innerHTML = '';
            Object.values(data).map(createLi);
    
        } catch(error) {
            console.error(error);
        }
    }
    
    async function onCreate(e) {
    
        const person = document.getElementById('person').value.trim();
        const phone = document.getElementById('phone').value.trim();
    
        if(!person || !phone) {
            alert('All input fields are required!')
            return;
        }
    
        const object = {
            person: person,
            phone: phone
        };
    
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            })
    
            if(!response.ok) {
                throw new Error('Bad request');
            }
    
            document.getElementById('person').value = '';
            document.getElementById('phone').value = '';
    
            await onLoad();
        } catch(error) {
            console.error(error);
        }
    
    } 
    
    async function onDelete(e) {
    
        let key = e.target.id;
    
        const delUrl = 'http://localhost:3030/jsonstore/phonebook/';
    
        try {
            const response = await fetch(delUrl + key, {
                method: 'DELETE'
            });
            if(!response.ok) {
                alert('No delete');
                return;
            }
            await onLoad();
        } catch(error) {
            console.error(error)
        }
    }
    
    function createLi(data) {
        let li = document.createElement('li');
        li.textContent = `${data.person}: ${data.phone}`;
        const btn = document.createElement("button");
        btn.textContent = 'Delete';
        btn.id = data._id;
    
        btn.addEventListener('click', onDelete);
    
        li.appendChild(btn);
        ul.appendChild(li);
    }
}

attach();