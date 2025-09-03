/* datatypes are the different types of data that can be used in programming. In JavaScript,
 there are several built-in datatypes, including:

1. **Number**: Represents both integer and floating-point numbers.
2. **String**: Represents a sequence of characters, enclosed in single or double quotes.
3. **Boolean**: Represents a logical value, either `true` or `false`.
4. **Object**: Represents a collection of key-value pairs.
5. **Array**: Represents an ordered list of values.
6. **Null**: Represents the intentional absence of any object value.
7. **Undefined**: Represents a variable that has been declared but has not yet been assigned a value.

Understanding these datatypes is crucial for effective programming in JavaScript. */

/* String >>this refers to a sequence of characters, used for storing and manipulating text.
strings are defined and enclosed in quotes (either single or double) and can also
 be enclosed in backticks (``) for template literals, which allow for multi-line 
 strings and string interpolation. */

 let studentName="Peter"

 let secondName="Parker" 

/*  to combine strings we can use string concatenation(+) or we can use template strings (``). 
in string interpolation, we can embed variables directly within the string using ${variableName}.
*/

console.log('My name is ' + studentName + ' ' + secondName + '.');
console.log(`My name is ${studentName} ${secondName} and I am Spiderman.`);

/* Write code that stores your full name in a string and prints:
 */

 /* NNumbers  >>represent both integer and floating-point numbers. 
 integers>this is any positive or negative whole number without decimals.
 floats>>refers to any number with a decimal

 special numeric numbers {
 this are a special way of defining numbers that are abstract>infinity,-infinity,NaN(notanumber)
    }

    how to define numbers{
    variable name=number;
    }
 */
let age=25;//integer
let price=19.99;//float
let infinityValue=Infinity;//special numeric number
let negativeInfinityValue=-Infinity;//special numeric number
let notANumber=NaN;//special numeric number// input validation  
console.log(age);
console.log(price);
console.log(infinityValue);
console.log(negativeInfinityValue);
console.log(notANumber);

/* to see which type of data that you are using we use the typeof operator with the variable name in the brackets */
console.log(typeof(age));//
console.log(typeof(price));
console.log(typeof(infinityValue));
console.log(typeof(negativeInfinityValue));
console.log(typeof(notANumber));

  /*   Boolean>>this refers to a data that can only be 1 or 0 (truth or false)
    how to define boolean{
        variable name=boolean;
    } */
   let isStudent=true;
   let hasPaid=false;
    console.log(isStudent);
    console.log(hasPaid);
/*     we use this type of data types in comparison ,decision making and conditions */

/* Null>>this represents an intentional empty value.
its a laceholder when you want to clear a variable pr show no value at all 
 */
let emptyValue=null;

let favouriteFood=null;

console.log(favouriteFood);
favouriteFood="Pizza";
console.log(favouriteFood);


/* undefined>>this refers to having no value at all. */
let schoolName;

console.log(schoolName);

/* objects>>this refers to a collection of key-value pairs.
the values are stored in a key-value pair and they are enclosed in a curly brackets and 
are seperated with commas 
*/


    let student={
        name:"Peter Parker",
        age:25,
        isStudent:true
    }

  

    let student2={
        "name":"Peter Parker",
        "age":25,
        "isStudent":true
    }

    console.log(typeof(student));
    console.log(typeof(student2));

  /*   arrays>>this refers to an ordered list of values.
    they are defined using square brackets [] and can contain values of any data type.
    arrays can hold multiple values in a single variable.
    they are separated by a comma and every value has to be in quotes
    */ 

    let fruits=["apple","banana","orange",
          student={   
        name:"Peter Parker",
        age:25,
        isStudent:true
    }

  
    ];
    console.log(fruits[3]);