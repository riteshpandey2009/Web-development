let numUnits = 250;
let bill = 1;
if(numUnits >= 0 && numUnits <= 100){
    bill =numUnits * 5;
}
else if(numUnits <= 200){
    bill = numUnits * 7;
}
else if(numUnits > 200){
    bill = numUnits * 10;
}
console.log("final bill" , bill);
