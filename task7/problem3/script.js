function askForMissingDetails(list) {
  return list
    .filter((dev) => Object.keys(dev).some((key) => dev[key] === null))
    .map((dev) => {
      let missingKey = Object.keys(dev).find((key) => dev[key] === null);
      dev.question = `Hi, could you please provide your ${missingKey}.`;
      return dev;
    });
}

var list1 = [
  {
    firstName: null,
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: null,
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

console.log(askForMissingDetails(list1));
