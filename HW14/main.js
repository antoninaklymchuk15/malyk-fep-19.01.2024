class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old.`);
  }
}

class Vehicle {
  constructor(brand, model, year, number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
  }

  checkOwner(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log(`Car owner should be older than 18 years old!`);
    }
  }

  carInfo() {
    console.log(`Car brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year of production: ${this.year}`);
    console.log(`License plate: ${this.number}`);

    if (this.owner) {
      console.log(`Car owner name: ${this.owner.name}`);
    } else {
      console.log(`This car doesn't have an owner.`);
    }
  }
}

const person1 = new Human("George", 25);
const person2 = new Human("Alice", 30);
const person3 = new Human("Jeff", 22);
const person4 = new Human("Stacy", 14);

person1.introduce();
person2.introduce();
person3.introduce();
person4.introduce();

const car1 = new Vehicle("Volvo", "Recharge", 2021, "CX2430KD");
const car2 = new Vehicle("Volkswagen", "ID4", 2023, "KH2398JH");
const car3 = new Vehicle("Audi", "E Tron", 2021, "FF3482LJ");
const car4 = new Vehicle("Honda", "M-NV", 2022, "FD2344SD");

car1.checkOwner(person1);
car2.checkOwner(person2);
car3.checkOwner(person3);
car4.checkOwner(person4);

console.log("First car info:");
car1.carInfo();
console.log("Second car info:");
car2.carInfo();
console.log("Third car info:");
car3.carInfo();
console.log("Fourth car info:");
car4.carInfo();
