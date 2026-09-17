const percentage = 39;

if (percentage >= 0 && percentage < 100) {
    if (percentage >= 90) {
        console.log("Grade A");
    }
    else if (percentage >= 80) {
        console.log("Grade B");
    }
    else if (percentage >= 70) {
        console.log("Grade C");
    }
    else if (percentage >= 60) {
        console.log("Grade D");
    }
    else if (percentage >= 40) {
        console.log("Grade E");
    }
    else {
        console.log("Grade F");
    }
}
else {
    console.log("invalid percentage");
}