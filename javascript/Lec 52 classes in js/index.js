
// function Ofrandom(){
//     const random = ()=>{
//     console.log(this);
// }
// random()
// }

// Ofrandom()


function Product(name,price) {
    this.name = name
    this.price = price
    // console.log(this);
}
const p1 = Product("IPhone 23456789 Pro max ultra xtream glaxay new","12344566643")
const p2 = Product("samsung 23456789 Pro max ultra xtream glaxay new","12344566643")

// let user = {
//     name:"Ritesh"
// }
// user.phone = "9875456778"
// console.log(user);

class user{
    country = "india" //default property
    constructor(name , country){
        this.name = name //instance property
        this.country = country //instance propetry
    }

    printName(){//instance method
        console.log(this.name);
    }
}

const u1 = new user("Nishant","India")
const u2 = new user("Ritesh","India")

// console.log(u1);

class BankAccount{
    #balance; //private property
    static totalBankAccounts = 0 
    constructor(intialBalance){
        this.#balance = intialBalance;
        BankAccount.totalBankAccounts++;
    }
    get(){//method
        console.log(this.#balance);
    }
    withdraw(amount){//method
        if(amount>this.#balance){
            console.log("Account has not the sufficient amount to withdraw!!");
            return
        }
        this.#balance -= amount
    }
    deposit(amount){ //method
        if(amount<=0){
            console.log("your deposited account cannot not be less than or equal zero");
            return
        }
        this.#balance += amount;
    }
    static calculateTax(){
        console.log("calculating tax.......");
    }
}

let acc1 = new BankAccount(500)
let acc2 = new BankAccount(500)
let acc3 = new BankAccount(500)
let acc4 = new BankAccount(500)
acc1.get()
// acc1.withdraw(501)
// acc1.withdraw(500)
// acc1.get()
// acc1.deposit(500)
// acc1.get()

BankAccount.calculateTax
console.log(BankAccount.totalBankAccounts);
