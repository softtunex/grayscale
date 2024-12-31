document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-list a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Form validation and submission
  const contactForm = document.querySelector(".contact-form");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm
      .querySelector('input[placeholder="Your Name"]')
      .value.trim();
    const email = contactForm
      .querySelector('input[placeholder="Your Email"]')
      .value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (name && email && message) {
      alert("Thank you for reaching out! We will get back to you soon.");
      contactForm.reset();
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });

  // Highlight active navigation link on scroll
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-list a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});
