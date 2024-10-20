const FlyableMixin = (BaseClass) =>
  class extends BaseClass {
    fly() {
      console.log(`${this.constructor.name} is flying!`);
    }
  };
class Bird {
  constructor(name) {
    this.name = name;
  }

  chirp() {
    console.log(`${this.name} is chirping!`);
  }
}

class Airplane {
  constructor(model) {
    this.model = model;
  }

  takeoff() {
    console.log(`${this.model} is taking off!`);
  }
}

class Superhero {
  constructor(alias) {
    this.alias = alias;
  }

  fightCrime() {
    console.log(`${this.alias} is fighting crime!`);
  }
}
const FlyableBird = FlyableMixin(Bird);
const FlyableAirplane = FlyableMixin(Airplane);
const FlyableSuperhero = FlyableMixin(Superhero);

// Creating instances
const eagle = new FlyableBird("Eagle");
const boeing = new FlyableAirplane("Boeing 747");
const superman = new FlyableSuperhero("Superman");

eagle.fly();
boeing.fly();
superman.fly();

eagle.chirp();
boeing.takeoff();
superman.fightCrime();
