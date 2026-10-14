
class User{
    constructor(name , email){
        this.name = name;
        this.email = email;
    }
     login() {console.log("login"); }
    logout() {console.log("logout"); }
}


class Customer extends User {
    cart=[]
    constructor(name , email){
        super(name,email)
    }
    buyProduct() {console.log("buyProduct"); }
    addTocart(iteam) {this.cart.push(iteam)}
    showCart() {console.log("showCart"); }
   
}

class Seller extends User {
    addProduct() {console.log("addProduct"); }
    // login() { }
    // logout() { }
}

class Admin extends User {
    hideProduct() {console.log("Hide Products"); }
    // login() { }
    // logout() { }
}

class PremiumCustomer extends Customer {
    constructor(name , email , pass){
        super(name,email,pass)
    }
    getDiscount(){}
}

const c1 = new Customer("Ritesh","ritesh@example.com")
const c2 = new Customer("Nishant","nishant@example.com")

const pc1 = new PremiumCustomer("asda","sasas")
console.log(pc1);