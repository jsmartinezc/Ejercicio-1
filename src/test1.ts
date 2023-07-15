// exercise 1
const myName = "Sebastian";

// exercise 2
const favoriteNumber = 50;

// exercise 3
const animals = [
  "gato",
  "perro",
  "vaca",
  "caballo",
  "loro",
  "cocodrillo",
  "cuervo",
  "canguro",
  "girafa",
  "elefante",
];

// exercise 4
class organization {
  name: string = "";
  slogan: string = "";
  quantityOfWorkers: number = 0;
  bussisnesHours: string = "";
  remoteJob: boolean = false;
  creationDate: number = 0;
};

let organizationInfo: organization[];

interface organization {
  name: string;
  slogan: string;
  quantityOfWorkers: number;
  bussisnesHours: string;
  remoteJob: boolean;
  creationDate: number;
};

// exercise 5
class students {
  name: string = "";
  age: number = 0;
  grade: number = 0;

};

let studensInfo: students[];

interface students {
  name: string;
  age: number;
  grade: number;
};

// exercise 6
function calculateCircunference(radio: number) {
  return 2 * Math.PI * radio;
};

calculateCircunference(1);

console.log(calculateCircunference);

// exercise 7
function findHighestNumber(num1: number, num2: number, num3: number): number {
  let high = num1;

  if (num2 > high) {
    high = num2;
  }

  if (num3 > high) {
    high = num3;
  }

  return high;
};

const highestNumber: number = findHighestNumber(10, 5, 8);
console.log(highestNumber);

// exercise 8
class nameOfthisPerson {
  name: string = "";

  constructor(name: string){
    this.name = name;
  };

  sayHello(){
    return "Hello, my name is " + this.name;
  };

};

let nameOfThePerson = new nameOfthisPerson("Sebastian");
let newVaule = nameOfThePerson.sayHello

console.log(newVaule);

