// Arthmatic operator

// let num1 = 4;
// let num2 = 2;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 ** num2);
// console.log(num1 % num2);

// let num = 45 ;
// console.log(--num);
// console.log(num--);
// console.log(num);

// let num = 2;
// num += 5;
// console.log(num);
// num -= 5;
// console.log(num);
// num *= 5;
// console.log(num);
// num /= 5;
// console.log(num);
// num %= 5;
// console.log(num);
// num **= 5;
// console.log(num);

// const num1 = 3;
// const num2 = 6;

// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);
// console.log(num1 == num2);
// console.log(num1 != num2);

// loose equality
// console.log("5" == 5);

//strict equalaity
// console.log("5" === 5);

// console.log(true && false);
// console.log(true || false);

// const age = 17;
// const hasID = true;

// const canEnterClub= age >= 18 && hasID == true;
// console.log(canEnterClub);

// console.log("ritesh" / 60);
// console.log(typeof NaN)

// const isLoggedIn = false;

// if(isLoggedIn) {
//     console.log("like comment share");
// } else {
//     console.log("please fist login");
// }


// let temp = 40;

// if(temp >= 30){
//     console.log("Ac chlao");
// } else{
//     console.log("Ac mat chlao");
// }

// let day = "fri";

// if (day == "mon") {
//     console.log("1st day of week");
// } else if (day == "tues") {
//     console.log("2nd day of week");
// } else if (day == "wed") {
//     console.log("3nd day of week");
// } else if (day == "thrus") {
//     console.log("4nd day of week");
// } else if (day == "fri") {
//     console.log("5nd day of week");
// } else if (day == "sat") {
//     console.log("6nd day of week");
// } else if (day == "sun") {
//     console.log("7nd day of week");
// } else {
//     console.log("wrong day");
// }

// nested if else jio hotstar

// const isLoggedIn = false;
// const isSubscribed = true;

// if (isLoggedIn) {
//     if (isSubscribed) {
//         console.log("You can access premium content");
//     } else {
//         console.log("you do not have any prenium plan to access this content");
//     }
// } else {
//     console.log("please login");
// }

//switch case
const day = "fri";
switch (day){
    case "mon":
        console.log("1st day of week");
        break;
    case "tue":
        console.log("2nd day of week");
        break;
    case "wed":
        console.log("3rd day of week");
        break;
    case "thu":
        console.log("4th day of week");
        break;
    case "fri":
        console.log("5th day of week");
        break;
    case "sat":
        console.log("6th day of week");
        break;
    case "sun":
        console.log("7th day of week");
        break;
    default:
        console.log("wrong day");

}
