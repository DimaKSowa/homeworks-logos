function CoffeeMake(type, amount) {
    this.type = type;
    this.amount = amount;

}

CoffeeMake.prototype.on = function() {
    console.log('machine is on');
    console.log(`Your ${this.type} coffee, ${this.amount}, ${this.firm} is ready`);
}
CoffeeMake.prototype.off = function() {
    console.log('machine is off');
}

function Drop(amount, firm, type = 'drop'){
    CoffeeMake.call(this, type, amount)
    this.firm = firm;
}

Drop.prototype = Object.create(CoffeeMake.prototype);
Drop.prototype.constructor = Drop;

const coffeeDrop = new Drop('500ml', 'Mcoffee')
coffeeDrop.on()
coffeeDrop.off()

function Abc(amount, firm, type = 'Rizhkova'){
    CoffeeMake.call(this, type, amount)
    this.firm = firm;
}

Abc.prototype = Object.create(CoffeeMake.prototype);
Abc.prototype.constructor = Abc;

const coffeeAbc = new Abc('500ml', 'Good Coffee')
coffeeAbc.on()
coffeeAbc.off()




// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     console.log('created');
// }

// User.prototype.sleep = function() {
//     console.log('...');
// }

// function Employee(name, age, job, title, company = 'Logos') {
//     User.call(this, name, age);
//     this.job = job;
//     this.title = title;
//     this.company = company;
// }

// Employee.prototype = Object.create(User.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.sleep = function() {
//     console.log('Z-z-z-z');
// }

// const employee = new Employee('Petro', 32, 'FE', 'middle');
// console.log(employee);

// employee.sleep();