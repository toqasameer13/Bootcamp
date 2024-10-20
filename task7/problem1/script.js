function addUsername(list) {
  let currentYear = new Date().getFullYear();

  return list.map((person) => {
    let birthYear = currentYear - person.age;
    let username =
      person.firstName.toLowerCase() +
      person.lastName[0].toLowerCase() +
      birthYear;

    return {
      ...person,
      username: username,
    };
  });
}

var list1 = [
  {
    firstName: "Emily",
    lastName: "N.",
    country: "Ireland",
    continent: "Europe",
    age: 30,
    language: "Ruby",
  },
  {
    firstName: "Nor",
    lastName: "E.",
    country: "Malaysia",
    continent: "Asia",
    age: 20,
    language: "Clojure",
  },
];

console.log(addUsername(list1));
