window.addEventListener('load', solve);

function solve() {
    const data = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        contactNumber: document.getElementById('contact-number'),
        prefClass: document.getElementById('class-type'),
        classTime: document.getElementById('class-time')
    }

    let nextBtn = document.getElementById('next-btn');
    let previewSection = document.querySelector('.class-info');
    let confirmSection = document.querySelector(".confirm-class");
    let mainDiv = document.getElementById('main');
    // let thankyouDiv = document.getElementById('thank-you');
    let bodyDiv = document.getElementById('body');

    nextBtn.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault();

        for(let key in data) {
            if (data[key].value == '') {
                return;
            }
        }

        let liItem = document.createElement('li');
        liItem.className = 'info-item';
        let articleItem = document.createElement("article");
        articleItem.innerHTML += `<p>${data.name.value}</p>`;
        articleItem.innerHTML += `<p>${data.email.value}</p>`;
        articleItem.innerHTML += `<p>${data.contactNumber.value}</p>`;
        articleItem.innerHTML += `<p>${data.prefClass.value}</p>`;
        articleItem.innerHTML += `<p>${data.classTime.value}</p>`;
        liItem.appendChild(articleItem);

        let editBtn = document.createElement('button');
        let continueBtn = document.createElement("button");
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';
        liItem.appendChild(editBtn);
        liItem.appendChild(continueBtn);
        previewSection.appendChild(liItem);

        let backUp = {};

        for(let key in data) {
            backUp[key] = data[key].value;
            data[key].value = '';
        }

        nextBtn.disabled = true;

        editBtn.addEventListener('click', onEdit);
        continueBtn.addEventListener('click', onContinue);


        function onEdit(){
            liItem.remove();
            for(let key in data) {
                data[key].value = backUp[key];
            }
            nextBtn.disabled = false;
        }

        function onContinue(){
            editBtn.remove();
            continueBtn.remove();
            let confirmBtn = document.createElement('button');
            let cancelBtn = document.createElement("button");
            confirmBtn.className = 'confirm-btn';
            confirmBtn.textContent = 'Confirm';
            cancelBtn.className = 'cancel-btn';
            cancelBtn.textContent = 'Cancel';
            liItem.appendChild(confirmBtn);
            liItem.appendChild(cancelBtn);
            confirmSection.appendChild(liItem);

            confirmBtn.addEventListener('click', onConfirm);
            cancelBtn.addEventListener('click', onCancel);

            function onCancel() {
                liItem.remove();
                nextBtn.disabled = false;
            }

            function onConfirm(){
                mainDiv.remove();
                let h1Element = document.createElement('h1');
                h1Element.id = 'thank-you';
                h1Element.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!';
                let doneBtn = document.createElement("button");
                doneBtn.textContent = 'Done';
                doneBtn.id = 'done-btn';
                bodyDiv.appendChild(h1Element);
                bodyDiv.appendChild(doneBtn);

                doneBtn.addEventListener('click', onDone);

            }

            function onDone(){
                window.location.reload();
            }
        }
    }
}




