/*
console.log('Hello World!!!');
var firstName = 'Wishmaster';
var lastName = 'Akunin';
var age = 37;

var fullAge = true;

var job;

console.log();


// Variable Mutation and Type Coercion

var firstName = 'Wishmaster';
var age = 37;

console.log(firstName + ' ' + age);

// Type coercion

var job, isMarried; // Clean to assign several variables on one line
job = 'coder';
isMarried = true;


// Variable mutation

age = 'thirty seven';
job = 'hacker'

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');

console.log(firstName + ' ' + lastName);


// Basic Operators
var year, ageWish, ageMashire
year = 2020;
ageWish = 37;
ageMashire = 33;

var yearWish = year - 37;
var yearMashire = year - 33;

console.log(yearWish);
console.log(yearMashire);

// Logical Operators

var WishOlder = ageWish > ageMashire;
console.log(WishOlder);

// typeof operator

console.log(typeof WishOlder);
console.log(typeof year);

// Operator Precedence
var now = 2020;
var yearWish = 1983;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearWish >= fullAge; // Check Operator Precedence website  - has higher precedence than >=
console.log(isFullAge);

// Grouping
var ageWish = now - yearWish;
var ageMashire = 33;
var average = (ageWish + ageMashire) / 2;
console.log(average);

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More Operators
x *= 2; // x = x * 2
console.log(x);

x = x + 1;
x += 1;
x++; 

var heightJohn, heightMark, bmiJohn, bmiMark, massJohn, massMark;

massJohn = 86;
massMark = 92;
heightJohn = 1.69;
heightMark = 1.95;

bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

var markHigherBMI = bmiMark > bmiJohn;
 console.log(bmiJohn, bmiMark);
 console.log('Does Mark have a higher BMI? ' + markHigherBMI + '');

 */

 // If / else statements
/*
 var firstName = 'Wish';
 var civilStatus = 'married';

 if (civilStatus === 'married') {
     console.log(firstName + ' is married');
 } else {
     console.log(firstName + ' will hopefully marry soon');
 }
 
 var firstName = 'Wish';
 var age = prompt('What/s your age?');
 if (age < 13) {
     console.log(firstName + ' is a boy');
 } else if (age >= 13 && age < 20) {
     console.log(firstName + ' is a teenager');
}   else {
    console.log(firstName + ' is a man');
};



// Ternary Operator and Switch Statements
var firstName = 'Wish';
var age = 37;
age >= 21 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.'); 

var drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);

if(age >= 21) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// Switch Statements

var job = 'hacker';
switch(job) { 
    case 'hacker':
        console.log(firstName + ' test');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber');
        break;
    case 'designer':
        console.log(firstName + ' design beautiful websites');
        break;
        default:
            console.log(firstName + ' broke switch statment')
}

*/

// Function Statements and Expressions

// Function declaration
/*
Functon(job, firstName) {

}

// Function Expression
var jobDescription = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code'; //break not needed because of return and finishes the statement
        case 'driver':
            return firstName + ' drives the kids to code school';
        case 'designer':
            return firstName + ' designs website for code school';
        default: 
        return firstName + ' does something else';
    }       

};

console.log(jobDescription('designer', 'Wish'));
console.log(jobDescription('teacher', 'Mashire'));
                                                                                    //return doesn't return more than 1 value, unless in array


// Arrays

// Initialize new array
var names = ['Wishmaster', 'Mashire', 'Ekzdragon'];
var years = new Array(1983, 1987, 2000); // Not used often this way

// Mutate array date
names[names.length] = 'Hamasaki';
console.log(names[0]);
console.log(names.length);

console.log(names);

// Different data types

var john = ['John', 'Smith', 1990, ' Teacher', false];

john.push('blue');//Adds item to last on array
john.unshift('Mr'); //Adds item to first on array
john.pop(); // Removes last item on array
john.shift(); //Removes first item on array
john.push('designer');
console.log(john);

console.log(john.indexOf(1990)); //Check if a item is in the array
var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : ' John is a designer';
console.log(isDesigner);


 function tipCalculator (bill) {
   let tip;
if (bill < 50) {
    tip = 0.2;
} else if 
      (bill >= 50 && bill < 200) {
        tip = .15;
    }
    else { 
    tip = 0.1;
    }
    return tip * bill;
}
console.log(tipCalculator(100));
 
let bills = [124, 48, 268];
let tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

let total = [bills[0] + tips[0],
            bills[1] + tips[1],
            bills[2] + tips[2]];

console.log(tips, total);


// Objects and Properties

let Wish = {
    firstName: 'Wishmaster',
    lastName: 'Akunin',
    age: 37,
    location: 'Houston',
    isMarried: true,
    family: ['Mashire', 'Alexis'],
    job: 'Coder'
};
console.log(Wish);
console.log(Wish.firstName);
console.log(Wish['lastName']);
let x = 'age';
console.log(Wish[x]);

// new Object syntax
let mashire = new Object();
mashire.firstName = 'Miriam';
mashire['lastName'] = 'Morales'
mashire.age = 33;

console.log(mashire);


// Object and Methods
let Wish = {
    firstName: 'Wishmaster',
    lastName: 'Akunin',
    birthYear: 1983,
    location: 'Houston',
    isMarried: true,
    family: ['Mashire', 'Alexis'],
    job: 'Coder',
    calcAge: function(){
        this.age = 2020 - this.birthYear; //this is the current object
    }
}
 
Wish.calcAge();
console.log(Wish);


let john = {
    firstName: 'John',
    height: 1.69,
    mass: 86,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

let mark = {
    firstName: 'Mark',
    height: 1.95,
    mass: 92,
    calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi
    }
}

let johnHigherBMI = john.bmi > mark.bmi;
console.log(johnHigherBMI);
console.log(john, mark);

if (john.calcBMI() > mark.calcBMI()){
    console.log('John has a higher BMI'); }
    else if(mark.bmi > john.bmi){
        console.log('Mark has a higher BMI');
    } else {
        console.log('Both BMI\s are the same');
    }



// Loops and Iteration
// i = 0, 0 < 10, log i to console, i++

// For Loop
for(let i = 1; i <= 10; i++) { //i += 2
    console.log(i);
}

var names = ['Wishmaster', 'Mashire', 'Ekzdragon'];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// While Loop
let i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

// Continue and Break statements

var names = ['Wishmaster', 'Mashire', 33, 'Ekzdragon',33, 37];
names.push(37);
names.push(33);
console.log(names.length);
for (let i = 0; i < names.length; i++) {
    if(typeof names[i] !== 'string') continue;
    console.log(names[i]);
}

for (let i = 0; i < names.length; i++) {
    if (typeof names[i] !== 'string') break;
    console.log(names[i]);
}

// Looping backwards

for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

// Challenge

let wish = {
    fullName: 'Wishmaster Akunin',
    bills: [124 ,48 ,268 ,180 ,42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for (let i = 0; i < this.bills.length; i++); 
        {
            let percentage;
            let bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2;
            } else if
                (bill >= 50 && bill < 200) {
                percentage = .15;
            }
            else {
                percentage = 0.1;
            }   
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

wish.calcTips();
console.log(wish);

let wish = {
    fullname: 'Wishmaster Akunin',
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        this.tips = [];
        this.finalValues = [];
        for (let i = 0; i < this.bills.length; i++)
        {
            let percentage;
            let bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
                }    else {
                percentage = 0.1;
            }
        }
        this.tips[i] = bill * percentage;
        this.finalValues[i] = bill + bill * percentage;
    } 
}

wish.calcTip();
console.log(wish);



let mark = {
    firstName: 'Mark',
    bills: [77, 375, 110 ,45],
    calcTipsMark: function() {
        this.tip = [];
        this.bill = [];
        for(let i = 0; i < this.bill.length; i++);
        let percentage;
        let bill = this.bills[i];
        if (bill > 100) {
            percentage = 0.2;
        } else if 
            (bill >= 100 && bill <= 300)
            {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }
            this.tip[i] = bill * percentage;
        }
    }
    mark.calcTipsMark();
    console.log(mark);


*/