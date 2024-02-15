window.addEventListener("load", solve);

function solve() {
    let timeInput = document.getElementById("time");
    let dateInput = document.getElementById("date");
    let placeInput = document.getElementById("place");
    let eventInput = document.getElementById("event-name");
    let emailInput = document.getElementById("email");
    let addButton = document.getElementById("add-btn");
    let checkList = document.getElementById("check-list");
    let moveToFinishBtn = document.createElement("button");
    let clearButton = document.querySelector("#clear");

    clearButton.addEventListener("click", function () {
        let ul = document.getElementById("finished-list");
        let liToRemove = ul.querySelector(".event-content");
        liToRemove.remove();
    });

    addButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (
            timeInput.value == "" ||
            dateInput.value == "" ||
            placeInput.value == "" ||
            eventInput.value == "" ||
            emailInput.value == ""
            ) {
            return;
        }

        let newLi = document.createElement("li");
        newLi.className = "event-content";
        let newArticle = document.createElement("article");
        newArticle.innerHTML += `<p>Begins: ${dateInput.value} at: ${timeInput.value}</p>`;
        newArticle.innerHTML += `<p>In: ${placeInput.value}</p>`;
        newArticle.innerHTML += `<p>Event: ${eventInput.value}</p>`;
        newArticle.innerHTML += `<p>Contact: ${emailInput.value}</p>`;

        let newEditBtn = document.createElement("button");
        let newContinueBtn = document.createElement("button");
        newEditBtn.className = "edit-btn";
        newContinueBtn.className = "continue-btn";
        newEditBtn.textContent = "Edit";
        newContinueBtn.textContent = "Continue";

        newLi.appendChild(newArticle);
        newLi.appendChild(newEditBtn);
        newLi.appendChild(newContinueBtn);

        checkList.appendChild(newLi);

        timeInput.value = "";
        dateInput.value = "";
        placeInput.value = "";
        eventInput.value = "";
        emailInput.value = "";

        addButton.disabled = true;

        newEditBtn.addEventListener("click", function () {
            let event = this.parentElement;

            let timeRef = event
                .querySelector("p:nth-of-type(1)")
                .textContent.split(" ")[3];
            let dateRef = event
                .querySelector("p:nth-of-type(1)")
                .textContent.split(" ")[1];
            let placeRef = event
                .querySelector("p:nth-of-type(2")
                .textContent.split(" ")[1];
            let eventRef = event
                .querySelector("p:nth-of-type(3)")
                .textContent.split(" ")[1];
            let emailRef = event
                .querySelector("p:nth-of-type(4)")
                .textContent.split(" ")[1];

            document.getElementById("time").value = timeRef;
            document.getElementById("date").value = dateRef;
            document.getElementById("place").value = placeRef;
            document.getElementById("event-name").value = eventRef;
            document.getElementById("email").value = emailRef;

            addButton.disabled = false;
            event.remove();
        });
        newContinueBtn.addEventListener("click", function () {
            let event = this.parentElement;
            let upcomingSection = document.getElementById("upcoming-list");
            newEditBtn.remove();
            newContinueBtn.remove();

            moveToFinishBtn.className = "finished-btn";
            moveToFinishBtn.textContent = "Move to Finished";
            event.appendChild(moveToFinishBtn);
            upcomingSection.appendChild(event);
            addButton.disabled = false;

            moveToFinishBtn.addEventListener("click", function () {
                let event = this.parentElement;
                let finishedSection = document.getElementById("finished-list");
                finishedSection.appendChild(event);
                moveToFinishBtn.remove();
            });
        });
    });

}
