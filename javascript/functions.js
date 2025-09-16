/* looping in functions 
what is a function 
how do we declare functions 
scoping in functions 

parameters and arguments 
returning values from functions 
anonymous functions 
arrow functions 
callback functions 
immediately invoked function expressions (IIFE)
higher-order functions 
function expressions vs function declarations 
default parameters 
rest parameters 
closures 
function hoisting 
recursion in functions 
function methods (call, apply, bind) 
async functions and await 
generator functions 
function properties (length, name) 
 */
/* what is a loop >a loop is a programming construct that repeats a block of code as long as a specified condition is met.
for loop >>this has three parts {
    initialization >>this is where we set a starting point for the loop counter.
    condition >>this is a boolean expression that is evaluated before each iteration of the loop. if it evaluates to true, the loop continues; if false, the loop stops.
    increment/decrement >>this updates the loop counter after each iteration. it can either increase (increment) or decrease (decrement) the counter value.
}
for (initialization;condition;increment/decrement){
    // code to be executed in each iteration
} */

    for(let i=0;i<=50;i++){
        console.log("Your Number is "+i);
        
    }
   /*  while loop >>this loop continues to execute as long as a specified condition is true. the condition is checked before each iteration.
    while(condition){
    // code to be executed in each iteration
    //to terminate a while loop to avoid infinite looping we use the increment operator
    } */

    let j=1
    while(j>0 && j <=50){
        console.log("Your Number is "+j);
        j++
    }

/*     do while loop >>this loop is similar to a while loop, but the condition is checked after each iteration. this means that the code block will always execute at least once.

do {

// code to be executed in each iteration}
}
while(condition); */

let k=1//global scope>>it can be accessed anywhere in the code
do {
    console.log("Your default  Number is "+k);
    k++
    
}
while(k>0 &&k<=10)



    //FUNCTIONS IN JAVASCRIPT
     //a function is a reusable block of code desinged to perfomr a specific purpose >>only perfom one purpose
     //why use functions >>reusability ,organization(break big problems into smaller problems) and maintainalability(easier debugging) of code
     //declaring a function>>functions can be declared in three ways>> function declaration, function expression, and arrow function
     //FUNCTION DECLARATION{
     //declare by the key term function followed by the name of the function and parentheses()
   /*   syntax {
        function functionName(parameters){
            //code to be executed
     }
    } */
   //calling a function >>to execute the code inside the function we need to call the function
   //  by its name followed by parentheses() then arguments if any are applicable
   //parameters>>this are placeholders for the values that will be passed to the function when it is called
   //arguments>>these are the actual values that are passed to the function when it is called
   function calculateSum(k,num2){
    let sum=k+num2;
    console.log("The sum is "+sum);
    return sum;
   }
   calculateSum(k,5)

   //function expression >>this is another way to declare a function
   //in this method the function is assigned to a variable
   //syntax {
    // let functionName=function(parameters){
        //code to be executed
   // }
   //}
   let calculateMultiplication=function( num1,num2){
       let product=num1*num2;//local scope>>it has been used inside a function and can only be accessed in that function 
       console.log("The product is "+product);
       
       return product;

   }
   calculateMultiplication(30,5)

   //arrow function>>this is a more concise way to declare functions in javascript and it is clean and easy to read
   //syntax{
  /*  we keep the variable name followed by an equal sign then parentheses() 
   for parameters followed by the arrow symbol(=>) and then the function body{} */

  let greet=(name)=>{
    console.log("Hello "+name+", welcome to javascript functions");
   }
   greet("peter")
/*    types of scopes in functions and javascript */
/* there are two major scopes {
    global scope >>this is the outermost scope in javascript and it is accessible from anywhere in the code
    local scope >>this is the innermost scope and it is only accessible within the block of code where it is defined
}
additional two {
    block scope >>this is defined by using curly braces{} and it is only accessible within the block of code where it is defined
    lexical scope >>this is the scope that is determined by the location of the function declaration in the code
}
 */
let x=10;//global scope>>outisde any function and can be accessed anywhere in the code
function outerCode(){
    let y=20;//local scope>>inside a function and can only be accessed in that function
    /* console.log("The value of x is "+x);
    console.log("The value of y is "+y); */
    if(true){
        let z=30;
        console.log("The values are "+ x,y,z);//block scope>>inside a block of code and can only be accessed in that block of code
        
    }

    //console.log("The value of z is "+z);//this will give an error because z is not defined in this scope
    
}
outerCode();//calling the function

hoisitng in functions &closures in functions
