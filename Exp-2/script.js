// Variable Declaration
let username = "";
let age = 0;

// Function to handle the button click
document.getElementById("submitBtn").addEventListener("click", function() {
    // Getting values from the input fields
    username = document.getElementById("name").value;
    age = parseInt(document.getElementById("age").value, 10);

    let message = "";


    switch (true) {
        case (age < 13):
            message += `Hi, ${username}! You are a minor.`;
            break;
        case (age >= 13 && age < 20):
            message += 'Hi, ${username}! You are a teenager.';
            break;
        case (age >= 20 && age < 60):
            message += `Hello, ${username}! You are an adult.`;
            break;
        case (age >= 60):
            message += 'Hello, ${username}! You are a senior citizen.';
            break;
        default:
            message += " Age is not valid.";
    }

    // Displaying the message
    document.getElementById("output").textContent = message;
});

// Handling keyboard input event
document.getElementById("name").addEventListener("keyup", function(event) {
    console.log("User typed: " + event.target.value);
});
