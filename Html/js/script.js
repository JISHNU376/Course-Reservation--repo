document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const identifier = document.getElementById('identifier').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!identifier || !password) {
        alert('Please enter both email/username and password.');
        return;
    }

    try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ identifier, password })
        });

        const data = await res.json();

        if (res.ok) {
            alert("Login successful");
            window.location.href = "index.html";
        } else {
            alert(data.message || "Login failed");
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred. Please try again later.");
    }
});
