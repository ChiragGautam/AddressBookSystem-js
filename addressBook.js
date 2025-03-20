// ✅ UC1: Create Contact Class with Validation
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        // ✅ First Name and Last Name Validation
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(firstName)) throw "❌ Invalid First Name!";
        if (!nameRegex.test(lastName)) throw "❌ Invalid Last Name!";

        // ✅ Address, City, State Validation
        let addressRegex = /^[a-zA-Z0-9\s]{4,}$/;
        if (!addressRegex.test(address)) throw "❌ Invalid Address!";
        if (!addressRegex.test(city)) throw "❌ Invalid City!";
        if (!addressRegex.test(state)) throw "❌ Invalid State!";

        // ✅ Zip Code Validation
        let zipRegex = /^[0-9]{6}$/;
        if (!zipRegex.test(zip)) throw "❌ Invalid Zip Code!";

        // ✅ Phone Number Validation
        let phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phoneNumber)) throw "❌ Invalid Phone Number!";

        // ✅ Email Validation
        let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        if (!emailRegex.test(email)) throw "❌ Invalid Email!";

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // ✅ UC10: toString Method to Print Contact
    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state}, ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// ✅ UC2: Create Address Book Class
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // ✅ UC6: Prevent Duplicate Entry
    addContact(contact) {
        let isDuplicate = this.contacts.some(c => 
            c.firstName === contact.firstName && 
            c.lastName === contact.lastName
        );
        if (isDuplicate) {
            console.log(`❌ Duplicate Contact! Cannot add ${contact.firstName} ${contact.lastName}`);
        } else {
            this.contacts.push(contact);
            console.log(`✅ Contact added successfully!`);
        }
    }

    // ✅ UC3: Edit Existing Contact
    editContact(firstName, lastName, updatedContact) {
        let index = this.contacts.findIndex(contact => 
            contact.firstName === firstName && contact.lastName === lastName
        );
        if (index !== -1) {
            this.contacts[index] = updatedContact;
            console.log(`✅ Contact updated successfully!`);
        } else {
            console.log(`❌ Contact not found!`);
        }
    }

    // ✅ UC4: Delete Contact
    deleteContact(firstName, lastName) {
        let index = this.contacts.findIndex(contact => 
            contact.firstName === firstName && contact.lastName === lastName
        );
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`✅ Contact deleted successfully!`);
        } else {
            console.log(`❌ Contact not found!`);
        }
    }

    // ✅ UC5: Get Number of Contacts
    getContactCount() {
        let count = this.contacts.reduce((count) => count + 1, 0);
        console.log(`📌 Total Contacts: ${count}`);
        return count;
    }

    // ✅ UC7: Search Person by City or State
    searchByCity(city) {
        return this.contacts.filter(contact => contact.city === city);
    }

    searchByState(state) {
        return this.contacts.filter(contact => contact.state === state);
    }

    // ✅ UC8: View Persons by City or State
    viewByCity(city) {
        let contacts = this.searchByCity(city);
        console.log(`📍 Persons in City ${city}:`);
        contacts.forEach(contact => console.log(contact.toString()));
    }

    viewByState(state) {
        let contacts = this.searchByState(state);
        console.log(`📍 Persons in State ${state}:`);
        contacts.forEach(contact => console.log(contact.toString()));
    }

    // ✅ UC9: Count Persons by City or State
    countByCity(city) {
        let count = this.searchByCity(city).length;
        console.log(`📌 Total Persons in City ${city}: ${count}`);
        return count;
    }

    countByState(state) {
        let count = this.searchByState(state).length;
        console.log(`📌 Total Persons in State ${state}: ${count}`);
        return count;
    }

    // ✅ UC10: Sort Contacts by Name
    sortContactsByName() {
        this.contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
        console.log(`✅ Contacts sorted alphabetically by name!`);
        this.displayContacts();
    }

    // ✅ UC11: Sort Contacts by City, State or Zip
    sortContactsByCity() {
        this.contacts.sort((a, b) => a.city.localeCompare(b.city));
        console.log(`✅ Contacts sorted alphabetically by city!`);
        this.displayContacts();
    }

    sortContactsByState() {
        this.contacts.sort((a, b) => a.state.localeCompare(b.state));
        console.log(`✅ Contacts sorted alphabetically by state!`);
        this.displayContacts();
    }

    sortContactsByZip() {
        this.contacts.sort((a, b) => a.zip - b.zip);
        console.log(`✅ Contacts sorted by zip code!`);
        this.displayContacts();
    }

    // ✅ Display All Contacts
    displayContacts() {
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

// ✅ Test Code
let addressBook = new AddressBook();

let contact1 = new Contact('John', 'Doe', '123 Street', 'CityA', 'StateA', '123456', '1234567890', 'john@example.com');
let contact2 = new Contact('Jane', 'Smith', '456 Lane', 'CityB', 'StateB', '654321', '0987654321', 'jane@example.com');
let contact3 = new Contact('Jake', 'Paul', '789 Road', 'CityA', 'StateA', '123457', '1234567890', 'jake@example.com');

addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);

addressBook.getContactCount();
addressBook.sortContactsByName();
addressBook.sortContactsByCity();
addressBook.sortContactsByState();
addressBook.sortContactsByZip();

