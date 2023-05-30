console.log("JS file connected");

//if statement
let temperature = 35;

if(temperature > 30) {
    console.log("It's a hot day");
}

//if else statement

let age = 16;

if(age < 19) {
    console.log("Sorry you cannot get into the bar");
} else {
    console.log("Come on in");
}

//if, else, if, else

let grade = 65;

if(grade >= 90) {
    console.log("A+");
} else if(grade >= 80) {
    console.log("A");
} else if(grade >= 70) {
    console.log("B");
} else if(grade >= 70) {
    console.log("FAIL");
}


//multiple if statements (Can all evaluate to true)

let scienceGrade = 90;

if (scienceGrade >= 90) {
    console.log("A");
}
if (scienceGrade >= 70) {
    console.log("B");
}