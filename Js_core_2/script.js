//завдання 1

// const person = {
//     firstName: 'Ivan',
//     secondName: 'Ivanov',
//     showData: function(){
//         console.log(`Name: ${this.firstName}, Second name: ${this.secondName}`)
//     }
// }

// const newPerson = {
//     ...person
// }

// newPerson.firstName = "Petro";
// newPerson.secondName = "Petriv";

// person.showData();
// newPerson.showData();

//завдання 2

let a = 0;
let b = 0;

const myMath = {
    a: 5,
    b: 2,
    sum: function(){
        console.log(this.a + this.b);
    },
    multiplication: function(){
        console.log(this.a * this.b);
    },
    division: function(){
        console.log(this.a/this.b);
    },
    subtraction: function(){
        console.log(this.a - this.b);
    },
};

myMath.sum();
myMath.multiplication();
myMath.division();
myMath.subtraction();