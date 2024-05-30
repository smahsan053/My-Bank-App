import chalk from "chalk";
export class BankAccount {
    static users;
    accountBalance;
    constructor(initialDeposit) {
        this.accountBalance = initialDeposit;
    }
    debit(amount) {
        // const index = BankAccount.users.findIndex(user => user.userName === userName && user.password === password)
        // const user = BankAccount.users[index]
        // const balance = user.balance
        if (amount > 0) {
            if (this.accountBalance > amount) {
                this.accountBalance = this.accountBalance - amount;
                console.log(chalk.green(`Transaction successful! New account balance is ${this.accountBalance}`));
                // console.log(`Transaction successful! New account balance is ${balance}`);
            }
            else {
                console.log(chalk.red(`You don't have enough money to do this transaction`));
            }
        }
        else {
            console.log(chalk.red(`The amount you entered is wrong. Transaction Failed!`));
        }
    }
    credit(amount) {
        if (amount > 0) {
            this.accountBalance = amount > 100 ? (Number(this.accountBalance) + Number(amount) - 1) : (Number(this.accountBalance) + Number(amount));
            console.log(chalk.green(`Transaction successful! New account balance is ${this.accountBalance}`));
        }
        else {
            console.log(chalk.red(`The amount you entered is wrong. Transaction Failed!`));
        }
    }
}
