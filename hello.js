// Variables and Constants

// Comments

// Single Line Comment
/*Multi Line Comment */

// Variable Declaration - var,let,const

// var is not used nor recommended as per ES6 as it has a global scope
// Global Scope - When a variable is written right in the file instead of inside of a method or loop iteration
// Var and let work in a similar way
// Const - For values that are not going to be re-assigned at a later time

let firstName = 'John' , lastName = 'Doe'
console.log(firstName, lastName)

let age = 30
console.log(age)

// Always initialize variable before using it, else you will run tinto error

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     lowercase


// Re-assigning Variables
age = 40;
console.log(40)

// Declaring variables without a value

let score;

score = 100;

console.log(score);

// Const cannot be directly reassigned
// const cannot be declare without a value

// Const with arrays

const arr = [1,2,3,4]

// You cannot directly add value to an array in const variable. However, you can use array method PUSH to add a value at the end of the array

arr.push(5)
console.log(arr)

// const with objects

const person = {
    'name':'John',
    'age':40
}

// We cannot directly change the value but we can change the value of the property of the object

person.name = 'Eric'
console.log(person)

// Declare multiple values at once

let a,b,c

const d = 10, e = 20, f = 30;

// Data Types

// 1. Primitive Data Types
// 2. Reference or Object Data Types

// Primitive Data Types

/*

String - Sequence of characters. Must be in quotes or backticks
Number - Integers as well as floating point numbers
Boolean - Logical entity / true or false
Null - Intentional abscence of any object or value
Undefined - A variable that has not been defined / assigned
Symbol - Built in object whose contructor returns a unique symbol
BigInt - Numbers that are greater than the "Number" type can handle

*/

// Reference Types (Objects)

// Reference types or "objects" are a non-primitive value and when assigned to a variable, the variable is given a reference to that value

// Object literals, arrays and functions are all reference types

// Static Types vs Dynamic Types

/*

JavaScript is a dynamically-typed language. This means, we do not explicitly define the types for our variables. Many other languages are statically-typed  such as C, C++ and Java

TypeScript is a superset of JavaScript, which allows static-typing. This can make your code more verbose and less prone to errors.

*/


// String

let fName = 'Sara'

// Number

let Age = 50

// Decimal / Float

let temp = 98.9

// Boolean - True / False Value

let hasKids = true;

// Null - intentional empty value

let aptNum = null;

// Undefined - When a value is not defined

let testScore;

// Symbol

let id = Symbol('id')

// BigInt - Too big for the number type



let output = id;

// Reference Types

// Arrays, Object literals, Functions/Methods

// Arrays 

let numRefType = [1,2,3,4,5]

// Object Literals

let person1 = {
    name:'Brad',
};

// Functions / Methods

function sayHello(){
    console.log('Hello');
}

console.log(output, typeof output)

// Type Conversion / Type Casting

/*

It is the process of explicitly of converting a value from one type to another

*/

// Change string to number

let amount = '100'

amount = parseInt(amount);

// Using Urnary Operator (+)

// amount = +amount;

// Using Number Constructor

// amount= Number(amount)

console.log(amount, typeof amount)

// Change Number to String

let numtoStr = 100

numtoStr.toString();

// When we use a method like toString, JavaScript creates a temporary wrapper of the associated type that converts one data type to another

console.log(numtoStr, typeof numtoStr)

// Convert String to Decimal

let FltoStr = '99.5'

FltoStr = parseFloat(FltoStr);

console.log(FltoStr, typeof FltoStr)

// Boolean Constructor  - Change number to Boolean

let numbool = 1

numbool = Boolean(numbool);

console.log(numbool, typeof numbool)

//  NaN - Not a Number 

let nanum = 'hello'

nanum = parseInt(nanum);

console.log(nanum, typeof nanum);

// Operators

/*

Symbols that we can use in various expressions for performing tasks

*/

// 1. Arithmetic Operators

let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;

// Concatenation
x = 'Hello' + ' ' + 'World';

// Exponent
x = 2 ** 3;

// Increment
x = 1;
// x = x + 1;
x++;

// Decrement
// x = x - 1;
x--;

// 2. Assignment Operators

x = 10;

x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

// 3. Comparison Operators

// Equal to (Just the value, not the type)
x = 2 == '2';

// Equal to (Type and value)
x = 2 === '2';

// Not equal to (Just the value, not the type)
x = 2 != '2';

// Not equal to (Type and value)
x = 2 !== 2;

// Greater than and less than
x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);

// Type Coercion

/*
    Changing your variable type implicitly
    Happens when you apply values to operators that have different types
*/


let anyValue;

anyValue = 5 + '5' //  JavaScript will implicitly convert the number datatype to string and pass the data as string

// Wrap as Number

anyValue = 5 + Number('5')

// Multiply

anyValue = 5 * '5'

// Null

anyValue = 5 + null

console.log(anyValue, typeof anyValue)

// Individual Data Types

// Strings

let StrX;

let custName = 'John';
let custAge = '40'

// Concatenation  - Joining Two strings

// StrX = "The customer's name is " +custName+ " and their age is "+custAge+ " years old";

// Template Literals
// came into Javascript after ES6

// StrX = `The customer's name is  ${custName} and their age is ${custAge} years old`;

// console.log(StrX);

// String Properties and Methods

let StrY = 'Hello World';

// Length

// StrX = StrY.length;

// Access Value by key

StrX  = StrY[0];

// Object Prototype - All method functions

StrX = StrY.__proto__;

// toUpperCase()

StrX = StrY.toUpperCase();

// toLowerCase()

StrX = StrY.toLowerCase();

// charAt()

StrX = StrY.charAt(0);

// indexOf

StrX = StrY.indexOf('W');

// substring() - Search a string for a specified value

StrX = StrY.substring(0,4);

// slice() - Similar to substring() but can also start from the end with negative numbers

StrX = StrY.slice(-6,-1);

// trim() - Trims the white space

// replace() - replace string within a string

let customerName = 'John'

StrX = StrY.replace('World', custName);

// includes() - if a certain string is found withing the string; returns true or false

// valueOf() - return primitive

console.log(StrX);


// Capitalize Challenge

/*

We have arrived at our first challenge. Every once in a while Brad is going to ask you to figure out a problem or do something using what we have already learned. He will not ask you to do a challenge that involves doing something that we have not yet gone over.

If you feel stuck and can not figure it out on your own, that is absolutely fine. He will walk you through the solution(s), so that you can understand how to solve the problem.

**Instructions**:

Take the variable `myString` and capitalize the first letter of the word using some of the methods that we talked about in the last video. Put the result in a variable called `myNewString`.

Create multiple solutions if you would like.

**Expected Result:**

```JavaScript
const myString = 'developer';

console.log(myNewString); // 'Developer'
```

**Hints:**

1. You can use the `charAt()` method as well as `string[index]` to get the character at a specific index.
2. The `.toUpperCase()` method will make the entire string uppercase
3. `substring()` or `slice()` will return a specific portion of a string

*/


// Challenge Solution

let myString = 'developer'

// Find the index of the letter to be capitalized

let findIndex = myString.indexOf('d')

// Capitalize the letter

let capitalize = myString.charAt(findIndex).toUpperCase();

// Except for the first character, show the rest of the string

let restofit = myString.substring(1)

// Combine the capitalized letter and the rest of the string

let myNewString = `The new word is ${capitalize}${restofit}`

// Solution 2 - Directly put findIndex with the string,capitalize and concatenate with restofit

let myNewString2 = myString[findIndex].toUpperCase()+restofit;


console.log(myNewString2)

// Numbers

let num  = 5;

// Number as an object

num = new Number(5);

let numout;

// Number as a String

numout = num.toString(); 

// Specifiy decimal points

numout = num.toFixed(2);

// toPrecision()

numout = num.toPrecision(2)

// toExponential()

numout = num.toExponential(2)

// toLocaleString

numout = num.toLocaleString('en-IN')

console.log(numout)

// Math Object

let MathNum;

// Square Root

MathNum = Math.sqrt(9);

// Absolute Number

MathNum = Math.abs(5);

// Round

MathNum  = Math.round(4.6);

// Round up

MathNum = Math.ceil(4.2);

// Round down

MathNum = Math.floor(4.9);

// Pow

MathNum = Math.pow(2,3);

// Min (Smallest number) / Max (Largest Number)

MathNum = Math.min(4,5,3)
MathNum = Math.max(4,5,3)

// Random

MathNum = Math.random();

console.log(MathNum)
