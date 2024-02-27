function attachEvents() {
    const btnLoad = document.getElementById('btnLoadPosts');
    const viewPostBtn = document.getElementById('btnViewPost');
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
    const postsSelect = document.getElementById('posts');
    const postTitleRef = document.getElementById('post-title');
    const postBodyRef = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    btnLoad.addEventListener('click', onGet);
    viewPostBtn.addEventListener('click', onView);
    async function onGet(ev) {
        try {
            const response = await fetch(postsUrl);
            if(!response.ok) {
                return;
            }
            const postsData = await response.json();
            postsSelect.innerHTML = '';
            let values = Object.values(postsData);
            console.log(values);
            Object.values(postsData).forEach(post => {
                postsSelect.innerHTML += createOptionElement(post)
            })
        } catch(error) {

        }
    }

    async function onView(ev) {
        const postId = document.getElementById('posts').value;
        try {
            let idUrl = postsUrl + '/' + postId;
            const response = await fetch(idUrl)
            const postData = await response.json();
            const responseComments = await fetch(commentsUrl);
            const dataComments = await responseComments.json();
            const filteredComments = Object.values(dataComments).filter(x => x.postId == postId);

            postTitleRef.textContent = postData.title;
            postBodyRef.textContent = postData.body;
            postComments.innerHTML = '';
            filteredComments.forEach(x => {
                const li = document.createElement('li');
                li.id = x.id;
                li.textContent = x.text;
                postComments.appendChild(li);
            })
        } catch(error) {

        }
    }

    function createOptionElement(posts){
        return `<option value=${posts.id}>${posts.title}</option>`;
    }
}

attachEvents();