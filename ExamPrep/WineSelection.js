class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if(this.wines.length >= this.space) {
            throw new Error('Not enough space in the cellar.')
        }

        this.wines.push( {wineName, wineType, price, paid: false })
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle(wineName, price) {
        let isWineFound = this.wines.find((wine) => wine.wineName === wineName);
        if (!isWineFound) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (this.wines.find((wine) => wine.paid === true)) {
            throw new Error(`${wineName} has already been paid.`);
        } else {
            isWineFound.price = price;
            isWineFound.paid = true;
            this.bill += price;

            return `You bought a ${wineName} for a ${price}$.`
        }
    }

    openBottle(wineName) {
        let isWineFound = this.wines.find((wine) => wine.wineName === wineName);
        if (!isWineFound) {
            throw new Error("The wine, you're looking for, is not found.")
        }

        if(isWineFound.paid == false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        } else {
            this.wines = this.wines.filter(wine => wine.wineName !== wineName);
            return `You drank a bottle of ${wineName}.`
        }
    }

    cellarRevision(wineType) {
        if(!wineType) {
            let output = [];
            let emptySlots = this.space - this.wines.length;
            output.push(`You have space for ${emptySlots} bottles more.`)
            // let bill = this.wines.reduce((total, wine) => total + wine.price, 0);
            output.push(`You paid ${this.bill}$ for the wine.`);
            let sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            sortedWines.forEach(wine => {
                output.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`)
            })

            return output.join('\n').trim();
        } else {
            let result = [];
            let winesOfType = this.wines.filter(wine => wine.wineType === wineType);
            if (winesOfType.length === 0) {
                throw new Error(`There is no ${wineType} in the cellar.`)
            } else {
                let sortedWines = winesOfType.sort((a, b) => a.wineName.localeCompare(b.wineName));
                sortedWines.forEach(wine => {
                    result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`);
                })
                return result.join('\n').trim();
            }
        }
    }
}

const selection = new WineSelection(5)

selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);

selection.payWineBottle('Bodegas Godelia Mencía', 144);

selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
 selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
  console.log(selection.cellarRevision());