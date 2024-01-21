function lowestPrice(input) {

    let productLowestPrice = {};

    for (let product of input) {
        let [townName, productName, productPrice] = product.split(' | ');
        productPrice = Number(productPrice);

        // if (!productLowestPrice.hasOwnProperty(productName)) {
        //     productLowestPrice[productName] = {
        //         productPrice,
        //         townName
        //     }
        // } else if (productLowestPrice.hasOwnProperty(productName)) {
        //     if (productPrice < productLowestPrice[productName].productPrice) {
        //         productLowestPrice[productName].productPrice = productPrice;
        //         productLowestPrice[productName].townName = townName;
        //     }
        // }

        if (!productLowestPrice[productName] || productPrice < productLowestPrice[productName].productPrice) {
            productLowestPrice[productName] = { productPrice, townName}
        }
    }

    for(let line in productLowestPrice) {
        console.log(`${line} -> ${productLowestPrice[line].productPrice} (${productLowestPrice[line].townName})`);
    }
}

lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])