document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // You can add form validation or submit data to a server here.
    // For simplicity, this example prevents the form from submitting.
    alert("Signup form submitted!");
  });
