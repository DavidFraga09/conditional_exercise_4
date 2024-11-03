// Excercises 4 
/* 1.- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback: 'You are old enough to drive' 
but if not 18 give another feedback stating to wait for the number of years, he needs to turn 18. 
Enter your age: 30 
You are old enough to drive. 
Enter your age:15 
You are left with 3 years to drive. */
let age = prompt("Enter your age: ")
if (age >= 18) {
    console.log("You are old enough to drive")
} else {
    let ageDrive = 18 - age
    console.log(`You are left with ${ageDrive} years to drive`)
}

/* 2.- Compare the values of myAge and yourAge using if … else. 
Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. 
Enter your age: 30 
You are 5 years older than me. */
let myAge = 21
let yourAge = prompt("Enter your age: ")
if (myAge > yourAge){
    let ageOlder = myAge - yourAge
    console.log(`I am ${ageOlder} years older than you`)
}else if (yourAge > myAge){
    let ageOlder = yourAge - myAge
    console.log(`You are ${ageOlder} years older than me`)
}else {
    console.log(`We are the same age, ${myAge} years`)
}
/*3.- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it into ways 
1- using if else */
let a = prompt("Enter a number: ")
let b = prompt("Enter a number: ")
if (a > b){
    console.log("a is greater than b")
} else{
    console.log("a is less than b")
}
// 2- ternary operator.
console.log(a > b ? "a is greater than b" : "a is less than b" )

/*4.- Check if the season is Autumn, Winter, Spring or Summer. If the user input is: 
1- September, October or November, the season is Autumn. 
2- December, January or February, the season is Winter. 
3- March, April or May, the season is Spring 
4- June, July or August, the season is Summer */
let month = prompt("Enter a month: ").toLowerCase()
switch(month){
    case "september":
    case "october":
    case "november":
        console.log("The season is Autumn")
        break
    case "december":
    case "january":
    case "february":
        console.log("The season is winter")
        break
    case "march":
    case "april":
    case "may":
        console.log("The season is Spring")
        break
    case "june":
    case "july":
    case "august":
        console.log("The season is Summer")
        break
        default:
        console.log("Invalid month entered")
}
/*5.-  Write a code which can give grades to students according to their scores: 
1- 80-100, A 
2- 70-89, B 
3- 60-69, C 
4- 50-59, D 
5- 0-49, F */ 
let grades = prompt("Enter your grade: ")
switch(true){
    case (grades >= 80 && grades <= 100):
        console.log("Your grade is A: " + grades)
        break
    case (grades >= 70 && grades <= 89):
        console.log("Your grade is B: " + grades)
        break
    case (grades >= 60 && grades <= 69):
        console.log("Your grade is C: " + grades)
        break
    case (grades >= 50 && grades <= 59):
        console.log("Your grade is D: " + grades )
        break
    case (grades >= 0 && grades <= 49):
        console.log("Your grade is F: " + grades)
        break
        default:
        console.log("Invalid grade entered.")
}