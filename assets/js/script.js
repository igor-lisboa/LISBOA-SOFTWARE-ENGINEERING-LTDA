document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const hero = document.querySelector(".hero");

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
});