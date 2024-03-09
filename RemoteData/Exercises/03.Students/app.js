const tbody = document.querySelector('tbody');
const form = document.getElementById('form');
const url = 'http://localhost:3030/jsonstore/collections/students';
form.addEventListener('submit', createStudent);
window.onload = fetchStudents;

async function createStudent(event) {
    event.preventDefault();
    const firstName = form.elements['firstName'].value.trim();
    const lastName = form.elements['lastName'].value.trim();
    const facultyNumber = form.elements['facultyNumber'].value.trim();
    const grade = Number(form.elements['grade'].value.trim());

    if(!firstName || !lastName || !facultyNumber || !grade) {
        return;
    }

    const student = {
        firstName,
        lastName,
        facultyNumber,
        grade
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        });

        if(!response.ok) {
            throw new Error('Failed to create student');
        }
        fetchStudents();
        form.reset();
    }catch(error) {
        console.error(error);
    }
}

async function fetchStudents(event) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        displayStudents(data);
    } catch(error) {
        console.error(error);
    }
}

function displayStudents(students) {
    console.log(students);
    tbody.innerHTML = '';
    for(const student of Object.values(students)) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.facultyNumber}</td>
        <td>${student.grade}</td>
        `;
        tbody.appendChild(tr);
    }
}