async function lockedProfile() {
    const url = "http://localhost:3030/jsonstore/advanced/profiles";
    const main = document.getElementById("main");
    main.innerHTML = "";

    const response = await fetch(url);
    const profilesData = await response.json();
    let values = Object.values(profilesData);
    for (let value of values) {
        let divProfile = document.createElement("div");
        divProfile.className = "profile";

        divProfile.innerHTML += `
        <img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${value._id}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${value._id}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${value._id}Username" value="${value.username}" disabled readonly />
				<div class="user${value._id}Username" style="display: none;">
                <hr>
                <label>Email:</label>
                <input type="email" name="user${value._id}Email" value="${value.email}" disabled readonly />
                <label>Age:</label>
                <input type="text" name="user${value._id}Age" value="${value.age}" disabled readonly />
				</div>
				
				<button>Show more</button>
                `;
        main.appendChild(divProfile);
    }

    const buttons = Array.from(document.querySelectorAll("button"));
    buttons.forEach((x) => x.addEventListener("click", onClickHandler));
}

function onClickHandler(event) {
    const button = event.target;
    const profileDiv = button.closest(".profile");
    const lockedRadio = profileDiv.querySelector('input[value="lock"]');
    const hiddenInfoDiv = profileDiv.querySelector("div");

    if (lockedRadio.checked) {
        return; // Profile is locked, do nothing
    }

    const showMoreText = button.textContent === "Show more";
    button.textContent = showMoreText ? "Hide it" : "Show more";
    hiddenInfoDiv.style.display = showMoreText ? "block" : "none";
}
