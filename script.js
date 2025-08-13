 // Login credentials
const validUsername = "morime";
const validPassword = "14-08-2008";

const loginPopup = document.getElementById("login-popup");
const mainContent = document.getElementById("main-content");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");

function showMainContent() {
  loginPopup.style.display = "none";
  mainContent.style.display = "block";
  startTypewriterEffect();
  createFloatingParticles();
}

// Check if user is logged in via localStorage (or cookie)
function checkLogin() {
  const loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn === "true") {
    showMainContent();
  } else {
    loginPopup.style.display = "flex";
  }
}




 
// ===== Target unlock time =====
const now = new Date();
 let targetUnlock = new Date(now.getFullYear(), now.getMonth(), 13, 25, 47, 0);
if (targetUnlock < now) {
    targetUnlock.setMonth(targetUnlock.getMonth() + 1);
}

// ===== Countdown =====
function initCountdown() {
    const dd = document.getElementById("dd");
    const hh = document.getElementById("hh");
    const mm = document.getElementById("mm");
    const ss = document.getElementById("ss");
    const label = document.getElementById("nextBdayLabel");

    function tick() {
        const now = new Date();
        const diff = targetUnlock - now;

        if (diff <= 0) {
            label.textContent = "Unlocked! 🎉";
            dd.textContent = hh.textContent = mm.textContent = ss.textContent = "00";
            return;
        }

        const days = Math.floor(diff / 86400000);
        const hours = Math.floor((diff % 86400000) / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);

        dd.textContent = String(days).padStart(2, "0");
        hh.textContent = String(hours).padStart(2, "0");
        mm.textContent = String(minutes).padStart(2, "0");
        ss.textContent = String(seconds).padStart(2, "0");

        label.textContent = targetUnlock.toString();
    }

    tick();
    setInterval(tick, 1000);
}
initCountdown();







// Handle login form submit
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === validUsername && password === validPassword) {
    localStorage.setItem("loggedIn", "true");
    loginError.textContent = "";
    showMainContent();
  } else {
    loginError.textContent = "Invalid username or password.";
  }
});

// Scroll to section helper
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Toggle like heart on photo cards
function toggleLike(button) {
  button.classList.toggle("liked");
  const heartIcon = button.querySelector(".heart-icon");
  if (button.classList.contains("liked")) {
    heartIcon.textContent = "❤️";
  } else {
    heartIcon.textContent = "🤍";
  }
}

// Typewriter effect for hero heading
function startTypewriterEffect() {
  const typewriterEl = document.getElementById("typewriter");
  const text = "Happy Birthday, Morime! 💕";
  let index = 0;
  typewriterEl.textContent = "";
  
  function type() {
    if (index < text.length) {
      typewriterEl.textContent += text.charAt(index);
      index++;
      setTimeout(type, 90);
    }
  }
  type();
}

// Floating background particles (hearts)
function createFloatingParticles() {
  const particlesContainer = document.getElementById("particles");
  const hearts = ["💕", "❤", "💗", "💖", "💞"];
  const maxParticles = 25;
  particlesContainer.innerHTML = "";
  for (let i = 0; i < maxParticles; i++) {
    const span = document.createElement("span");
    span.classList.add("particle");
    span.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = Math.random() * 100 + "vh";
    span.style.fontSize = (10 + Math.random() * 20) + "px";
    span.style.animationDuration = (5 + Math.random() * 5) + "s";
    span.style.opacity = 0.3 + Math.random() * 0.7;
    particlesContainer.appendChild(span);
  }
}

// Run checkLogin when DOM is ready (more reliable on GitHub Pages)
document.addEventListener("DOMContentLoaded", checkLogin);

document.addEventListener("DOMContentLoaded", function () {
  const loginPopup = document.getElementById("login-popup");
  const mainContent = document.getElementById("main-content");
  if (loginPopup && mainContent) {
    loginPopup.style.display = "flex";
    mainContent.style.display = "none";
  }
});


 // Like button toggle with animation
function toggleLike(button) {
  const heartIcon = button.querySelector(".heart-icon");

  // Toggle liked state
  button.classList.toggle("liked");

  if (button.classList.contains("liked")) {
    heartIcon.textContent = "❤️"; // filled heart
    // add pop animation
    button.classList.add("pop");
    setTimeout(() => button.classList.remove("pop"), 300);
  } else {
    heartIcon.textContent = "🤍"; // empty heart
  }
}



function initCountdownTo11PM(day) {
  const dd = document.getElementById("dd");
  const hh = document.getElementById("hh");
  const mm = document.getElementById("mm");
  const ss = document.getElementById("ss");
  const label = document.getElementById("nextBdayLabel");

  if (!dd || !hh || !mm || !ss || !label) return;

  const now = new Date();
  let target = new Date(now.getFullYear(), now.getMonth(), day, 23, 0, 0); // 11:00 PM

  // যদি আজকের 11 PM পেরিয়ে যায়, পরের মাসে সেট করবো
  if (target < now) {
    target.setMonth(target.getMonth() + 1);
  }

  label.textContent = target.toString();

  function tick() {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      label.textContent = "Time's up! 🎉";
      dd.textContent = hh.textContent = mm.textContent = ss.textContent = "00";
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    dd.textContent = String(days).padStart(2, "0");
    hh.textContent = String(hours).padStart(2, "0");
    mm.textContent = String(minutes).padStart(2, "0");
    ss.textContent = String(seconds).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  initCountdownTo11PM(13); // 13 তারিখ 11 PM
});
