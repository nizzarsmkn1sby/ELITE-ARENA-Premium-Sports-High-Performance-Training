// Elite Arena - High Performance Script

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");

  // Sticky Header Logic
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Reveal Animation on Scroll
  const revealElements = document.querySelectorAll(
    ".program-card, .stat-item, .section-header, .feature-item"
  );

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((el) => {
      const elTop = el.getBoundingClientRect().top;

      if (elTop < triggerBottom) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  // Initialize reveal elements styles
  revealElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Simple animation for hamburger
        const spans = menuToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(s => s.style.transform = 'none');
            spans[1].style.opacity = '1';
        });
    });
  }
});
