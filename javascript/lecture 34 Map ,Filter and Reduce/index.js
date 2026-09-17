// let student ={
//     name :"Ritesh",
//     rollNo : 3,
//     subjects : ["math","english","hindi"]
// }

// let {subjects:vishay,totalMarks=300,...hello} = student

// let vishay = subjects
// console.log(totalMarks);

// let obj1 = {
//     name :"Ritesh",
//     phone : 7895478932,
// }

// let obj2 ={
//     address : "india",
//     aadharCard :534324467889,
//     name : "yashu"
// }

// let obj3 = {...obj1 , ...obj2}
// console.log(obj3);

//array and object update

// const arr =[1,2,3,4]

// arr[1] = "updated"

// console.log(arr);

// const obj ={
//     name:"kashi",
//     rollNo : 23,
//     address : null
// }
// console.log(obj);
// console.log(obj.address?.street);

let arr1 = [1, 2, 3, 4, 5, 6]

// arr1.splice(1,3)
// arr1.splice(3,0,"hello")
// arr1.splice(3,1,"hello")


// let arrSlice =arr1.slice(1 , 3)
// console.log(arrSlice);

// console.log(arr1.indexOf(4));

// let res = arr1.find((value) => {
//     return value  === "5";
// })

// console.log(res);

// let resIndex = arr1.findIndex((value) =>{
//     return value ===3
// })

// console.log(resIndex);

// let arr3 =[1 , 2, 3, 4, 5 ,[6 ,7 ,8],[9,19,23] ]

// console.log(arr3.flat(Infinity));

let arr4 = [4, 50, 66, 7, 89, 100, 424, 531]

let arrCopy2 = [...arr4];
arrCopy2.pop()
console.log("arr4",arr4);
console.log("arrCopy",arrCopy2);
