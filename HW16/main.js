class Student {
  constructor(name, lastName, birthYear) {
    this.name = name;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
    return sum / this.grades.length;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  getAttendanceCount() {
    return this.attendance.filter((status) => status === true).length;
  }

  markAttendance(present) {
    const nullIndex = this.attendance.indexOf(null);
    if (nullIndex !== -1) {
      this.attendance[nullIndex] = present;
      console.log(
        `${this.name} ${this.lastName} is ${present ? "present" : "absent"}.`
      );
    } else {
      console.log(`Maximum attendance limit reached.`);
    }
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceCount() / 25;

    if (averageGrade >= 90 && attendanceRate >= 0.9) {
      return "Молодець!";
    } else if (averageGrade >= 90 || attendanceRate >= 0.9) {
      return "Добре, але можна краще.";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("John", "Doe", 1998);
const student2 = new Student("Alice", "Smith", 1999);

student1.addGrade(95);
student1.addGrade(65);
student1.addGrade(90);
student1.addGrade(95);
student1.addGrade(65);
student1.addGrade(90);
student1.markAttendance(true);
student1.markAttendance(true);
student1.markAttendance(false);
student1.markAttendance(true);
student1.markAttendance(true);
student1.markAttendance(false);
student1.markAttendance(true);
student1.markAttendance(true);
student1.markAttendance(false);
student1.markAttendance(true);
student1.markAttendance(true);
student1.markAttendance(false);
student1.markAttendance(true);
student1.markAttendance(true);
student1.markAttendance(false);
student1.markAttendance(true);
student1.markAttendance(true);
student1.markAttendance(false);

student2.addGrade(80);
student2.addGrade(85);
student2.addGrade(90);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);
student2.markAttendance(true);

console.log(`${student1.name} ${student1.lastName} age: ${student1.getAge()}`);
console.log(
  `${student1.name} ${
    student1.lastName
  } average grade: ${student1.getAverageGrade()}`
);
console.log(
  `${student1.name} ${student1.lastName} attendance rate: ${
    student1.getAttendanceCount() / 25
  }`
);
console.log(
  `${student1.name} ${student1.lastName} summary: ${student1.summary()}`
);

console.log(`${student2.name} ${student2.lastName} age: ${student2.getAge()}`);
console.log(
  `${student2.name} ${
    student2.lastName
  } average grade: ${student2.getAverageGrade()}`
);
console.log(
  `${student2.name} ${student2.lastName} attendance rate: ${
    student2.getAttendanceCount() / 25
  }`
);
console.log(
  `${student2.name} ${student2.lastName} summary: ${student2.summary()}`
);
