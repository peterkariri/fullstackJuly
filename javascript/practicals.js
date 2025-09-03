/* var redefining and redeclaring a new value for firstName
 */
var firstName="lilian"
console.log(firstName);
/* var firstName="derrick"
console.log(firstName); */

/* we cannot redeclared this variable name but we can update it 
we update by calling the variable name and its nes paramenter/value and not \
using the let keyword again  */
let secondName="Mwangi"
console.log(secondName);
/*  secondName="Kenei"///update
console.log(secondName); */

const sage=35
console.log(sage);
//sage=36//we cannot update or redeclare this variable
let age=36//we dont  allow variable declaration without a name >>this can result to undefined variables 
console.log(age);
thirdName=null;
console.log(thirdName);

/* combining all this using concatenation(+) */
console.log("My name is"+" "+firstName+" "+secondName+",I am "+age+" years old");



