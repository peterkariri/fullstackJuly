//parameter>>this are placeholders<< for values that will be passed to a function as arguments 
/* function addNumbers(a, b,c) {
  let a=b
  let b=c
  let c=a
  let sum = a + b + c;
  console.log("The sum is " + sum);
  return sum;

} */
//parameters>>a,b,c
//how are arguments passed to parameters>>this is done by position
// or pass by reference//pass by value


//arguments>>these are the actual values that are passed to
//  the function when it is called
/* addNumbers(5,12,33) */

//return statement>>this is used to return a value from a function>>ie>>each function should 
//have a return statement
//if a function does not have a return statement it will return undefined
//the return statement terminates the  function

function multiplyNumbers(num1, num2) {
    let result=num1 * num2;
        
    console.log("The result is " + result);

    return result;
    
}
multiplyNumbers(10,12)

//anonymous function>>this is a function that does not have a name
//it is often used as an argument to another function or as an immediately invoked function expression(IIFE)
//syntax {
let fullname=function(parameters){
    let name="peter"
    console.log("Hello "+name)
}
