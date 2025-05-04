let login = document.getElementById("login_form");
let res = document.getElementById("login_response");

login.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let email = evt.target.email.value;
  let password = evt.target.pass.value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let foundUser = users.find(user => user.email === email && user.password === password);

  if (foundUser) {
    res.innerText = "Login successful. Redirecting to dashboard...";
    localStorage.setItem("name", foundUser.name);
    localStorage.setItem("email", foundUser.email);
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 2000);
  } else {
    res.innerText = "Invalid credentials.";
  }
});
