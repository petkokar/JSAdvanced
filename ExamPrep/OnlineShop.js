class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    if (spaceRequired > this.warehouseSpace) {
      throw new Error("Not enough space in the warehouse.");
    }

    this.warehouseSpace -= spaceRequired;
    this.products.push({ product, quantity });
    return `The ${product} has been successfully delivered in the warehouse.`;
  }

  quantityCheck(product, minimalQuantity) {
    let foundProduct = this.products.find((item) => item.product == product);

    if (!foundProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }

    if (minimalQuantity <= 0) {
      throw new Error("The quantity cannot be zero or negative");
    }

    if (minimalQuantity <= foundProduct.quantity) {
      return `You have enough from product ${product}.`;
    } else {
      let diff = minimalQuantity - foundProduct.quantity;
      foundProduct.quantity = minimalQuantity;
      return `You added ${diff} more from the ${foundProduct.product} products.`;
    }
  }

  sellProduct(product) {
    let foundProduct = this.products.find((item) => item.product === product);
    if (!foundProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    foundProduct.quantity-= 1;
    let quantity = product.quantity;
    this.sales.push({ product, quantity });

    return `The ${foundProduct.product} has been successfully sold.`;
  }

  revision() {
    if (this.sales.length === 0) {
      throw new Error("There are no sales today!");
    }
    const salesCount = this.sales.length;
    let warehouseInfo = "Products in the warehouse:\n";
    this.products.forEach((item) => {
      warehouseInfo += `${item.product}-${item.quantity} more left\n`;
    });

    return `You sold ${salesCount} products today!\n${warehouseInfo}`;
  }
}

const myOnlineShop = new OnlineShop(500);

console.log(myOnlineShop.loadingStore("headphones", 10, 200));

console.log(myOnlineShop.loadingStore("laptop", 5, 200));

console.log(myOnlineShop.quantityCheck("headphones", 10));

console.log(myOnlineShop.quantityCheck("laptop", 10));

console.log(myOnlineShop.sellProduct("headphones"));

console.log(myOnlineShop.sellProduct("laptop"));

console.log(myOnlineShop.revision());
