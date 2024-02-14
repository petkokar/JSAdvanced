window.addEventListener('load', solve);

function solve() {
    const nextStepBtn = document.getElementById('next-btn');
    const infoTicketSection = document.querySelector('.ticket-info-list')
    const confirmTicketSection = document.querySelector('.confirm-ticket');

    let newEditButton = document.createElement('button');
    newEditButton.className = 'edit-btn';
    newEditButton.textContent = 'Edit';

    let newContinueButton = document.createElement('button');
    newContinueButton.className = 'continue-btn';
    newContinueButton.textContent = 'Continue';

    let newConfirmBtn = document.createElement('button');
    let newCancelBtn = document.createElement('button');
    newConfirmBtn.className = 'confirm-btn';
    newConfirmBtn.textContent = 'Confirm';
    newCancelBtn.className = 'cancel-btn';
    newCancelBtn.textContent = 'Cancel';
    
    nextStepBtn.addEventListener('click', function(event) {
        event.preventDefault();

        let firstName = document.getElementById('first-name').value;
        let lastName = document.getElementById('last-name').value;
        let peopleCount = document.getElementById('people-count').value;
        let fromDate = document.getElementById('from-date').value;
        let daysCount = document.getElementById('days-count').value;

        if (firstName == '' || lastName == '' || peopleCount == '' || fromDate == '' || daysCount == '') {
            return;
        }
        
        let newLi = document.createElement('li');
        newLi.className = 'ticket';
        let newArticle = document.createElement('article');

        newArticle.innerHTML += `<h3>Name: ${firstName} ${lastName}</h3>`;
        newArticle.innerHTML += `<p>From date: ${fromDate}</p>`;
        newArticle.innerHTML += `<p>For ${daysCount} days</p>`;
        newArticle.innerHTML += `<p>For ${peopleCount} people</p>`


        newLi.appendChild(newArticle);
        newLi.appendChild(newEditButton);
        newLi.appendChild(newContinueButton);

        infoTicketSection.appendChild(newLi)

        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('people-count').value = '';
        document.getElementById('from-date').value = '';
        document.getElementById('days-count').value = '';
        nextStepBtn.disabled = true;
    })

    newEditButton.addEventListener('click', function() {
        let ticket = this.parentElement;
        let firstName = ticket.querySelector('h3').textContent.split(' ')[1];
        let lastName = ticket.querySelector('h3').textContent.split(' ')[2];
        let fromDate = ticket.querySelector('p:nth-of-type(1)').textContent.split(': ')[1];
        let daysCount = ticket.querySelector('p:nth-of-type(2)').textContent.split(' ')[1];
        let peopleCount = ticket.querySelector('p:nth-of-type(3)').textContent.split(' ')[1];

        document.getElementById('first-name').value = firstName;
        document.getElementById('last-name').value = lastName;
        document.getElementById('people-count').value = peopleCount;
        document.getElementById('from-date').value = fromDate;
        document.getElementById('days-count').value = daysCount;

        ticket.remove();
        nextStepBtn.disabled = false;
    });

    newContinueButton.addEventListener('click', function() {
        let ticket = this.parentElement;
        confirmTicketSection.appendChild(ticket);

        newContinueButton.remove();
        newEditButton.remove();

        ticket.appendChild(newConfirmBtn);
        ticket.appendChild(newCancelBtn);
    })

    newCancelBtn.addEventListener('click', function() {
        let ticket = this.parentElement;
        ticket.remove();
        nextStepBtn.disabled = false;
    })

    newConfirmBtn.addEventListener("click", function() {
        let header = document.createElement('h1');
        header.id = 'thank-you';
        header.textContent = 'Thank you, have a nice day!';
        let divToRemove = document.getElementById('main');
        divToRemove.remove();

        let body = document.getElementById('body');
        body.appendChild(header);
        let backBtn = document.createElement('button');
        backBtn.id = 'back-btn';
        backBtn.textContent = 'Back';
        backBtn.addEventListener('click', function() {
            window.location.reload();
        })
        body.appendChild(backBtn);
    })

}