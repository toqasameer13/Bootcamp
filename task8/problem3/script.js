function checkDateFormat(dateString) {
  if (dateString.length !== 10) {
    throw new Error("Date must be 10 characters long.");
  }

  if (dateString[2] !== "-" || dateString[5] !== "-") {
    throw new Error(
      "Date must be in DD-MM-YYYY format with hyphens (-) at the correct positions."
    );
  }

  let day = dateString.substring(0, 2);
  let month = dateString.substring(3, 5);
  let year = dateString.substring(6, 10);

  day = parseInt(day);
  month = parseInt(month) - 1;
  year = parseInt(year);

  let date = new Date(year, month, day);

  if (
    date.getDate() === day &&
    date.getMonth() === month &&
    date.getFullYear() === year
  ) {
    return date;
  } else {
    throw new Error("Invalid date values. The date does not exist.");
  }
}
////////////
function getAndValidateDate() {
  let userInput = prompt(
    "Enter your birth date in the format DD-MM-YYYY (e.g., 22-01-1999):"
  );

  try {
    let date = checkDateFormat(userInput);
    alert("Date is valid: " + date.toDateString());
  } catch (error) {
    alert("Error: " + error.message);
  }
}

getAndValidateDate();
