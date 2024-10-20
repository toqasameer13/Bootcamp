document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let job = document.getElementById("job").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("job", job);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("address", address);
    localStorage.setItem("gender", gender);

    window.location.href = "display.html";
  });
