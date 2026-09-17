let n1 = 14;
let n2 = 4;
let n3 = 1;

if(n1 > n2 && n1 > n3){
    console.log("first is largest");
}
else if(n2 > n3 && n2 > n1){
    console.log("second is largest");
}
else if(n3 > n1 && n3 > n2){
    console.log("Third one is largest");
}
else{
    console.log("All are equal");
}