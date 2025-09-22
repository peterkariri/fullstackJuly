//arrays start count from 0
let numbers= new Array(12,23,434,54,5,656)//using a constructor 
let newNumbers=[12,3,4545,5465,657,768] //most advised method
//accessing arrays we use the square brackets with the ondex of the item 
console.log(newNumbers[2]);
 console.log(numbers);
 
//array methonds
//adding coponents to arrays
//push this allows to add a component at the end of the array 
numbers.push("Peter")
 console.log(numbers);
//pop>>removes the last component of an array and you dont put any value in it 
 numbers.pop()
//console.log(numbers);

//shift and unshift
//shift>>this removes the first index of an Array
//console.log(numbers.shift());

//unshift>>add the first index of an array
let newMe=numbers.unshift(10);
console.log(newMe);


//intermediate components

let numbersMany=[1,2,56,74,56,732,11,19,25,43,434]
//forEach loop to perform some actions

/* function myFunction(nums){
//forEach loop allows us to chain the function that we want to implemt >>an arrow function 
} */
numbersMany.forEach(
    (num)=>
    console.log(num*10)
)
//map function >>maps the original contents of the array and produces a new array with the function having implicated on the dataset

numbersMany.map((num=> console.log(num%2)
 ))

 console.log(newNumbers);
 
//filter>>you filter to keep certain values in the array and retunr them as a new array 

numbersMany.filter((num)=> console.log( num%2===0
)
 //returns even numbers
 
 
)

numbersMany.filter((num)=>(console.log(num%2===1)
//returns odd numbers
))


 //objects in js advanced
 //defined by a variable 
 //has key value pair whee key is not in quotes 
 //key -value seperated by a colon  and the value are datatype and syntax specific
// accessing objects>>we use two methods>>the dot notation and the square brackets 
//the dot notation is advised and easy to use but if you are interacting with deeo nested object we use the square 
//brackets to alter the values 
let student={
  name:"Peter",
  profession:"fullstack Developer",
  yearsExperience:10,
  isTrainer:true
}
console.log(student.name);
console.log(student.profession);
console.log(student.yearsExperience);
console.log(student.isTrainer);
console.log(`My name is ${student.name} 
    and I am a ${student.profession} with over 
    ${student.yearsExperience} years experience in creating dynamic systems `);

//having multidimensinal objects
let vehicle={
    brand:"Toyota",
    address:"Uasin Gishu",
    car1:{
        name:{
            numberPlate:"kdt 234l",
            color:"red",
            yom:2019,
            drivers:["Peter","Rency","Teddy"]
               
        },
        mileage:{
            startdate:2019,
            distanceCoveredKM:300000,
            endServiceDate:2025,
            garageCrew:["lilian","fridah","Tum","Sherryl"]
        }
},
  drive:function(){ //this is called a methond >>is a function inside an object 
    console.log("vvvvvrrrmmm am driving");
    
  }
}
console.log(` The dirver to the vehicle ${vehicle.car1.name.numberPlate} 
    of color ${vehicle.car1.name.color}
   made in ${vehicle.car1.name.yom} is  ${vehicle.car1.name.drivers[0]}
    and the two core team drivers with him are 
   ${vehicle.car1.name.drivers[1]}  and ${vehicle.car1.name.drivers[2]}`);

   vehicle.drive()//this is how we access a functio in an object ie(console.log())