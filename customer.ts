// first name
// last name
// gender
// age
// mobile number

interface CustomerProtocol {
    fName: string,
    lName: string,
    gender: string,
    age: number,
    mobileNumber: string,
    userName: string,
    password: string,
    balance: number
    accountBalance(amount: number, userName: string, password: string): number
    // userDetails(): UserProtocol[]
}
interface UserProtocol {
    userName: string,
    password: string
    balance: number
}

export class Customer implements CustomerProtocol {
    public static users: Customer[] = [];

    private _fName: string;
    private _lName: string;
    private _gender: string;
    private _age: number;
    private _mobileNumber: string;
    private _password: string;
    private _balance: number;

    constructor(
        fName: string,
        lName: string,
        gender: string,
        age: number,
        mobileNumber: string,
        password: string,
        balance: number
    ) {
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
    set fName(fName: string) {
        this._fName = fName;
    }

    get lName() {
        return this._lName;
    }
    set lName(lName: string) {
        this._lName = lName;
    }

    get gender() {
        return this._gender;
    }
    set gender(gender: string) {
        this._gender = gender;
    }

    get age() {
        return this._age;
    }
    set age(age: number) {
        this._age = age;
    }

    get mobileNumber() {
        return this._mobileNumber;
    }
    set mobileNumber(mobileNumber: string) {
        this._mobileNumber = mobileNumber;
    }

    get userName() {
        return `@${this.fName.toLowerCase()}${this.lName.toLowerCase()}`;
    }

    get password() {
        return this._password;
    }
    set password(password: string) {
        this._password = password;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount: number) {
        this._balance = amount;
    }
    accountBalance(amount: number, userName: string, password: string): number {
        const index = Customer.userDetails().findIndex(user => user.userName === userName && user.password === password);
        const user = Customer.users[index]
        return user.balance = amount
    }
    static userDetails(): UserProtocol[] {
        return Customer.users.map(user => ({
            userName: user.userName,
            password: user.password,
            balance: user.balance
        }));
    }
}

// const newCustomer1 = new Customer('Ahsan', 'Ali', 'Male', 27, '03414856179', 'bmXSPd92', 100)
// const newCustomer2 = new Customer('Ahsan', 'Ali', 'Male', 27, '03414856179', 'bmXSPd92', 100)
