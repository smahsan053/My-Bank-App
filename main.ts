#! /usr/bin/env node

import { initialize, openAccount, logAccount, login, transaction, debit, credit, continueApp } from "./userinput.js";
import { Customer } from "./customer.js";
import { BankAccount } from "./bankAccount.js";
import chalk from "chalk";

const createNewAccount = async () => {
    console.log(chalk.yellow(`Please provide below details to create your new account`));
    const input = await openAccount()
    const [fName, lName, gender, age, mobileNumber, password, initialDeposit] = input
    // if (Number.parseInt(fName)) return
    const newCustomer = new Customer(fName, lName, gender, age, mobileNumber, password, initialDeposit)
    console.log(chalk.green(`\tCongratulation ${fName}, Your account has been created. \n\tYour username is: ${newCustomer.userName}. \n\tPlease remember your username to log again into your account`));
    console.log(chalk.blue(`Please select below option to proceed further`));
    const loginput = await login()
    if (loginput === 'login') {
        logExistingAccount(newCustomer)
    } else {
        const input = await initialize()
        loop(input, newCustomer)
    }
}

const logExistingAccount = async (newCustomer?: Customer) => {
    if (newCustomer === undefined) {
        console.log(chalk.red(`Customer does not exist`));
    } else {
        console.log(chalk.yellow(`Please enter below details to log into your account`));
        const input = await logAccount()
        const [userName, password] = input
        const userDetails = Customer.userDetails()
        const index = userDetails.findIndex(user => user.userName === userName && user.password === password);
        if (index !== -1) {
            // proceed for debit & credit
            const user = Customer.users[index]
            const balance = user.balance
            console.log(chalk.blue(`Please select below options to proceed further`));
            const bankAccount = new BankAccount(balance)
            accountLoop(bankAccount, balance, userName, password, newCustomer)
        } else {
            console.log(chalk.red("Incorrect username or password"));
        }
    }
}

const loop = async (input: string, newCustomer?: Customer) => {
    if (input === 'Create New Account') {
        createNewAccount()
    } else if (input === 'Log Existing Account') {
        logExistingAccount(newCustomer)
    } else {
        console.log(chalk.blue(`Exiting App...`));
    }
}

const accountLoop = async (bankAccount: BankAccount, balance: number, userName: string, password: string, newCustomer: Customer) => {
    const input = await transaction()
    if (input === 'Debit') {
        console.log(chalk.blue(`Your current balance is ${balance}`));
        const input = await debit()
        bankAccount.debit(input)
        balance = input < balance ? balance - input : balance
        // newCustomer.balance = balance
        newCustomer.accountBalance(balance, userName, password)
        const userinput = await continueApp()
        if (userinput === 'continue') {
            accountLoop(bankAccount, balance, userName, password, newCustomer)
        } else {
            console.log(chalk.green('\tThanks for using myBank App. \n\tExiting...'));
        }
    } else if (input === 'Credit') {
        console.log(chalk.blue(`Your current balance is ${balance}`));
        const input: number = await credit()
        bankAccount.credit(input)
        balance = input > 100 ? Number(balance) + Number(input) - 1 : Number(balance) + Number(input)
        // newCustomer.balance = balance
        newCustomer.accountBalance(balance, userName, password)
        const userinput = await continueApp()
        if (userinput === 'continue') {
            accountLoop(bankAccount, balance, userName, password, newCustomer)
        } else {
            console.log(chalk.green('\tThanks for using myBank App. \n\tExiting...'));
        }
    } else {
        const input = await initialize()
        loop(input, newCustomer)

    }
}

const initApp = async () => {
    const input = await initialize()
    loop(input)
}

initApp()
