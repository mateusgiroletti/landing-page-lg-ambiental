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
    document.querySelector('.icon-menu').addEventListener('click', function () {
        const menuContainer = document.querySelector('.menu-responsive');
        menuContainer.style.display = menuContainer.style.visibility === 'flex' ? 'none' : 'flex';
    });

    const button = document.querySelector(".hamburger-toggle");
    button.addEventListener("click", function () {
        button.classList.toggle("toggled")
    });
});