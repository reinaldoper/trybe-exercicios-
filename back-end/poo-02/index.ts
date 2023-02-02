/* class Animal {
  constructor(public name: string, private birthDate: Date) { }

  get age() {
    
    const timeDiff = Math.abs(
      Date.now() -
      new Date(this.birthDate).getTime()
    );
    

  
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
  
}

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando!`);
  }
}

const tiger = new Mammal(
  'Tigre',
  new Date(Date.parse('May 03, 2020')),
);

const main = (animal: Animal) => {
  console.log(animal.age);
}

main(tiger);
tiger.walk();



class Bird extends Animal {
  fly() {
    console.log(`${this.name} está voando!`);
  }
}

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Jun 07, 2017')),
);

console.log(parrot.age);
parrot.fly();


class Superclass {
  
  isSuper: boolean;

  constructor() {
   
    this.isSuper = true;
  }

  
  public sayHello(): void {
    console.log('Olá mundo!');
  }
}


class Subclass extends Superclass { }


const myFunc = (object: Superclass) => {
 
  object.sayHello();
};


const sup = new Superclass();
const sub = new Subclass();


myFunc(sup);
myFunc(sub); */