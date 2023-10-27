document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;

    const iconMenu = document.querySelector('.icon-menu');
    const menuContainer = document.querySelector('.menu-responsive');
    const button = document.querySelector(".hamburger-toggle");

    iconMenu.addEventListener('click', function () {
        menuContainer.classList.toggle('active');
        button.classList.toggle("toggled");
    });

    window.addEventListener("scroll", function () {
        if (menuContainer.classList.contains('active')) {
            menuContainer.classList.toggle('active');
            button.classList.toggle("toggled");
        }

        const currentScrollTop = window.scrollY;

        if (currentScrollTop > lastScrollTop) {
            document.getElementById("main-header").style.transform = "translateY(-100%)";
        } else {
            document.getElementById("main-header").style.transform = "translateY(0)";
        }

        lastScrollTop = currentScrollTop;
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substr(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});