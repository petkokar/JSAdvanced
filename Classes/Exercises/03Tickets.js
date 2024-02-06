function databaseManage(array, sortCriteria) {
    let arr = [];
    class Ticket {
        destination;
        price;
        status;

        constructor(destination, price, status) {
            this.destination = destination
            this.price = price
            this.status = status
        }
    }

    for (let ticket of array) {
        let [destination, price, status] = ticket.split("|"); 
        price = Number(price);
        arr.push(new Ticket(destination, price, status));
    }

    function compareTickets(a, b) {
        switch(sortCriteria) {
            case 'destination':
                return a.destination.localeCompare(b.destination) || arr.indexOf(a) - arr.indexOf(b);
            case 'price':
                return a - b || arr.indexOf(a) - arr.indexOf(b);
            case 'status':
                return a.status.localeCompare(b.status) || arr.indexOf(a) - arr.indexOf(b);
            default:
                return 0;
        }
    }

    arr.sort(compareTickets);
    return arr;
} 

console.log(databaseManage(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination'));