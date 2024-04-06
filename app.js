#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.underline.yellowBright `\t'WELL COME TO Currency Converter'\t\n`);
const currency = {
    USD: 1,
    EUR: 0.92329,
    GBP: 0.79192,
    AED: 3.673,
    INR: 83.3521,
    PKR: 278.588,
};
let currencyConverter = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.bold.italic.green("Enter From Currency: "),
        choices: ["USD", "EUR", "GBP", "AED", "INR", "PKR"],
    },
    {
        name: "to",
        type: "list",
        message: chalk.bold.italic.green("Enter To Currency: "),
        choices: ["USD", "EUR", "GBP", "AED", "INR", "PKR"],
    },
    {
        name: "amount",
        type: "number",
        message: chalk.bold.italic.gray("Enter Your Amount"),
    },
]);
let from_amount = currency[currencyConverter.from];
let to_amount = currency[currencyConverter.to];
let recevied_amount = currencyConverter.amount;
let base_currency = recevied_amount / from_amount;
let convert_currency = base_currency * to_amount;
console.log(chalk.bold.redBright(Math.fround(convert_currency).toFixed(2)));
