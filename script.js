let firstName = " Brigitte Mae";
let last_name = " Ibeng";
let fullName = firstName + ' ' + last_name;
console.log (fullName);
console.log("BSCS-2A");
console.log("CS201-BMI-LAB3");


let password = prompt ("enter your password");
let input =(password.length);
if (input == 8){
    console.log ("Welcome");
}else if (input <= 8){
    console.log ("Password is too short");
}else if (input >= 8){
    console.log("Password should be 8 characters");
}else {
    console.log("Please provide a password");
}