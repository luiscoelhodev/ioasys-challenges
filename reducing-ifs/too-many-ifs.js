const userToBeChecked = {
    name: "Luis Coelho",
    age: 28,
    nationality: "Brazilian", 
    state: "Rio de Janeiro",
    city: "Campos",
    course: "ioasysCamp"
}

const checkRegisteredUser = (user) => {
    if (user.name === "Luis Coelho") {
        if (user.age === 28) {
            if (user.nationality === "Brazilian") {
                if (user.state === "Rio de Janeiro") {
                    if (user.city === "Campos") {
                        if (user.course === "ioasysCamp"){
                            console.log("Registered.");
                        } else console.log("Not registered.");
                    } else console.log("Not registered.");
                } else console.log("Not registered.");
            } else console.log("Not registered.");
        } else console.log("Not registered.");
    } else console.log("Not registered.");
}

checkRegisteredUser(userToBeChecked);