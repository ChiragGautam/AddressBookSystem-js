class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state}, ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // UC6: Prevent Duplicate Entry
    addContact(contact) {
        let isDuplicate = this.contacts.filter(c => c.firstName === contact.firstName && c.lastName === contact.lastName).length > 0;
        if (isDuplicate) {
            console.log(`❌ Duplicate Contact! Cannot add ${contact.firstName} ${contact.lastName}`);
        } else {
            this.contacts.push(contact);
            console.log(`✅ Contact added successfully!`);
        }
    }

    // UC10: Sort Contacts by Name
    sortContactsByName() {
        this.contacts.sort((a, b) => {
            let nameA = a.firstName.toLowerCase();
            let nameB = b.firstName.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
        console.log(`✅ Contacts sorted alphabetically by name!`);
        this.displayContacts();
    }

    // 👉 **UC11: Sort by City, State, or Zip**
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

console.log("\n📌 All Contacts:");
addressBook.displayContacts();

console.log("\n🔎 Sorting contacts by City:");
addressBook.sortContactsByCity();

console.log("\n🔎 Sorting contacts by State:");
addressBook.sortContactsByState();

console.log("\n🔎 Sorting contacts by Zip:");
addressBook.sortContactsByZip();
