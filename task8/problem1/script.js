function getDayName(dateString) {
  let date = new Date(dateString);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[date.getDay()];
}

// Example usage:
console.log(getDayName("2024-10-06"));
console.log(getDayName("2024-10-04"));
