class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight (flightNumber, destination, departureTime, price) {
        let isFlightFound = this.flights.find((flight) => flight.flightNumber === flightNumber);
        if(isFlightFound) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push( {flightNumber, destination, departureTime, price} );
        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight (passengerName, flightNumber) {
        let isFlightFound =this.flights.find((flight) => flight.flightNumber === flightNumber);
        if (!isFlightFound) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        this.bookings.push( {passengerName, flightNumber} );
        this.bookingsCount++;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking (passengerName, flightNumber) {
        let index = this.bookings.findIndex((booking) => booking.passengerName === passengerName && booking.flightNumber === flightNumber);
        if(index === -1) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }
        this.bookingsCount--;
        this.bookings.splice(index, 1);

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings (criteria) {
        if(this.bookings.length === 0) {
            throw new Error('No bookings have been made yet.');
        }
        switch(criteria) {
            case 'all':
                const allBookings = this.bookings.map(booking => {
                    return `${booking.passengerName} booked for flight ${booking.flightNumber}.`;
                  });
                  return [`All bookings(${this.bookingsCount}):`, ...allBookings].join('\n').trim();
            case 'cheap':
                let cheapBookings = this.bookings.filter(booking => {
                    let flight = this.flights.find(f => f.flightNumber === booking.flightNumber);
                    return flight.price <= 100;
                });
                if (cheapBookings.length === 0) {
                    return 'No cheap bookings found.';
                }
                const cheapBookingsInfo = cheapBookings.map(booking => {
                    return `${booking.passengerName} booked for flight ${booking.flightNumber}.`;
                  });
                  return ["Cheap bookings:", ...cheapBookingsInfo].join('\n').trim();
            case 'expensive':
                let expensiveBookings = this.bookings.filter(booking => {
                    let flight = this.flights.find(f => f.flightNumber === booking.flightNumber);
                    return flight.price > 100;
                });
                if(expensiveBookings.length === 0) {
                    return 'No expensive bookings found.';
                }
                const expensiveBookingsInfo = expensiveBookings.map(booking => {
                    return `${booking.passengerName} booked for flight ${booking.flightNumber}.`;
                  });
                  return ["Expensive bookings:", ...expensiveBookingsInfo].join('\n').trim();
            default:
                throw new Error('Invalid criteria.')
        }
    }
}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("all"));


