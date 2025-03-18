// auth.js

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector(".signup-form");
    const loginForm = document.querySelector(".login-form");

    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;

            // Save user data to localStorage (just for demonstration)
            localStorage.setItem("user", JSON.stringify({ name, email, password }));
            alert("Registration Successful! Redirecting to Login Page...");
            window.location.href = "login.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;
            
            // Retrieve user data
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                alert("Login Successful! Redirecting to Dashboard...");
                window.location.href = "dashboard.html";  // Redirect to a dashboard or main page
            } else {
                alert("Invalid Email or Password. Please try again.");
            }
        });
    }
});