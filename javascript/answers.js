
//algorithm
/* >>refers to a step by step instruction on how to solve a problem where there are steppps{
    input 
    process
    output
    eligibility
} */
//input >> output
//problem>>solution not another problem
//steps to solve the problem
//1. understand the problem
//2. break the problem into smaller sub problems
//3. write the code
//4. test the code

//age voting elgibility
//input>>age
//process>>check if age is greater than or equal to 18
//output>>eligible to vote or not eligible to vote

let age=17.9;
if(age>=18){
    console.log("You are eligible to vote");
    
}
else{
    console.log("You are not eligible to vote");
    
}

//check if a number is even or odd
//input>>number
//process>>check if number is divisible by 2>>using a modulus operator{
//number%2==0>>even if no reminder then number is even 
//number%2!=0>>odd if reminder then number i s odd
//}
//output>>even or odd
let number=999999999999999997777777;

if(number%2==0){
    console.log("The number is even");
    
}
else{
    console.log("The number is odd");
    
}

console.log(number/2);
//student grading system
let marks= 45;
if(marks>=80){
    console.log("You have passed the exam with an A");
}
else if((marks>=65 && marks<=79)){
    console.log("You have passed the exam with a B");
}
else if((marks>=50 && marks<=64)){
    console.log("You have passed the exam with a C");
}
else{
    console.log("You have failed the exam terribly ,pull up your socks");}
//days of the week 
let dayOfTheWeek=7;
switch(dayOfTheWeek){
    case 1:
        console.log("today is Monday");
        break;
    case 2:
        console.log("today is Tuesday");
        break;
    case 3:
        console.log("today is Wednesday");
        break;
    case 4:
        console.log("today is Thursday");
        break;
    case 5:
        console.log("today is Friday");
        break;
    case 6:
        console.log("today is Saturday");
        break;
    case 7:
        console.log("today is Sunday weekend");
        break;
    default:
        console.log("Invalid day");

}
//calculator
let numOne=10;
let numTwo=20;
let operation="/"; // specify the operation here


switch(operation){
    case "+":
        console.log("The sum is "+(numOne+numTwo));
        break;
    case "-":
        console.log("The difference is "+(numOne-numTwo));
        break;
    case "*":
        console.log("The product is "+(numOne*numTwo));
        break;
    case "/":
        console.log("The quotient is "+(numOne/numTwo));
        break;
    case "%":
        console.log("The remainder is "+(numOne%numTwo));
        break;    
    default:
        console.log("Invalid operation");
}
