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
document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

/* spotlight mouse follow */
const spotlight = document.getElementById("spotlight");
document.addEventListener("mousemove", e => {
  spotlight.style.left = e.pageX - 300 + "px";
  spotlight.style.top = e.pageY - 300 + "px";
});

/* 3D tilt image */
const tilt = document.getElementById("tilt");
document.addEventListener("mousemove", e => {
  let x = (window.innerWidth / 2 - e.pageX) / 25;
  let y = (window.innerHeight / 2 - e.pageY) / 25;
  tilt.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

/* magnetic buttons */
document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px,${y * 0.2}px)`;
  });
  btn.addEventListener("mouseleave", () => btn.style.transform = "translate(0,0)");
});

