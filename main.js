// script.js
document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("user-form");
    const btcSection = document.getElementById("btc-section");
    const confirmationSection = document.getElementById("confirmation-section");
    const confirmButton = document.getElementById("confirm-transaction");

    userForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Display the BTC address section
        userForm.classList.add("hidden");
        btcSection.classList.remove("hidden");
    });

    confirmButton.addEventListener("click", () => {
        // Display the confirmation message
        btcSection.classList.add("hidden");
        confirmationSection.classList.remove("hidden");
    });
});
