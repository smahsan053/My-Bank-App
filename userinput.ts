import chalk from "chalk";
import inquirer from "inquirer";

const initialize = async () => {
    const input = await inquirer.prompt([{
        type: 'list',
        name: 'init',
        message: chalk.blue('Choose option below to continue'),
        choices: ['Create New Account', 'Log Existing Account', 'Exit']
    }])
    return input.init
}

const openAccount = async () => {
    const input = await inquirer.prompt(
        [
            {
                type: 'input',
                name: 'fName',
                message: chalk.blue('Enter your first name'),
                validate: (input: string) => {
                    const regEx = /^[a-zA-Z]+$/g
                    const isValid = regEx.test(input)
                    return isValid ? true : chalk.red('Please Enter a valid name (letters only).')
                }
            },
            {
                type: 'input',
                name: 'lName',
                message: chalk.blue('Enter your last name'),
                validate: (input: string) => {
                    const regEx = /^[a-zA-Z]+$/g
                    const isValid = regEx.test(input)
                    return isValid ? true : chalk.red('Please Enter a valid name (letters only).')
                }
            },
            {
                type: 'list',
                name: 'gender',
                message: chalk.blue('Select your gender'),
                choices: ['Male', 'Female']
            },
            {
                type: 'input',
                name: 'age',
                message: chalk.blue('Enter your age'),
                validate: (input: string) => {
                    const regEx = /^[0-9]+$/g
                    const isValid = regEx.test(input)
                    if (isValid) {
                        const age = parseInt(input, 10)
                        if (age >= 1 && age <= 120) {
                            return true
                        }
                        return chalk.red('Please enter a realistic age between 1 and 120.');

                    } else {
                        return chalk.red('Please enter a valid age (numbers only).');
                    }
                }
            },
            {
                type: 'input',
                name: 'mobileNumber',
                message: chalk.blue('Enter your mobile number'),
                validate: (input: string) => {
                    const regEx = /^(\+92|0092|92)?-?(03\d{2}|3\d{2})-?\d{7}$/g
                    const isValid = regEx.test(input)
                    return isValid ? true : chalk.red(`Please Enter a valid number. Should must match with either of these formats.
                    \n1. 0092-3XZ-YYYYYYY
                    \n2. +92-3XZ-YYYYYYY
                    \n3. 00923XZYYYYYYY
                    \n4. +923XZYYYYYYY
                    \n5. 03XZ-YYYYYYY
                    \n6. 03XZYYYYYYY`)
                }
            },
            {
                type: 'input',
                name: 'password',
                message: chalk.blue('Enter your password'),
                validate: (input: string) => {
                    const regEx = /^(?=.*[0-9])[a-zA-Z][a-zA-Z0-9]{7,}$/g
                    const isValid = regEx.test(input)
                    return isValid ? true : chalk.red(`Please Enter a valid password that matches the criteria as below.
                    \n1. Start with a letter.
                    \n2. Contain at least one number.
                    \n3. Not contain any spaces or special characters.
                    \n4. Be at least 8 characters long.`)
                }
            },
            {
                type: 'input',
                name: 'initialDeposit',
                message: chalk.blue('Deposit amount as initial balance, Minimum $100 is required.'),
                validate: (input: string) => {
                    const amount = parseInt(input, 10);
                    return amount >= 100 ? true : chalk.red('Please enter a valid amount greater than or equal to $100.');
                }
            }
        ]
    )
    return [input.fName, input.lName, input.gender, input.age, input.mobileNumber, input.password, input.initialDeposit]
}

const logAccount = async () => {
    const input = await inquirer.prompt(
        [
            {
                type: 'input',
                name: 'userName',
                message: chalk.blue('Enter your username')
            },
            {
                type: 'input',
                name: 'password',
                message: chalk.blue('Enter your password')
            }
        ]
    )
    return [input.userName, input.password]
}

const login = async () => {
    const input = await inquirer.prompt(
        [
            {
                type: 'list',
                name: 'login',
                message: chalk.blue('Would you like to log into your account or go back'),
                choices: ['login', 'back']
            }
        ]
    )
    return input.login
}

const transaction = async () => {
    const input = await inquirer.prompt(
        [
            {
                type: 'list',
                name: 'transaction',
                message: chalk.blue('What would you like to do'),
                choices: ['Debit', 'Credit', 'logout']
            }
        ]
    )
    return input.transaction
}

const debit = async () => {
    const input = await inquirer.prompt(
        [
            {
                type: 'number',
                name: 'debit',
                message: chalk.blue('Enter amount to debit from your account'),
                validate: (input: string) => {
                    const amount = parseInt(input, 10);
                    return amount >= 1 ? true : chalk.red('Please enter a valid amount greater $1.');
                }
            }
        ]
    )
    return input.debit
}

const credit = async () => {
    const input = await inquirer.prompt(
        [
            {
                type: 'number',
                name: 'credit',
                message: chalk.blue('Enter amount to credit to your account'),
                validate: (input: string) => {
                    const amount = parseInt(input, 10);
                    return amount >= 1 ? true : chalk.red('Please enter a valid amount greater $1.');
                }
            }
        ]
    )
    return input.credit
}

const continueApp = async () => {
    const input = await inquirer.prompt(
        [
            {
                type: 'list',
                name: 'continue',
                message: chalk.blue('Would you like to continue using your account or exit application'),
                choices: ['continue', 'exit']
            }
        ]
    )
    return input.continue
}

export { initialize, openAccount, logAccount, login, transaction, debit, credit, continueApp }

