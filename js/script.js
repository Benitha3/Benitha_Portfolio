console.log("Benitha's portfolio loaded 🚀");

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ACTIVE NAVBAR
    ========================= */

    const navLinks = document.querySelectorAll(".navbar nav a");

    const sections = [
        document.getElementById("home"),
        document.getElementById("about"),
        document.getElementById("skills"),
        document.getElementById("projects"),
        document.getElementById("achievements"),
        document.getElementById("certificates"),
        document.getElementById("contact")
    ];

    function updateActiveNav() {

        let currentSection = "home";
        const scrollPosition = window.scrollY + 250;

        sections.forEach(function (section) {

            if (!section) return;

            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                currentSection = section.id;
            }

        });

        navLinks.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);
    window.addEventListener("resize", updateActiveNav);

    updateActiveNav();


    /* =========================
       CAT CURSOR FOLLOW
    ========================= */

    const cat = document.querySelector(".floating-cartoon");

    document.addEventListener("mousemove", function (event) {

        if (!cat) return;

        const x =
            (event.clientX - window.innerWidth / 2) * 0.05;

        const y =
            (event.clientY - window.innerHeight / 2) * 0.05;

        cat.style.setProperty("--move-x", x + "px");
        cat.style.setProperty("--move-y", y + "px");

    });


    /* =========================
       CAT EYES FOLLOW CURSOR
    ========================= */

    const catEyes = document.querySelectorAll(".cat-eye");

    document.addEventListener("mousemove", function (event) {

        catEyes.forEach(function (eye) {

            const rect = eye.getBoundingClientRect();

            const eyeX = rect.left + rect.width / 2;
            const eyeY = rect.top + rect.height / 2;

            const angle = Math.atan2(
                event.clientY - eyeY,
                event.clientX - eyeX
            );

            const moveX = Math.cos(angle) * 3;
            const moveY = Math.sin(angle) * 3;

            eye.style.transform =
                `translate(${moveX}px, ${moveY}px)`;
        });

    });

});
