class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if(quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        if(this.items.length >= this.capacity) {
            throw new Error('The inventory is already full.');
        }

        let findItem = this.items.find((item) => item.itemName === itemName);
        if (findItem) {
            findItem.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        if(quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }
        let findItemIndex = this.items.findIndex((item) => item.itemName === itemName);
        if (findItemIndex === -1) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        const item = this.items[findItemIndex];

        if(quantity > item.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        item.quantity -= quantity;

        if (item.quantity === 0) {
            this.items.splice(findItemIndex, 1);
            this.outOfStock.push(itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        if(quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        let findItem = this.items.find((item) => item.itemName === itemName);
        if(findItem) {
            findItem.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity })
        }

        let findItemIndexOutOfStock = this.outOfStock.indexOf(itemName);
        if (findItemIndexOutOfStock !== -1) {
            this.outOfStock.splice(findItemIndexOutOfStock, 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;

    }

    getInventorySummary() {
        let result = `Current Inventory:\n`;
        this.items.forEach((item) => {
            result += `${item.itemName}: ${item.quantity}\n`;
        })

        if (this.outOfStock.length !== 0) {
            const outOfStockItems = this.outOfStock.map(item => item).join(', ');
            result += `Out of Stock: ${outOfStockItems}\n`;
        }

        return result.trim();
    }
}

const manager = new InventoryManager(2);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Level", 3));


