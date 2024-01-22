function sortByAlphabeticalOrder(array) {
    let catalogue = {};

    array.forEach(product => {
        let [name, price] = product.split(' : ');
        let initial = name[0];

        if (!catalogue[initial]) {
            catalogue[initial] = [];
        }

        catalogue[initial].push({ name, price: Number(price) });
    });

    for(let initial in catalogue) {
        catalogue[initial] = catalogue[initial].sort((a, b) => a.name.localeCompare(b.name));
    }

    let sortedInitials = Object.keys(catalogue).sort()

    for(let initial of sortedInitials) {
        console.log(initial);
        catalogue[initial].forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);
        })
    }
}

sortByAlphabeticalOrder(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);