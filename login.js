const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = emailInput.value.trim().toLowerCase();
        const password = passwordInput.value;

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const matchedUser = users.find(
            (user) => user.email === email && user.password === password
        );

        if (!matchedUser) {
            alert("Invalid email or password");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(matchedUser));
        window.location.href = "welcome.html";
    });
}