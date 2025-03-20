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

    // UC2: Add Contact
    addContact(contact) {
        this.contacts.push(contact);
    }

    // 👉 UC3: Edit Existing Contact by Name
    editContact(name, updatedContact) {
        let index = this.contacts.findIndex(contact => contact.firstName === name);
        if (index !== -1) {
            this.contacts[index] = updatedContact;
            console.log(`✅ Contact updated successfully!`);
        } else {
            console.log(`❌ Contact not found!`);
        }
    }

    displayContacts() {
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

// ✅ Test Code
let addressBook = new AddressBook();
let contact1 = new Contact('John', 'Doe', '123 Street', 'CityA', 'StateA', '123456', '1234567890', 'john@example.com');
let contact2 = new Contact('Jane', 'Smith', '456 Lane', 'CityB', 'StateB', '654321', '0987654321', 'jane@example.com');

addressBook.addContact(contact1);
addressBook.addContact(contact2);

console.log("\n📌 All Contacts:");
addressBook.displayContacts();

let updatedContact = new Contact('John', 'Doe', '789 Avenue', 'CityC', 'StateC', '789123', '1112223333', 'john@newmail.com');
addressBook.editContact('John', updatedContact);

console.log("\n📌 Updated Contacts:");
addressBook.displayContacts();
