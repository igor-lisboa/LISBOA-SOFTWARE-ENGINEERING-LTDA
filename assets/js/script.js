document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const hero = document.querySelector(".hero");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const menuOverlay = document.getElementById("menu-overlay");

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) {
                navbar.classList.remove("hidden");
            } else {
                navbar.classList.add("hidden");
            }
        },
        { threshold: 0.1 }
    );

    observer.observe(hero);

    // Hamburger Menu Toggle
    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        menuOverlay.classList.toggle("active");
    });

    // Close menu when clicking a link
    const menuLinks = document.querySelectorAll(".menu-links a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburgerMenu.classList.remove("active");
            menuOverlay.classList.remove("active");
        });
    });

    const increaseFontBtn = document.getElementById("increase-font");
    const decreaseFontBtn = document.getElementById("decrease-font");
    const accessibilityModal = document.getElementById("accessibility-modal");
    let fontSize = 16; // Default font size in pixels

    // Increase Font Size
    increaseFontBtn.addEventListener("click", () => {
        fontSize += 2;
        document.documentElement.style.setProperty("--base-font-size", `${fontSize}px`);
    });

    // Decrease Font Size
    decreaseFontBtn.addEventListener("click", () => {
        if (fontSize > 12) {
            fontSize -= 2;
            document.documentElement.style.setProperty("--base-font-size", `${fontSize}px`);
        }
    });

    // Change Navbar Style on Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    const typingText = document.getElementById("typing-text");
    const text = "Welcome to LISBOA SOFTWARE ENGINEERING";
    const typingSpeed = 50; // Speed in milliseconds (faster typing)

    let index = 0;

    // Check if the screen is narrow (mobile)
    if (window.innerWidth <= 768) {
        typingText.textContent = text; // Display full text immediately
    } else {
        // Typing effect for wider screens
        function typeText() {
            if (index < text.length) {
                typingText.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, typingSpeed);
            }
        }

        typeText(); // Start typing effect
    }
});