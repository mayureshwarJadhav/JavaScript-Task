let a = 12, b = 23;


// arithmetic operators
console.log("arithmetic operators:")
console.log("Addition is:", a + b);      
console.log("Subtraction is:", a - b);  
console.log("Multiplication is:", a * b); 
console.log("Division is:", a / b);      
console.log("Modulus is:", a % b); 

// comparison operators
console.log("\n comparison operators:")
if (a > b) {
    console.log("a is greater than b");
  } else {
    console.log("a is not greater than b");
  }

// logical operators
console.log("\n logical operators:")
let x =2;
console.log((x <= 4) && (2 == 4)); //  and opreator
console.log((x <= 4) || (2 == 4)); //  or opreator
console.log(!false);  // not opreator

// switch statement 
console.log("\n switch statement:")
switch (a) {
    case 10:
      console.log("a is 10");
      break;
    default:
      console.log("a is not 10");
  }

// for loop
console.log("\n for loop:")
for(let i =0; i < 5; i++)
{
    console.log(i)
}

// while loop
console.log("\n While Loop:");
let j = 0;
while (j < 5) {
  console.log(`j = ${j}`);
  j++;
}


// do while loop
console.log("\n do-While loop:");
let k = 0;
do {
  console.log(`k = ${k}`);
  k++;
} while (k < 5);