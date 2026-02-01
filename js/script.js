document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const spans = menuToggle.querySelectorAll("span");

      spans[0].style.transform = navLinks.classList.contains("active")
        ? "rotate(45deg) translate(5px, 5px)"
        : "rotate(0) translate(0, 0)";

      spans[1].style.opacity = navLinks.classList.contains("active")
        ? "0"
        : "1";

      spans[2].style.transform = navLinks.classList.contains("active")
        ? "rotate(-45deg) translate(7px, -6px)"
        : "rotate(0) translate(0, 0)";
    });
  }

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks?.classList.remove("active");
      const spans = menuToggle?.querySelectorAll("span");
      if (!spans) return;

      spans[0].style.transform = "rotate(0) translate(0, 0)";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "rotate(0) translate(0, 0)";
    });
  });

  function reveal() {
    document.querySelectorAll(".reveal").forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 150) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();

  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 100);
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = new FormData(e.target).get("name");
      alert(`Thank you, ${name}! 🚀\n\nYour message has been received.`);
      e.target.reset();
    });
  }

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll(".gradient-orb").forEach((el, i) => {
      el.style.transform = `translateY(${scrolled * (0.5 + i * 0.1)}px)`;
    });
  });
});
