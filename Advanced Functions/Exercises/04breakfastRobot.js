function solution() {

    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        }
    }

    return function (data) {
        let [action, item, qty] = data.split(' ');

        switch(action) {
            case 'restock': return restock(item, qty);
            case 'prepare': return prepare(item, qty);
            case 'report': return report();
        }
    }

    function restock(item, qty) {
        store[item] += Number(qty);
        return "Success";
    }

    function prepare(item, qty) {
        let prepareRecipe = {};
        debugger
        for(let [key, value] of Object.entries(recipes[item])) {
            let neededIngradients = value * Number(qty);
            if (neededIngradients > store[key]) {
                return `Error: not enough ${key} in stock`;
            }

            prepareRecipe[key] = neededIngradients;
        }

        for(let [el, value] of Object.entries(prepareRecipe)) {
            store[el] -= value;
        }

        return "Success";
    }

    function report() {
        return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
    }
}

let manager = solution ();

console.log (manager ('restock carbohydrate 10')); 

console.log (manager ('restock flavour 10'));
console.log (manager ('prepare apple 1'));
console.log (manager ('restock fat 10'));
console.log (manager ('prepare burger 1'));
console.log (manager ('report'));