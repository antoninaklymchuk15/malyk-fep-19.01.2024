class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi! My name is ${this.name} and I'm a ${this.gender}.`);
  }

  setResidingFlat(flat) {
    this.residingFlat = flat;
  }
}

class Flat {
  constructor() {
    this.residents = [];
  }

  addResident(human) {
    this.residents.push(human);
    human.setResidingFlat(this);
  }
}

class House {
  constructor(maxFlats) {
    this.maxFlats = maxFlats;
    this.flats = [];
  }

  addFlat(flat) {
    if (this.flats.length < this.maxFlats) {
      this.flats.push(flat);
    } else {
      console.log(`Maximum capacity reached. New flats cannot be added.`);
    }
  }

  toString() {
    let info = `House with ${this.flats.length} flats:\n`;
    this.flats.forEach((flat, index) => {
      info += `Flat ${index + 1} residents:\n`;
      flat.residents.forEach((resident, resIndex) => {
        info += `${resIndex + 1}. ${resident.name} (${resident.gender})\n`;
      });
    });
    return info;
  }
}

const person1 = new Human("George", "Male");
const person2 = new Human("Alice", "Female");
const person3 = new Human("Jeff", "Male");
const person4 = new Human("Stacy", "Female");

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();
const flat4 = new Flat();

flat1.addResident(person1);
flat2.addResident(person2);
flat3.addResident(person3);
flat4.addResident(person4);

const building = new House(3);

building.addFlat(flat1);
building.addFlat(flat2);
building.addFlat(flat3);
building.addFlat(flat4);

console.log(building.toString());
