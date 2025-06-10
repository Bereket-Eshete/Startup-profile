document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailError").textContent =
      "Enter a valid email address.";
    isValid = false;
  }
  if (message === "") {
    document.getElementById("messageError").textContent =
      "Message is required.";
    isValid = false;
  }
  if (isValid) {
    alert("Thank you! Your message has been submitted.");
    this.reset();
  }
});
