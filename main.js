const navbar = document.querySelector(".navbar-nav");
const links = navbar.querySelectorAll(".nav-link");
const currentPage = window.location.href;
for (let i = 0; i < links.length; i++) {
    if (links[i].href === currentPage) {
        links[i].classList.add("nav-active");
    }
}