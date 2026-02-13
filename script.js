/**
 * ELITE ARENA - Skrip Performa Tinggi
 * Dokumentasi: Mengelola sticky header, gulir halus, animasi reveal, dan menu seluler.
 */

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const body = document.body;

    // 1. Logika Header Lengket (Sticky Header)
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };
    window.addEventListener("scroll", handleScroll);

    // 2. Navigasi Menu Seluler
    const toggleMenu = () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
        
        if (navLinks.classList.contains("active")) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    };

    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }

    // 3. Gulir Halus & Penutupan Menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Tutup menu jika terbuka
                if (navLinks.classList.contains("active")) {
                    toggleMenu();
                }

                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. Animasi Muncul Saat Gulir (Reveal Animation)
    const revealElements = document.querySelectorAll(
        ".program-card, .stat-item, .section-header, .feature-item, .about-text, .about-image-container"
    );

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach((el) => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add("revealed");
            }
        });
    };

    // Inisialisasi status elemen animasi
    revealElements.forEach((el) => {
        el.classList.add("reveal-init");
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Cek saat pertama kali dimuat

    // Tutup menu saat klik di luar kontainer nav-links (untuk mobile)
    navLinks.addEventListener("click", (e) => {
        if (e.target === navLinks) {
            toggleMenu();
        }
    });
});
