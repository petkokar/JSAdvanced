window.onload = () => {
    getStudents();
}
const tbodyRef = document.querySelector('tbody');
const firstNameRef = document.querySelector('input[name="firstName"]');
const lastNameRef = document.querySelector('input[name="lastName"]');
const facultyNumRef = document.querySelector('input[name="facultyNumber"]');
const gradeRef = document.querySelector('input[name="grade"]');
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener('click', onCreate);

const url = 'http://localhost:3030/jsonstore/collections/students';
async function getStudents(){
    tbodyRef.innerHTML = '';
    try {
       const response = await fetch(url);
       
       if(!response.ok) {
            throw new Error('Bad Request');
       }

       const data = await response.json();
       Object.values(data).map(createRow);
    } catch(error) {
        console.error(error)
    }
}

async function onCreate(e) {
    e.preventDefault();
    
    const firstName = firstNameRef.value.trim();
    const lastName = lastNameRef.value.trim();
    const facultyNumber = facultyNumRef.value;
    const grade = gradeRef.value;

    if(!firstName || !lastName || !facultyNumber || !grade) {
        alert('All input fields are required!')
        return;
    }
    const object = {
        firstName: firstName,
        lastName: lastName,
        facultyNumber: facultyNumber,
        grade: grade
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(object)
    })

    if(!response.ok) {
        throw new Error('Bad Request');
    }

    firstNameRef.value = '';
    lastNameRef.value = '';
    facultyNumRef.value = '';
    gradeRef.value = '';

    await getStudents();
}

function createRow(data) {
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${data.firstName}</td>
    <td>${data.lastName}</td>
    <td>${data.facultyNumber}</td>
    <td>${data.grade}</td>
    `;

    tbodyRef.appendChild(tr);
}