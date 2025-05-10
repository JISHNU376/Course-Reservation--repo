document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  // UI feedback
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Registering...";

  try {
    const formData = {
      username: document.getElementById("username").value.trim(),
      email: document.getElementById("email").value.trim(),
      password: document.getElementById("password").value,
      confirmPassword: document.getElementById("confirmPassword").value
    };

    // Client-side validation
    if (!formData.username || !formData.email || !formData.password) {
      throw new Error("All fields are required");
    }
    if (formData.password !== formData.confirmPassword) {
      throw new Error("Passwords do not match");
    }

    console.log("Submitting:", formData);

    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData),
      credentials: "same-origin" // Include if using sessions
    });

    // Handle non-JSON responses
    if (!response.headers.get('content-type')?.includes('application/json')) {
      const text = await response.text();
      throw new Error(`Invalid response: ${text}`);
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `Server error: ${response.status}`);
    }

    console.log("Registration successful:", data);
    alert("Registration successful!");
    window.location.href = "login.html";

  } catch (error) {
    console.error("Registration error:", error);
    
    // Specific error messages
    let errorMessage = error.message;
    if (error.message.includes("Failed to fetch")) {
      errorMessage = "Cannot connect to server. Please check your network or try again later.";
    } else if (error instanceof SyntaxError) {
      errorMessage = "Invalid server response";
    }
    
    alert(errorMessage);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  }
});