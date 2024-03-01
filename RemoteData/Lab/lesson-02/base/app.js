async function getRecipes() {
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/recipes');
    const recipes = await response.json();

    return Object.values(recipes);
}

async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/details/' + id);
    const recipe = await response.json();

    return recipe;
}

function createRecipePreview(data) {
    let articleElement = document.createElement('article');
    articleElement.className = 'preview';
    let divTitle = document.createElement('div');
    divTitle.className = 'title';
    let h2 = document.createElement('h2')
    h2.textContent = data.name;
    divTitle.appendChild(h2);
    let smallDiv = document.createElement('div');
    smallDiv.className = 'small';
    let imgElement = document.createElement('img');
    imgElement.src = data.img;
    smallDiv.appendChild(imgElement);
    articleElement.appendChild(divTitle);
    articleElement.appendChild(smallDiv);

    articleElement.addEventListener('click', toggleCard);

    return articleElement;

    async function toggleCard() {
        const fullRecipe = await getRecipeById(data._id)
        articleElement.replaceWith(createRecipeCard(fullRecipe));
    }
}

function createRecipeCard(recipe) {
    console.log(recipe.ingredients);
    debugger
    let articleElement = document.createElement('article');
    let bandDiv = document.createElement('div');
    bandDiv.className = 'band';
    let thumbDiv = document.createElement('div');
    thumbDiv.className = 'thumb';
    let imgElement = document.createElement("img");
    imgElement.src = recipe.img;
    thumbDiv.appendChild(imgElement);
    let ingradientsDiv = document.createElement("div");
    ingradientsDiv.className = 'ingredients';
    let h3Element = document.createElement('h3');
    h3Element.textContent = 'Ingredients:';
    let ulElement = document.createElement('ul');
    recipe.ingredients.forEach(ingradient => {
        const li = document.createElement("li");
        li.textContent = ingradient;
        ulElement.appendChild(li);
    })
    ingradientsDiv.appendChild(h3Element);
    ingradientsDiv.appendChild(ulElement);
    bandDiv.appendChild(thumbDiv);
    bandDiv.appendChild(ingradientsDiv);
    articleElement.appendChild(bandDiv);

    let descriptionDiv = document.createElement("div");
    descriptionDiv.className = 'description';
    let h3 = document.createElement('h3');
    h3.textContent = 'Preparation:';
    descriptionDiv.appendChild(h3);

    recipe.steps.forEach(step => {
        const p = document.createElement('p');
        p.textContent = step;
        descriptionDiv.appendChild(p)
    })

    articleElement.appendChild(descriptionDiv)

    return articleElement;
}

window.addEventListener('load', async () => {
    const main = document.querySelector('main');

    const recipes = await getRecipes();
    const cards = recipes.map(createRecipePreview);

    main.innerHTML = '';
    cards.forEach(c => main.appendChild(c));
});