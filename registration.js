document.getElementById("registration_form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.pass.value;
  
    const user = { name, email, password };
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const exists = users.some(u => u.email === email);
  
    if (exists) {
      document.getElementById("registration_response").innerText = "User already exists.";
    } else {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      document.getElementById("registration_response").innerText =
        "User registered successfully. Redirecting to login...";
  
      setTimeout(() => {
        window.location.href = "login.html";
      }, 3000);
    }
  });
  