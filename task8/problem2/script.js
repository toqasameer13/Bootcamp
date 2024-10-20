function checkDateFormat(dateString) {
  if (dateString.length !== 10) {
    alert("Wrong Date Format");
    return;
  }

  if (dateString[2] !== "-" || dateString[5] !== "-") {
    alert("Wrong Date Format");
    return;
  }

  let day = dateString.substring(0, 2);
  let month = dateString.substring(3, 5);
  let year = dateString.substring(6, 10);

  day = parseInt(day);
  month = parseInt(month) - 1;
  year = parseInt(year);

  ////////// Create a new Date object/////
  let date = new Date(year, month, day);

  if (
    date.getDate() === day &&
    date.getMonth() === month &&
    date.getFullYear() === year
  ) {
    alert("Date is: " + date.toDateString());
  } else {
    alert("Wrong Date Format");
  }
}

let userInput = prompt(
  "Enter your birth date in the format DD-MM-YYYY (e.g., 22-01-1999):"
);

checkDateFormat(userInput);
