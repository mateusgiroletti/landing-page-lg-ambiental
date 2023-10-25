let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
        document.getElementById("main-header").style.transform = "translateY(-100%)";
    } else {
        document.getElementById("main-header").style.transform = "translateY(0)";
    }

    lastScrollTop = currentScrollTop;
});

document.addEventListener("DOMContentLoaded", function (event) {
    const iconMenu = document.querySelector('.icon-menu');
    const menuContainer = document.querySelector('.menu-responsive');
    const button = document.querySelector(".hamburger-toggle");

    iconMenu.addEventListener('click', function () {
        menuContainer.classList.toggle('active'); 
        button.classList.toggle("toggled");
    });

    window.addEventListener("scroll", function () {
        if (menuContainer.classList.contains('active')) {
            // Fechar o menu
            menuContainer.classList.toggle('active'); 
            button.classList.toggle("toggled");
        }
    });
});