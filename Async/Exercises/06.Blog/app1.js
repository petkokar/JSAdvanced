const loadPostsBtn = document.getElementById('btnLoadPosts');
const postsSelect = document.getElementById('posts');
const viewPostBtn = document.getElementById('btnViewPost');
const postTitle = document.getElementById('post-title');
const ulRef = document.getElementById('post-comments');
const body = document.getElementById('post-body');

loadPostsBtn.addEventListener('click', loadPosts);
viewPostBtn.addEventListener("click", viewPost);

const url = 'http://localhost:3030/jsonstore/blog/posts/';
const commentsUrlrl = `http://localhost:3030/jsonstore/blog/comments/`;
async function loadPosts() {
    
    try {
        const response = await fetch(url);
        const data = await response.json();
    
        postsSelect.innerHTML = '';
        Object.values(data).forEach(post => {
            postsSelect.innerHTML += createOption(post);
        })
    } catch (error) {
        console.error('Failed to load posts.', error);
    }
}

async function viewPost() {
    const postId = postsSelect.value;

    try {
        const postData = fetch(url + postId);
        const commentsData = fetch(commentsUrlrl);
        
        const [postResponse, commentsResponse] = await Promise.all([postData, commentsData]);
        const post = await postResponse.json();
        const comments = await commentsResponse.json();

        const filteredComments = Object.values(comments).filter(comment => comment.postId === postId);

        postTitle.textContent = post.title;
        body.textContent = post.body;

        ulRef.innerHTML = filteredComments
            .map(comment => `<li id="${comment.id}">${comment.text}</li>`)
            .join('');
            
    } catch (error) {
        console.error('Failed to view post:', error);
    }
}

function createOption(data) {
    return `<option value="${data.id}">${data.title}</option>`;
}