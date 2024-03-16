import { showDetails } from "./details.js";
import { getAllMovies } from "./dataService.js";
import { getUserId } from "./userHelper.js";

const moviesList = document.getElementById('movies-list');

export function showHome() {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    })    
    document.getElementById('home-page').style.display = 'block';

    const userId = getUserId();

    if(userId) {
        showAddBtn();
    }

    showAllMovies(userId);
}

function showAddBtn() {
    document.getElementById('add-movie-button').style.display = 'block';
}

async function showAllMovies(userId) {
    moviesList.innerHTML = '';
    document.getElementById('movie').style.display = 'block';
    const data = await getAllMovies();
    data.forEach(movie => {
        listMovies(movie, userId);
    })
}                                   

function listMovies(data, userId) {
    const list = document.createElement('li');
    list.className = 'card mb-4';
    list.innerHTML = `
    <img class="card-img-top"  src="${data.img}" alt="Card image cap" width="400"/>
                  <div class="card-body">
                    <h4 class="card-title">${data.title}</h4>
                    <a href="#">
                    </a>
                  </div>
                  <div class="card-footer">
                  <button data-id=${data._id} type="button" class="btn btn-info">Details</button>
                  </div>
    `;
    if(!userId) {
            list.querySelector('.card-footer').style.display = 'none';
    } else {
        list.querySelector('.btn-info').addEventListener('click', showDetails);
    }
        moviesList.appendChild(list);
}