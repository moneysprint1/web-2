// Modal Logic
const modal = document.querySelector(".modal");
const btnLogin = document.querySelector(".btn-login");
const closeBtn = document.querySelector(".close");

btnLogin.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Fake Login System
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    if (username === "admin" && password === "libraryboss") {
        alert("Access granted! Welcome, Librarian.");
        modal.style.display = "none";
    } else {
        loginError.textContent = "Invalid credentials. Try again.";
    }
});

// Animated Stats Counter
function animateValue(id, target, duration = 2000) {
    const element = document.getElementById(id);
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Initialize stats on page load
window.addEventListener("load", () => {
    animateValue("total-books", 1024);
    animateValue("active-loans", 287);
    animateValue("overdue-books", 42);

    // Chart.js Integration
    const ctx = document.getElementById("bookChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Fiction", "Non-Fiction", "Science", "History", "Arts"],
            datasets: [{
                label: "Books Borrowed This Month",
                data: [120, 85, 70, 45, 30],
                backgroundColor: [
                    "#6a1b9a",
                    "#ffab00",
                    "#d32f2f",
                    "#1976d2",
                    "#388e3c"
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});