class Ticket {
  constructor(guests) {
    this.guests = guests;
  }

  displayTicketDetails() {
    console.log("Ticket Details:");
    this.guests.forEach((guest, index) => {
      console.log(`Guest ${index + 1} (age: ${guest.age})`);
    });
  }
}

class ZooTicketingSystem {
  static calculatePrice(age) {
    if (age <= 2) {
      return 0;
    } else if (age > 2 && age < 18) {
      return 100;
    } else if (age >= 18 && age < 60) {
      return 500;
    } else {
      return 300;
    }
  }

  static issueTicket(numGuests) {
    let guests = [];
    for (let i = 0; i < numGuests; i++) {
      let age = parseInt(prompt(`Enter age of guest ${i + 1}:`));
      guests.push({ age: age });
    }

    let totalCharges = guests.reduce((total, guest) => {
      return total + this.calculatePrice(guest.age);
    }, 0);

    console.log(`Total charges: INR ${totalCharges}`);
    return new Ticket(guests);
  }
}

// Example usage
let numGuests = parseInt(prompt("Enter the number of guests:"));
let issuedTicket = ZooTicketingSystem.issueTicket(numGuests);
issuedTicket.displayTicketDetails();
