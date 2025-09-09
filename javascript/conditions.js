/* conditional statements are used to perfrom a variety of logical executions based on different conditions
these conditions are evaluated to be true or false
based on the evaluation we can execute different blocks of code

the most common conditional statements are{
    if statement
    else statement
    else if statement
    switch statement
} */
/* if statement>>the if statement always executes a block of code if a specified condition is true 
syntax{
if(condition){
    //block of code to be executed if the condition is true
}}
*/
let weather="cold";
if(weather=="sunny"){
    console.log("Today is a sunny day");
    
}else{
    console.log("Today is a cold day");
    
}


let result=50;
if(result>=52){
    console.log("You have passed the exam with a C");
}else if(result>=65){
    console.log("You have passed the exam with a B");
}else if(result>=79){
    console.log("You have passed the exam with a B+");
}
else if(result>=88){
    console.log(
    "You have passed the exam with an A");
}
else{
    console.log("You have failed the exam");
}

/* switch statement>>its better for checking many possi le values of one variable
syntax{
    switch(epression){
        case value1:
            //block of code to be executed if expression matches value1
            break;
        case value2:
            //block of code to be executed if expression matches value2
            break;
        default:
            //block of code to be executed if expression doesn't match any case
    }
    break>>it is used to move out of a the switch statement if condition is met 
    to give a default value we use the default keyword>>this is f the value is not found within the given cases
} */
let day ="Rency";
switch(day){
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is Tuesday");
        break;
    case "wednesday":
        console.log("Today is Wednesday");
        break;
    case "thursday":
        console.log("Today is Thursday");
        break;
    case "friday":
        console.log("Today is Friday");
        break;
    case "saturday":
        console.log("Today is Saturday");
        break;  
    case "sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("It's not a valid day");
    }