// Javascript is a lightweight, cross-platform, object-oriented computer programming language
// Javascript is one of the three core technologies of web development
// HTML / CSS / JAVASCRIPT

function greeting(yourName){
    let result = 'Hello' + ' ' + yourName; // Concatenation String
    console.log(result);
}

// Call function 

let name = prompt('What is your name?');
greeting(name);
// Name will take place of yourName in the function above

// String types

let fruit = 'banana';

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // split by comma
console.log(fruit.split('')); // split by characters

let fruits = ['apple', 'banana', 'pineapples']
console.log(fruits.toString());
console.log(fruits.join('!')); // adds between array
console.log(fruits.pop()); // removes last from array
console.log(fruits.push('blackberries')); // add last to array
console.log(fruits.shift());
console.log(fruits.unshift('kiwi')); // add first to array

let vegetable = ['asapargus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetable); // Combine arrays
console.log(allGroceries);

// Arrays

let num;
let numArray = [];
console.log(numArray);
for (let num = 0; num <= 10; num++);{
    numArray.push(num);
}
console.log(numArray);

// Objects

let student = {
    first: 'Alexander',
    last: 'Morales',
    age: 37,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
console.log(student.studentInfo());

// IF Statements

var age = 37;

if (age >= 18 && age <= 35){
    status = 'target demo';
    console.log(status);
}
else {
    status = 'not my audience';
    console.log(status);
}

// Switch Statements
// Sunday = 0, Friday = 5, Saturday = 6, Monday -> Thursday 1-4

switch (0) {
        case 0:
            text = 'weekend';
            break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
        break;
}
console.log(text)