function juices(collection) {
    let juice = {};
    let mapJuices = new Map();

    for (let fruitArr of collection) {
        let [fruit, quantity] = fruitArr.split(' => ');
        quantity = Number(quantity);
        if (!juice.hasOwnProperty(fruit)) {
            juice[fruit] = {
                quantity
            }
        } else {
            juice[fruit].quantity += quantity;
        }


        if (juice[fruit].quantity >= 1000) {
            let bottles = 0;
            if (mapJuices.has(fruit)) {
                bottles = Math.floor(juice[fruit].quantity / 1000);
                mapJuices.set(fruit, mapJuices.get(fruit) + bottles);
            } else {
                bottles = Math.floor(juice[fruit].quantity / 1000)
                mapJuices.set(fruit, bottles);
            }
            juice[fruit].quantity %= 1000;
        }
    }
    for(let [fruit, quantity] of mapJuices) {
        console.log(`${fruit} => ${quantity}`);
    }
}

juices(['Orange => 2000',

'Peach => 1432',

'Banana => 450',

'Peach => 600',

'Strawberry => 549'])

juices(['Kiwi => 234',

'Pear => 2345',

'Watermelon => 3456',

'Kiwi => 4567',

'Pear => 5678',

'Watermelon => 6789'])