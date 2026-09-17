// function totalMarks(studentName,mathMarks , scienceMarks , sanskritMarks) {
// console.log(`${studentName } totalMarks : `,mathMarks + scienceMarks + sanskritMarks);
// }
// totalMarks( "Alok " , 46 , 57 ,69); 
// totalMarks( "Ritesh " , 42 , 67 ,54); 
// totalMarks( "Karan " , 49 , 47 ,79); 
// totalMarks( "Nishant " , 43 , 53 ,99); 

function totalMarks(mathMarks, scienceMarks, sanskritMarks) {
    return mathMarks + scienceMarks + sanskritMarks;
}
function calPercentage(studentName, mathMarks, scienceMarks, sanskritMarks) {
    let total = totalMarks(mathMarks, scienceMarks, sanskritMarks);
    let percentage = (total / 300) * 100;
    console.log(`${studentName} percemtage : ${percentage}`);
    return percentage;
}

//after array class

let students = [
    ["Alok ", 46, 57, 69],
    ["Ritesh ", 42, 67, 54],
    ["Karan ", 49, 47, 79],
    ["Nishant ", 43, 53, 99]
]

for (i = 0 ;i < students.length ; i++){
    console.log(students[i][0],students[i][1],students[i][2],students[i][3],);
}
// function greet(userName){
//     console.log("Hello",`${userName}`);
// }

// greet("ritu");
// greet("preet");
// greet("alok");
// greet("karan");
// greet("ritesh");

// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
//             break;
//         case "-":
//             console.log(`${num1} ${operator} ${num2} =`, num1 - num2);

//     }
// }
// calculator(4, 5, "+");