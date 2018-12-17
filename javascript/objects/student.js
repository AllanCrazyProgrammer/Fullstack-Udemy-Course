
var students = [];

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greeting = function () {
        return "I my name is " + this.firstName + " and I am high";
    }
}

var s1 = new Student ("Rey", "Supremo", 15);

students.push(new Student("Edgar", "Reyes", 34));
students.push(new Student("Felipe", "Reynaga", 24));
students.push(new Student("Ara", "Garcia", 55));

for (let i = 0; i < students.length; i++) {
    console.log(students[i].greeting());    
}





// for in loop
// var student = students[0];
// for (var key in student) {
//     console.log(student[key]);

// }

// //Primera manera de crear objeto
// var student0 = {
//     firstName: "John",
//     lastName: "Parker",
//     age: 20,
//     greeting: function () {
//         return "I my name is " + this.firstName + " and I am high";
//     }
// };

// console.log(student0.greeting());


// //Segunda manera de crear un objeto.
// var student1 = new Object();
// student1.firstName = "Allan";
// student1.lastName = "Reyes";
// student1.age = 20;

// //Tercera manera de crear un objeto.
// var student2 = {};
// student2.firstName = "Pepe";
// student2.lastName = "Mireles";
// student2.age = 14;

// var students = [];
// students.push(student0);
// students.push(student1);
// students.push(student2);

