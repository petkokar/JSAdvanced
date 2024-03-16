import { getLike, getSingleMovie } from "./dataService.js";
import { getUserId } from "./userHelper.js";

const movieExample = document.getElementById('movie-example');
movieExample.innerHTML = '';

export async function showDetails(e) {
    e.preventDefault();
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    })    
    document.getElementById('movie-example').style.display = 'block';

    const id = e.target.dataset.id;
    const data = await getSingleMovie(id);
    const dataLikes = await getLike(id)
    listDetails(data, dataLikes);
}

function listDetails(movieData, likesCount) {
    const isOwner = getUserId() === movieData._ownerId;
    let temp = `
    <div class="container">
          <div class="row bg-light text-dark">
            <h1>Movie title: ${movieData.title}</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src=${movieData.img}
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
                ${movieData.description}
              </p>
              
    `;
    if(isOwner) {
        temp += `
        <a class="btn btn-danger" href="#">Delete</a>
              <a class="btn btn-warning" href="#">Edit</a>
              <span class="enrolled-span">Liked ${likesCount}</span>
              </div>
              </div>
              </div>
              `
            } else {
                temp += `
                <a class="btn btn-primary" href="likeMovie">Like</a>
                <span class="enrolled-span">Liked 1</span>
                </div>
                </div>
                </div>
                `;
    }

    movieExample.innerHTML = temp;
    movieExample.querySelector('.btn-primary').addEventListener('click', onAction);

}

function onAction(e) {
    debugger
    console.log('it works');

    //to do
}