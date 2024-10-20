class MyClass {
  #privateField1;
  #privateField2;

  constructor(field1, field2) {
    this.#privateField1 = field1;
    this.#privateField2 = field2;
  }

  get field1() {
    return this.#privateField1;
  }

  set field1(value) {
    this.#privateField1 = value;
  }

  get field2() {
    return this.#privateField2;
  }

  set field2(value) {
    this.#privateField2 = value;
  }

  #privateMethod() {
    console.log(
      "Accessing private method:",
      this.#privateField1,
      this.#privateField2
    );
  }

  callPrivateMethod() {
    this.#privateMethod();
  }
}

const instance = new MyClass("Initial Value 1", "Initial Value 2");

console.log(instance.field1);
instance.field1 = "New Value 1";
console.log(instance.field1);

console.log(instance.field2);
instance.field2 = "New Value 2";
console.log(instance.field2);

instance.callPrivateMethod(); // ؤalls the private method
