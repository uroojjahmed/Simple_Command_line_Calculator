#! /usr/bin/env node

import inquirer from "inquirer";

// Printing a Wellcome text
console.log("\n\tWellcome To \'CLI Simple Calculator\' -With Urooj Ahmed\n")

// Asking Questions to Users 

let answer = await inquirer.prompt([
    { message: "Enter your First Number: ", type: "number", name: "firstNumber" },
    { message: "Enter your Second Number: ", type: "number", name: "secondNumber" },
    {
        message: "Select one Operator to perform Operations: ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    }
]);
// Condtional Statements IfElse

if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtractions") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log(" invaild Input");
}