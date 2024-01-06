document.addEventListener("DOMContentLoaded", (event) => {
  document
    .getElementById("emailForm")
    .addEventListener("submit", function (event) {
      var emailInput = document.getElementById("email");
      var errorMessage = document.getElementById("errorMessage");

      console.log("Email Value:", emailInput.value);
      console.log("Is Email Valid:", emailInput.validity.valid);

      if (!emailInput.validity.valid) {
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none";
      }

      event.preventDefault();
    });
});
