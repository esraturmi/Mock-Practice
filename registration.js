const signupForm = document.getElementById("signup-form");
const usernameInput = document.getElementById("signup-name");
const emailInput = document.getElementById("signup-email");
const passwordInput = document.getElementById("signup-password");

if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim().toLowerCase();
        const password = passwordInput.value;

        if (!username || !email || !password) {
            alert("Please fill all fields");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const emailExists = users.some((user) => user.email === email);

        if (emailExists) {
            alert("An account with this email already exists");
            return;
        }

        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful");
        window.location.href = "index.html";
    });
}
