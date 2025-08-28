// ==========================
// Part 1: Variables and Conditionals
// ==========================
document.getElementById("checkAgeBtn").addEventListener("click", function() {
    const age = parseInt(document.getElementById("ageInput").value);
    let message = "";

    if (isNaN(age)) {
        message = "Please enter a valid number!";
    } else if (age >= 18) {
        message = "You are an adult.";
    } else {
        message = "You are a minor.";
    }

    document.getElementById("ageResult").textContent = message;
});

// ==========================
// Part 2: Functions
// ==========================
// Function 1: Greet the user
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Function 2: Add two numbers
function addNumbers(a, b) {
    return a + b;
}

document.getElementById("greetBtn").addEventListener("click", function() {
    const greeting = greetUser("Student");
    document.getElementById("greeting").textContent = greeting;
});

// ==========================
// Part 3: Loops
// ==========================
// Loop Example 1: for loop
document.getElementById("showNumbersBtn").addEventListener("click", function() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        output += i + " ";
    }
    document.getElementById("numbers").textContent = output;
});

// Loop Example 2: forEach loop
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(fruit) {
    console.log("Fruit:", fruit);
});

// ==========================
// Part 4: DOM Manipulation
// ==========================
// 1. Change background color
document.getElementById("changeColorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// 2. Toggle text visibility
document.getElementById("toggleTextBtn").addEventListener("click", function() {
    const text = document.getElementById("toggleText");
    text.style.display = text.style.display === "none" ? "block" : "none";
});

// 3. Dynamic element creation
const newPara = document.createElement("p");
newPara.textContent = "This paragraph was added dynamically via JavaScript!";
document.body.appendChild(newPara);
