# MyBank CLI Application

MyBank is a command-line interface (CLI) application that allows users to create a bank account, log in to an existing account, and perform transactions such as debits and credits.

## Features

- **Create New Account**: Users can create a new bank account by providing personal details and an initial deposit.
- **Log In**: Users can log in to their existing bank account using their username and password.
- **Transactions**: Users can perform debit and credit transactions on their account.
- **Balance Check**: Users can check their current account balance.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install) package manager

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/mybank-cli.git
   cd mybank-cli
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Make the script executable:
   ```sh
   chmod +x ./index.js
   ```

## Usage

To start the MyBank application, run the following command:

```sh
./index.js

Workflow Overview
Initialize Application: The application starts by prompting the user to either create a new account or log in to an existing account.
Create New Account: If the user chooses to create a new account, they will be asked to provide personal details such as first name, last name, gender, age, mobile number, password, and initial deposit.
Log In: If the user chooses to log in, they will be prompted to enter their username and password.
Transactions: After logging in, the user can choose to perform debit or credit transactions:
Debit: The user can withdraw money from their account.
Credit: The user can deposit money into their account.
Continue or Exit: After each transaction, the user can choose to continue with more transactions or exit the application.
Example

./index.js

# Output:
# ? Select an option: (Use arrow keys)
# ❯ Create New Account
#   Log Existing Account

# Creating a New Account:
# Please provide below details to create your new account
# What is your first name:
# ...

# Logging into an Existing Account:
# Please enter below details to log into your account
# Username:
# Password:
# ...

# Performing Transactions:
# Please select below options to proceed further
# ❯ Debit
#   Credit
# ...
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. Contributions are welcome!

```
