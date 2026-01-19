document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.remove("modern-theme", "windows95-theme");
        body.classList.add(savedTheme);
        themeToggle.textContent = savedTheme === "windows95-theme" ? "Switch to Modern" : "Switch to Windows 95";
    } else {
        body.classList.add("modern-theme"); // Default if nothing is saved
    }

    // Theme toggle event
    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("modern-theme")) {
            body.classList.remove("modern-theme");
            body.classList.add("windows95-theme");
            themeToggle.textContent = "Switch to Modern";
            localStorage.setItem("theme", "windows95-theme");
        } else {
            body.classList.remove("windows95-theme");
            body.classList.add("modern-theme");
            themeToggle.textContent = "Switch to Windows 95";
            localStorage.setItem("theme", "modern-theme");
        }
    });
});

