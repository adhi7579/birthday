
// Correct password
const correctPassword = "123456";

// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {

    // Create password screen
    const passwordScreen = document.createElement("div");
    passwordScreen.id = "passwordScreen";

    passwordScreen.innerHTML = `
        <div class="password-box">
            <h1>🎂 A Special Surprise! 🎂</h1>
            <p>Someone has prepared a birthday surprise for you.</p>
            <p>Enter the secret password to open it ❤️</p>

            <input
                type="password"
                id="passwordInput"
                placeholder="Enter 6-digit password"
                maxlength="6"
            />

            <button id="unlockButton">Unlock Surprise 🔓</button>

            <p id="errorMessage"></p>
        </div>
    `;

    document.body.appendChild(passwordScreen);

    // Hide birthday card initially
    const card = document.querySelector(".card");
    card.style.display = "none";

    // Password elements
    const passwordInput = document.getElementById("passwordInput");
    const unlockButton = document.getElementById("unlockButton");
    const errorMessage = document.getElementById("errorMessage");

    // Unlock function
    function unlockCard() {

        if (passwordInput.value === correctPassword) {

            errorMessage.textContent = "";

            passwordScreen.classList.add("fade-out");

            setTimeout(() => {
                passwordScreen.remove();
                card.style.display = "block";
                card.classList.add("show-card");
            }, 700);

        } else {

            errorMessage.textContent = "❌ Wrong password! Try again.";

            passwordInput.value = "";
            passwordInput.focus();
        }
    }

    // Button click
    unlockButton.addEventListener("click", unlockCard);

    // Enter key support
    passwordInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            unlockCard();
        }
    });

    passwordInput.focus();
});
