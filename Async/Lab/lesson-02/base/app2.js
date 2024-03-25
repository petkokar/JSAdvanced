window.addEventListener('load', async () => {
    const main = document.querySelector('main');

    const recipes = await getRecipes();
    const cards = recipes.map(createPreview);

    main.textContent = '';
    cards.forEach(c => main.appendChild(c));
});

async function getRecipes() {
    const getRecipesUrl = 'http://localhost:3030/jsonstore/cookbook/recipes';
    const response = await fetch(getRecipesUrl);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return Object.values(data);
}

async function getRecipeId(id) {
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/details/' + id);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const recipe = await response.json();

    return recipe;
}

function createPreview(data){
    const article = document.createElement('article');
    article.className = 'preview';
    const divTitle = document.createElement('div');
    divTitle.className = 'title';
    const h2Title = document.createElement("h2")
    h2Title.textContent = data.name;
    divTitle.appendChild(h2Title);
    const divSmall = document.createElement('div');
    divSmall.className = 'small';
    const img = document.createElement("img");
    img.src = data.img;
    divSmall.appendChild(img);
    article.appendChild(divTitle)
    article.appendChild(divSmall);

    article.dataset.id = data._id;

    article.addEventListener('click', () => toggleCard(article));

    
    return article;
}

async function toggleCard(article) {

    const isPreview = article.classList.contains('preview');
    const id = article.dataset.id;

    try {
        if(isPreview) {
            const recipeDetails = await getRecipeId(id);
            const detailedCard = createNewRecipeCard(recipeDetails);
            document.querySelector('main').replaceChild(detailedCard, article);
        } else {
            const recipe = await getRecipes().then(recipes => recipes.find(r => r._id === id));
            const previewCard = createPreview(recipe);
            document.querySelector('main').replaceChild(previewCard, article);
        }

    } catch(error) {
        console.error(error);
    }
}

function createNewRecipeCard(data) {

    const article = document.createElement('article');
    article.dataset.id = data._id;
    const h2 = document.createElement("h2");
    h2.textContent = data.name;
    article.appendChild(h2);
    const bandDiv = document.createElement('div');
    bandDiv.className = 'band';
    const thumbDiv = document.createElement('div');
    thumbDiv.className = 'thumb';
    const img = document.createElement('img');
    img.src = data.img;
    thumbDiv.appendChild(img);
    bandDiv.appendChild(thumbDiv);
    const ingredientsDiv = document.createElement('div');
    ingredientsDiv.className = 'ingredients';
    const h3 = document.createElement('h3');
    h3.textContent = 'Ingredients:';
    ingredientsDiv.appendChild(h3);
    const ul = document.createElement('ul');

    data.ingredients.forEach(ingradient => {
        const li = document.createElement("li");
        li.textContent = ingradient;
        ul.appendChild(li);
    })

    ingredientsDiv.appendChild(ul)
    bandDiv.appendChild(ingredientsDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'description';
    const h3Desc = document.createElement('h3');
    h3Desc.textContent = 'Preparation';
    descriptionDiv.appendChild(h3);

    data.steps.forEach(step => {
        const p = document.createElement('p');
        p.textContent = step;
        descriptionDiv.appendChild(p);
    })

    article.appendChild(bandDiv)
    article.appendChild(descriptionDiv);

    // article.classList.remove('preview');
    article.addEventListener('click', () => toggleCard(article))
    
    return article;
}