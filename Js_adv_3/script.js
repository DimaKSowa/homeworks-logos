//завдання 1
// class Worker {
//     constructor(firstName, secondName, rate, days) {
//         this.firstName = firstName;
//         this.secondName = secondName;
//         this.rate = rate;
//         this.days = days;
//     }

//     getSalary() {
//         console.log(this.days*this.rate); 
//     }
// }

// const worker = new Worker('Ivan', 'Ivanov', 10, 31);
// console.log(worker.firstName); 
// console.log(worker.secondName); 
// console.log(worker.rate); 
// console.log(worker.days); 
// worker.getSalary();



//завдання 2
class MyString {
    reverse(abc) {
        console.log(abc.split("").reverse().join("")); 
    }
    ucFirst(abc) {
        const str = abc;
        const up = str[0].toUpperCase() + str.substring(1);
        console.log(up);
    }
    // ucWords(abc) {
    //     const str = abc.split(' ');
    //     for (let i = 0; i < abc.length; i++) {
    //         abc[i] = abc[i][0].toUpperCase() + abc[i].substr(1);
    //     }
        
    //     abc.join(" ");
    // }
}

const str = new MyString();
str.reverse('IVAN')
str.ucFirst('abc')
// str.ucWords('abc abc abc')