// 🔥 Smooth Scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// 📱 Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}


// ⌨️ Typing animation
const text = "Hi, I'm a Web Developer 🚀";
let i = 0;

function typeWriter() {
  const target = document.getElementById("typing");
  if (!target) return;

  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}

typeWriter();


// ✨ Scroll reveal animation
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));


// 🧠 Optional: Navbar background change on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("bg-black/70", "backdrop-blur-md");
  } else {
    header.classList.remove("bg-black/70", "backdrop-blur-md");
  }
});