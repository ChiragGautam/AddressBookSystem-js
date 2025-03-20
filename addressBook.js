class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        // Regex patterns
        let namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        let addressPattern = /^[a-zA-Z0-9\s]{4,}$/;
        let zipPattern = /^[0-9]{5,6}$/;
        let phonePattern = /^[0-9]{10}$/;
        let emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

        // Validation using Regex
        if (!namePattern.test(firstName)) throw "Invalid First Name";
        if (!namePattern.test(lastName)) throw "Invalid Last Name";
        if (!addressPattern.test(address)) throw "Invalid Address";
        if (!addressPattern.test(city)) throw "Invalid City";
        if (!addressPattern.test(state)) throw "Invalid State";
        if (!zipPattern.test(zip)) throw "Invalid Zip Code";
        if (!phonePattern.test(phoneNumber)) throw "Invalid Phone Number";
        if (!emailPattern.test(email)) throw "Invalid Email";

        // Assigning values if validation is successful
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // toString() method for displaying the contact
    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, City: ${this.city}, State: ${this.state}, Zip: ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// Test Case
try {
    let contact = new Contact("Chirag", "Sharma", "GLA University", "Mathura", "UP", "281406", "9876543210", "chirag@gmail.com");
    console.log(contact.toString());
} catch (error) {
    console.error(error);
}
