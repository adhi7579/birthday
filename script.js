
document.addEventListener("DOMContentLoaded", () => {

    const correctPassword = "123456";

    const card = document.querySelector(".card");
    const imgBox = document.querySelector(".imgBox");

    // Create password overlay inside the card
    const passwordScreen = document.createElement("div");

    passwordScreen.id = "cardPassword";

    passwordScreen.innerHTML = `
        <div class="password-content">
            <h2>🎂 Happy Birthday! 🎂</h2>
            <p>A special surprise is waiting for you ❤️</p>

            <input
                type="password"
                id="passwordInput"
                placeholder="Enter secret password"
                maxlength="6"
            />

            <button id="unlockButton">Open My Surprise ❤️</button>

            <p id="errorMessage"></p>
        </div>
    `;

    // Position password on the card itself
    card.appendChild(passwordScreen);

    // Disable card hover until password is correct
    card.classList.add("locked");

    const input = document.getElementById("passwordInput");
    const button = document.getElementById("unlockButton");
    const error = document.getElementById("errorMessage");

    function unlockCard() {

        if (input.value === correctPassword) {

            error.textContent = "";

            // Remove password overlay
            passwordScreen.classList.add("password-hidden");

            // Enable card opening
            card.classList.remove("locked");

            setTimeout(() => {
                passwordScreen.remove();
            }, 600);

        } else {

            error.textContent = "❌ Incorrect password! Try again.";
            input.value = "";
            input.focus();
        }
    }

    button.addEventListener("click", unlockCard);

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            unlockCard();
        }
    });

});
