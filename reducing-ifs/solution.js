// This is the solution which reduced the amount of 'if' statements used in the 'too-many-ifs.js file

const validation = require('./validation')

const registeredUser = { // This is the user who is registered in the DB.
    Name: "Luis Coelho",
    Age: 28,
    Nationality: "Brazilian", 
    State: "Rio",
    City: "Campos",
    Course: "ioasysCamp"
}

const userToBeChecked = { // This is an example of a user search which will be a match
    Name: "Luis Coelho",
    Age: 28,
    Nationality: "Brazilian", 
    State: "Rio",
    City: "Campos",
    Course: "ioasysCamp"
}

const userToBeChecked2 = { // This is an example of a user search with empty fields
    Name: "Luis Coelho",
    Age: 28,
    Nationality: "", 
    State: "Rio",
    City: "",
    Course: "ioasysCamp"
}

const userToBeChecked3 = { // This is an example of a user which will not be found
    Name: "Street Fighter",
    Age: 35,
    Nationality: "American", 
    State: "California",
    City: "Los Angeles",
    Course: "ioasysCamp"
}

let counter = 0;

const compareObjects = (object1, object2, callback) => { // Checks users and finds empty fields
    let lengthOfRegisteredUser = Object.keys(object1).length
    let lengthOfUserToBeChecked = Object.keys(object2).length
    callback(validation.isEmpty);
    const emptyFields = new Set();

    Object.keys(object1).forEach(key1 => {
        let value1 = object1[key1]
        Object.keys(object2).forEach(key2 => {
            let value2 = object2[key2]
            if (validation.isEmpty(value2) == true) {
                emptyFields.add(key2);
            }
            if (value1 === value2) {
                counter++
            }

        })
    })
    if (lengthOfRegisteredUser === lengthOfUserToBeChecked && lengthOfRegisteredUser === counter) {
        return console.log("This user is registered in the database!")
    }
    if (emptyFields.size > 0) {
        console.log("Some fields are empty: ")
        for (let [key] of emptyFields.entries()) {
            console.log(key)
        }
        return console.log("Please, fill out all the fields to check if user is registered in database! ")

    }

    return console.log("This user is NOT registered in the database!")
}

compareObjects(registeredUser, userToBeChecked, validation.isEmpty); // This user will be found
compareObjects(registeredUser, userToBeChecked2, validation.isEmpty); // This input is missing fields
compareObjects(registeredUser, userToBeChecked3, validation.isEmpty); // This user will not be found