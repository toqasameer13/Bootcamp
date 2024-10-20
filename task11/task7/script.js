const Animal = {
  type: "Animal",
  speak() {
    console.log(`${this.type} makes a noise.`);
  },
};

const Dog = Object.create(Animal);

Dog.type = "Dog";
Dog.speak = function () {
  console.log(`${this.type} barks.`);
};

const Cat = Object.create(Animal);
Cat.type = "Cat";
Cat.speak = function () {
  console.log(`${this.type} meows.`);
};

// use objects
Animal.speak();
Dog.speak();
Cat.speak();
