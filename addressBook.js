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

    // 👉 UC6: Prevent Duplicate Entry
    addContact(contact) {
        let isDuplicate = this.contacts.filter(c => c.firstName === contact.firstName && c.lastName === contact.lastName).length > 0;
        if (isDuplicate) {
            console.log(`❌ Duplicate Contact! Cannot add ${contact.firstName} ${contact.lastName}`);
        } else {
            this.contacts.push(contact);
            console.log(`✅ Contact added successfully!`);
        }
    }

    // UC3: Edit Contact by Name
    editContact(name, updatedContact) {
        let index = this.contacts.findIndex(contact => contact.firstName === name);
        if (index !== -1) {
            this.contacts[index] = updatedContact;
            console.log(`✅ Contact updated successfully!`);
        } else {
            console.log(`❌ Contact not found!`);
        }
    }

    // UC4: Delete Contact by Name
    deleteContact(name) {
        let index = this.contacts.findIndex(contact => contact.firstName === name);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`✅ Contact deleted successfully!`);
        } else {
            console.log(`❌ Contact not found!`);
        }
    }

    // UC5: Get Total Number of Contacts
    getContactCount() {
        let totalCount = this.contacts.reduce((count) => count + 1, 0);
        console.log(`📌 Total Number of Contacts: ${totalCount}`);
        return totalCount;
    }

    displayContacts() {
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

// ✅ Test Code
let addressBook = new AddressBook();
let contact1 = new Contact('John', 'Doe', '123 Street', 'CityA', 'StateA', '123456', '1234567890', 'john@example.com');
let contact2 = new Contact('Jane', 'Smith', '456 Lane', 'CityB', 'StateB', '654321', '0987654321', 'jane@example.com');
let contact3 = new Contact('John', 'Doe', '123 Street', 'CityA', 'StateA', '123456', '1234567890', 'john@example.com'); // Duplicate

addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3); // ✅ Duplicate entry error milega

console.log("\n📌 All Contacts:");
addressBook.displayContacts();

addressBook.getContactCount(); // ✅ Total contacts count show karega
