///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1983);

// Function Declaration
function calculateAge(year) {
    console.log(2020 -year);
}


// Function Expression
let retirement = function(year) {
    console.log(64 - (2020 - year));
}

retirement(1983);



// Variables

let age = 37;
console.log(age);


function foo() {
    let age = 65;
    console.log(age);
}
foo();
console.log(age);





///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
// Scoping Chain Second function can go to parent, then to global, not otherway round




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(a + b + c + d);
    console.log(a+d);
}

*/


///////////////////////////////////////
// Lecture: The this keyword

calculateAge(1983);

function calculateAge(year) {
    console.log(2020 - year);
    console.log(this);
}

var wish = {
    name: 'Wish',
    yearOfBirth: 1983,
    calcAge: function() {
        console.log(2020 - this.yearOfBirth);
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
} 

wish.calcAge();

let mike = {
    name: 'Mike',
    yearOfBirth: 1980,

};

mike.calcAge = wish.calcAge;
mike.calcAge();