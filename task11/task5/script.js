class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  save() {
    console.log(`${this.name} has been saved!`);
  }
}

function logDecorator(method) {
  return function (...args) {
    console.log(`Method ${method.name} was called with arguments:`, args);
    return method.apply(this, args); // Call the original method
  };
}

function validateDecorator(method) {
  return function (...args) {
    if (this.age < 18) {
      console.log("User is too young to save.");
      return false;
    }
    return method.apply(this, args);
  };
}
function decorateUser(user) {
  user.save = logDecorator(user.save);
  user.save = validateDecorator(user.save);
}
function applyDecorators(obj, methodName, decorators) {
  let method = obj[methodName];
  decorators.forEach((decorator) => {
    method = decorator(method);
  });
  obj[methodName] = method;
}
// creating users
const user1 = new User("Alice", 17);
decorateUser(user1);
user1.save();

const user2 = new User("Bob", 25);
decorateUser(user2);
user2.save();

const user3 = new User("Charlie", 30);
applyDecorators(user3, "save", [logDecorator, validateDecorator]);
user3.save();
