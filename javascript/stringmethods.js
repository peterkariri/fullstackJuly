/* string properties and methods 
strings have built in properties and methods 
that allow us to manipulate and interact with string data effectively.
to access these inbuilt properties and methods we use the dot syntax
(.) after the string or variable name followed by the property or method name
.length>used to give the length of a string in terms of the number
of characters it contains including spaces

Accessing string characters we start counting at index 0  while 
when calculating we start from index 1

eg(T U M)
*/
//conting a string
let fullName="TUMI KALALA"
console.log(fullName.length);//length property
//accessing a character
console.log(fullName[0]);//accessing the first character
console.log(fullName[1]);//accessing the second character
/* escape characters in strings 
Escape characters are used to represent certain special characters within strings.
For example, to include a quotation mark within a string,
 we can use the backslash (\) as an escape character.
n
 this escape characters include {
 /n>>new line>>jumps to next line
 /t>>tab space>>open a tab space
 \">>double quote>>enable quotes embedment in strings
 \'>>single quote>>enable single quote embedment in strings
 \\>>backslash>>represents a backslash character that maps the file path (absolute)
 }*/
let sentence="hello it\'s is a \t rainny \n and  cold day \"stay warm\" ";
console.log(sentence);

/* comon string methods  */
//case conversion
/* toUpperCase()>>this method converts all characters in a string to uppercase letters
toLowerCase()>>this method converts all characters in a string to lowercase letters
to use this string methods we do something we call method chaining
*/
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
//searching within a string
/* indexOf()>>this method returns the index of the first occurrence of a specified value within a string.
if the value is not found it returns -1
lastIndexOf()>>this method returns the index of the last occurrence of a specified value within a string.
if the value is not found it returns -1
includes>>this method checks if a string contains a specified value and returns true or false
startsWith()>>this method checks if a string starts with a specified value and returns true or false
endsWith()>>this method checks if a string ends with a specified value and returns true or false
*/
let phrase="The  quick  brown  fox  jumps over the lazy dog. If the dog barked, was it really lazy?";
phrase.indexOf("dog");
console.log(phrase.lastIndexOf("dog"));//29
console.log(phrase.includes("fox"));/////true
console.log(phrase.startsWith("The"));/////true
console.log(phrase.endsWith("?"));/////true
//extracting string parts
/* in extracting strings we use these following methods{
    slice>>it takes in two parameters(starting index and ending index){
        it extracts a section of a string and returns it as a new string without modifying the original string.
        takes in a negative index for only the ending index.
    }
} */
let newPhase=phrase.slice(4,-19);
console.log(newPhase);
/* 
substring>>this refers to a method that extracts characters from a string between two specified indices and returns 
them as a new string. Unlike slice, substring does not accept negative indices.It returns a 1 if given a negative index */


let subPhase=phrase.substring(-6,-50)
console.log(subPhase);
/*
substr>>this method extracts a part of a string, starting from a specified index and extending for a given number of characters.
it takes in two parameters(starting index and length of the string to be extracted)
it can take in negative index for only the starting index>>starts counting frm right side incase of a starting negative index
*/
let subStrPhase=phrase.substr(-19,15)
console.log(subStrPhase);
//replacing strings>>this refers to renaming a value in a stirng or using another value in place of the original value
/* we use the replace method to conduct this functionality
 */
let newSentence="I like playing GTAfive and coding in every aspect also playing GTAfive and swimming is fun"

let newHobby=newSentence.replaceAll("GTAfive","PES") //replace

console.log(newHobby);
console.log(newSentence);


//trimming>>we use the trim method to remove whotespaces from strings at the beginning and end points
let trimSentence="   hello world    "
console.log(trimSentence);

console.log(trimSentence.trim());
  /* repeating()>>this method is used to repeat a targetted number of characters over
   the specified amount of iterations 
   inside the repeat function is where you store the repeating iteration count
   */

   let repeat=" i like coding\n"
   console.log(repeat.repeat(10));
   
