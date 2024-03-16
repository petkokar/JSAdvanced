import { get, post } from "./requester.js"

const endPoints = {
    moviesUrl: 'http://localhost:3030/data/movies',
    addLike: 'http://localhost:3030/data/likes'
}

async function getAllMovies() {
    return await get(endPoints.moviesUrl);
}

async function getSingleMovie(id) {
    return await get(endPoints.moviesUrl + '/' + id)
}

async function getLike(id){
    return await get(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&coun`)
}

async function createLike(id) {
    return await post(endPoints.addLike, {"moviesId": id})
}

export {
    getAllMovies,
    getSingleMovie,
    getLike,
    createLike
}