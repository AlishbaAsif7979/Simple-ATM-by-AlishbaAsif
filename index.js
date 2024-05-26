import inquirer from "inquirer";
//Initialize user balance and pin code
let myBalance = 500000;
let myPin = 7090;
//Print welcome message
console.log("Welcome to Code with Alishba - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code: "
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is Correct, Login Successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["WithDraw Amount", "Check balance"]
        }
    ]);
    if (operationAns.operation === "WithDraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withDraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} WithDraw Sucessfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`Your Current Balance is: ${myBalance}`);
    }
}
else {
    console.log("Your Pin Is Incorrect, Try Again!");
}
