const timestampInput = document.querySelector("#timestamp");
const yearSpan = document.querySelector("#year");

if (timestampInput) {
    timestampInput.value = new Date().toISOString();
}

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const openButtons = document.querySelectorAll(".benefit-btn");
const dialogs = document.querySelectorAll(".benefit-dialog");

openButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modalId = button.dataset.modal;
        const dialog = document.getElementById(modalId);
        if (dialog && typeof dialog.showModal === "function") {
            dialog.showModal();
        }
    });
});

dialogs.forEach((dialog) => {
    const closeButton = dialog.querySelector(".close-modal");
    if (closeButton) {
        closeButton.addEventListener("click", () => dialog.close());
    }

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
});