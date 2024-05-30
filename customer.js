// first name
// last name
// gender
// age
// mobile number
export class Customer {
    static users = [];
    _fName;
    _lName;
    _gender;
    _age;
    _mobileNumber;
    _password;
    _balance;
    constructor(fName, lName, gender, age, mobileNumber, password, balance) {
        this._fName = fName;
        this._lName = lName;
        this._gender = gender;
        this._age = age;
        this._mobileNumber = mobileNumber;
        this._password = password;
        this._balance = balance;
        // Add the new user to the static users array
        Customer.users.push(this);
    }
    // initialDeposit: number;
    get fName() {
        return this._fName;
    }
    set fName(fName) {
        this._fName = fName;
    }
    get lName() {
        return this._lName;
    }
    set lName(lName) {
        this._lName = lName;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get mobileNumber() {
        return this._mobileNumber;
    }
    set mobileNumber(mobileNumber) {
        this._mobileNumber = mobileNumber;
    }
    get userName() {
        return `@${this.fName.toLowerCase()}${this.lName.toLowerCase()}`;
    }
    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        this._balance = amount;
    }
    accountBalance(amount, userName, password) {
        const index = Customer.userDetails().findIndex(user => user.userName === userName && user.password === password);
        const user = Customer.users[index];
        return user.balance = amount;
    }
    static userDetails() {
        return Customer.users.map(user => ({
            userName: user.userName,
            password: user.password,
            balance: user.balance
        }));
    }
}
// const newCustomer1 = new Customer('Ahsan', 'Ali', 'Male', 27, '03414856179', 'bmXSPd92', 100)
// const newCustomer2 = new Customer('Ahsan', 'Ali', 'Male', 27, '03414856179', 'bmXSPd92', 100)
