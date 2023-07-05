Interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student {
  firstName: "Alale",
  lastName: "Simon",
  age: 28,
  location: "Lagos"
}

const secondStudent: Student {
  firstName: "Usman",
  lastName: "Abubakar",
  age: 23,
  location: "Abuja"
}

const studentList: Student = [firstStudent, secondStudent];

console.log("Name       Location");

for (let student of studentList) {
  console.log(`${student.firstName}    ${student.location}`);
}
