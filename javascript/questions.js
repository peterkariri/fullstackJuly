//Write a function to find the maximum of two numbers.
//function 
//parameters>>two numbers
//logic >>compare the two numbers and return the maximum
//return statement>>return the maximum number
function findMaimumNumber(num1,num2){
   if(typeof num1 !=="number" || typeof num2 !=="number"){
    return "Invalid input" //if this is true it stops exectuing
   }
    else if(num1>num2 ){ //true
        return num1//end execution 
    }
    else{ //if condition is false continue with this block
        return num2
    }
}
console.log(   findMaimumNumber(100,"10"));
//function to check if a number is even or odd

let isEvenOrOdd=function(num){
    if(typeof num !=="number"){
        return "Invalid input"
    }
    else if(num%2===0){
        return num+ " is an even number"
    }
    else{
        return num+" is an odd number"
    }
}
console.log(isEvenOrOdd(11));
console.log(isEvenOrOdd("11"));
console.log(isEvenOrOdd(100000000000000000000111000000000000001110000000000000220000000000000000001));

//calculate the factorial of anumber//factorial >>this means every digit  of a number 
//multiplied by the previous digit untill 1== initial result
//have a function that takes a number as input and returns its factorial
//have a default start result of 1
/* loop throught the number with a for loop incrementing from 1 to 
the number while multiplying the result by the new number 
 */
function calculateFactorial(x){
        
    if(typeof x!=="number" || x<0)//if a value is NaN or negative
    {
        return "Invalid input"
    }
    else{
        let result=1;//default start result
        for(let i=1;i<=x;i++){
            result *=i // new value of x is the old value of x multiplied by i(where i is the iterated number)
            
    }
    return result;
    }
}
console.log(calculateFactorial(50));

///reversing a string 
//a string is sequential and to reverse we need to convert it to an array 
//we use the split method to split a strign to an array using a delimeter and then use the reverse array methond to reverse 
//to regain our sting in one word we do a join method
//function will tke in a string paramemeter
function reverseString(str){
    let newString=str.split('')//Split into an array
    console.log(newString);
    
    let arrayReverse=newString.reverse()//revrsing the string-array
    console.log(arrayReverse);

    let rejoinedArray=arrayReverse.join('')
    console.log(rejoinedArray);
    
    
}
reverseString("hello world")


//cleaner code >>we can do methond chaining to all this 
function reverseStringTwo(str){
    return str.split('').reverse().join("")
}
console.log(reverseStringTwo("today is thusday"));


//question (submutted by today 4 pm >>break down each component)
//write a function that counts vowels in a string

//Write a function that returns an array of even numbers from a given array.

//Write a function that takes another function as a parameter (callback)