class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound.`);
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Example usage:
const cat = new Cat("Cat");
console.log(cat.species);  // Output: Cat
cat.makeSound();  // Output: The Cat makes a sound.
cat.purr();  // Output: purr

const dog = new Dog("Dog");
console.log(dog.species);  // Output: Dog
dog.makeSound();  // Output: The Dog makes a sound.
dog.bark();  // Output: woof
