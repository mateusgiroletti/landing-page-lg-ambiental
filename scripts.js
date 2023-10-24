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
    document.querySelector('.menu-icon').addEventListener('click', function () {
        const menuContainer = document.querySelector('.menu-responsive');
        menuContainer.style.display = menuContainer.style.display === 'flex' ? 'none' : 'flex';
    });

});