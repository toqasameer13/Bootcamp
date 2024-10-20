class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  describe() {
    return `${this.name} is a ${this.role}`;
  }
}

// Admin, Moderator, and Guest are all subclasses of User
class Admin extends User {
  constructor(name) {
    super(name, "Admin");
  }

  manageSystem() {
    return `${this.name} is managing the system.`;
  }
}

class Moderator extends User {
  constructor(name) {
    super(name, "Moderator");
  }

  moderateContent() {
    return `${this.name} is moderating content.`;
  }
}

class Guest extends User {
  constructor(name) {
    super(name, "Guest");
  }

  browseSite() {
    return `${this.name} is browsing the site.`;
  }
}

class UserFactory {
  createUser(name, role) {
    switch (role) {
      case "Admin":
        return new Admin(name);
      case "Moderator":
        return new Moderator(name);
      case "Guest":
        return new Guest(name);
      default:
        throw new Error(`Role '${role}' is not recognized.`);
    }
  }
}

// usage example
const factory = new UserFactory();

const adminUser = factory.createUser("Alice", "Admin");
console.log(adminUser.describe());
console.log(adminUser.manageSystem());

const modUser = factory.createUser("Bob", "Moderator");
console.log(modUser.describe());
console.log(modUser.moderateContent());

const guestUser = factory.createUser("Charlie", "Guest");
console.log(guestUser.describe());
console.log(guestUser.browseSite());
