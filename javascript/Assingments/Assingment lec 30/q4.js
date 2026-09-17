let prdPrice = 500;
let quantity = 10;

const totalBill = prdPrice * quantity;
console.log("Original Bill",totalBill);

const discountedAmt = (totalBill*10)/100;
console.log("Discounted Bill",discountedAmt);

const finalBill = totalBill - discountedAmt;
console.log("Final Bill",finalBill);
