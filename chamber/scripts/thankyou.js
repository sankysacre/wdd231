const params = new URLSearchParams(window.location.search);
const yearSpan = document.querySelector("#year");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const fieldMap = {
    "out-first-name": "first-name",
    "out-last-name": "last-name",
    "out-email": "email",
    "out-phone": "phone",
    "out-organization": "organization",
    "out-timestamp": "timestamp"
};

Object.entries(fieldMap).forEach(([elementId, paramKey]) => {
    const target = document.getElementById(elementId);
    if (target) {
        const value = params.get(paramKey);
        target.textContent = value && value.trim() !== "" ? value : "Not provided";
    }
});