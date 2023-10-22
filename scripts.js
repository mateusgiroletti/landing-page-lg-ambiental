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