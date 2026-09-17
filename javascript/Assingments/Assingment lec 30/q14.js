const marks1 = 91;
const marks2 = 42;
const marks3 = 43;

if (marks1 > 40 && marks2 > 40 && marks3 > 40) {
    let avg = (marks1 + marks2 + marks3) / 3
    if (avg >= 75) {
        console.log("distinction");
    }
    else if (avg >= 60) {
        console.log("First Division");
    }
    else if (avg >= 50) {
        console.log("Second division");
    }
    else {
        console.log("pass");
    }
}
else {
    console.log("fail");
}