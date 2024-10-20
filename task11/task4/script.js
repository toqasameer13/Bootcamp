class Singleton {
  static #instance = null;

  constructor() {
    if (Singleton.#instance) {
      throw new Error("You can only create one instance of Singleton!");
    }
    Singleton.#instance = this;

    this.globalState = {};
  }

  static getInstance() {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }
    return Singleton.#instance;
  }

  setGlobalState(key, value) {
    this.globalState[key] = value;
  }

  getGlobalState(key) {
    return this.globalState[key];
  }
}
// example
try {
  const singleton1 = Singleton.getInstance();
  singleton1.setGlobalState("theme", "dark");

  const singleton2 = Singleton.getInstance();
  console.log(singleton2.getGlobalState("theme"));

  // This will give an error because the constructor is private
  const anotherInstance = new Singleton();
} catch (e) {
  console.error(e.message);
}
