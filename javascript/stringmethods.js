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
