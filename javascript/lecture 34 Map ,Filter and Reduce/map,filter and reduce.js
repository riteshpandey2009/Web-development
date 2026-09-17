// let originalPrices = [463, 654, 2346]

// let discountedPrices = []

// for(value of originalPrices){
//     discountedPrices.push(value * 0.9)
// }
// console.log(originalPrices);
// console.log(discountedPrices);

// originalPrices.forEach ((value)=>{
//     discountedPrices.push(value * 0.9)
// })
// console.log(originalPrices);
// console.log(discountedPrices);

// const discountedPrices2 = originalPrices.map((value )=>{
//     return value*0.9;
// })
// console.log(discountedPrices2);
// let students = [
// {
//     name: "Ritesh",
//     marks : 56,
// },
// {
//     name: "Mansi",
//     marks : 46,
// },
// {
//     name: "didor",
//     marks : 50,
// },
// {
//     name: "shivam",
//     marks : 59,
// },

// ]


// const studentNames=students.map((student)=>{
//     return student.name
// })

// const studentMarks=students.map((student)=> student.marks)

// console.log(studentNames);
// console.log(studentMarks);
// const boostMarks = students.map((student)=>{
//     return {...student,marks:student.marks +10}
// // })

// const boostMarks = students.map((student)=> ({...student,marks:student.marks +10}))
// console.log(boostMarks);
let students = [
    {
        name: "Ritesh",
        marks: 56,
    },
    {
        name: "Mansi",
        marks: 16,
    },
    {
        name: "didor",
        marks: 30,
    },
    {
        name: "shivam",
        marks: 59,
    },
]
console.log(students);
// let failedStudents =[]
// students.forEach((student)=>{
//     if(student.marks < 33){
//         failedStudents.push(student)
//     }
// })

// const failedStudents  = students.filter((student) => student.marks < 33).map((student) => student.marks)
// console.log(failedStudents);

let marks = [56, 24, 35, 67, 90, 73]

// let totalMarks = 0
// marks.forEach((mark) => totalMarks += mark)
// console.log(totalMarks);

// const totalMarks = marks.reduce((accumulator, currentValue) => accumulator + currentValue,0)
const totalMarks = students.reduce((accumulator, student) => accumulator + student.marks,0)

console.log("byReduce",totalMarks);