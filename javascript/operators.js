//what is an operator?
//operators are special symbols that perform operations on operands
//types of operators
//1.arithmetic operators(+,-,*,/,%,**)
//2.assignment operators(=,+=,-=,*=,/=,%=)
//3.comparison operators(==,===,!=,!==,>,<,>=,<=)
//4.logical operators(&&,||,!)
//5.ternary operator(?:)
//6.typeof operator(typeof)
//7.bitwise operator(&,|,^,~,<<,>>)

let a=10;
let b=5;
//arithmetic operators
console.log("The sum is "+ (a+b) );
console.log("The difference is "+ (a-b) );
console.log("The product is "+ (a*b) );
console.log("The quotient is "+ (a/b) );
console.log("The remainder is "+ (a%b) );
console.log("The exponent is "+ (a**b) );
//assignment operators
let number=10;//this is an assignment operator
number+=5;//(number(new)=number(previous number)+5) 
console.log(number);
number-=3;//(number(new)=number(previous number)-3)
console.log(number);//12
number*=2;//(number(new)=number(previous number)*2)
console.log(number);//24
number/=4;//(number(new)=number(previous number)/4)
console.log(number);//6
number%=4;//(number(new)=number(previous number)%4)
console.log(number);//2
//comparison operators
let numberOne=10;
let numberTwo="10";
console.log(typeof(numberOne));
console.log(typeof(numberTwo));
console.log(numberOne==numberTwo);//equal to operator
console.log(numberOne===numberTwo);//strict equal to operator
//not equal to is defined by using the exclamation mark(!=)
console.log(numberOne!=numberTwo);//not equal to operator
console.log(numberOne!==numberTwo);
//greater than operator
console.log(numberOne>numberTwo);
//less than operator
console.log(numberOne<numberTwo);
//greater than or equal to operator
console.log(numberOne>=numberTwo);
//less than or equal to operator
console.log(numberOne<=numberTwo);
//logical operators
//assingment>>read on the different naming conventions in javascript