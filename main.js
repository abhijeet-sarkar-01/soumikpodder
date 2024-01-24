const navbar = document.querySelector(".navbar-nav");
const links = navbar.querySelectorAll(".nav-link");
const currentPage = window.location.href;
for (let i = 0; i < links.length; i++) {
    if (links[i].href === currentPage) {
        links[i].classList.add("nav-active");
    }
}

document.querySelector(".red-col").addEventListener("click", ()=>{
    document.body.className = ''
    document.body.classList.add("red");
})
document.querySelector(".blue-col").addEventListener("click", ()=>{
    document.body.className = ''
    document.body.classList.add("blue");
})
document.querySelector(".green-col").addEventListener("click", ()=>{
    document.body.className = ''
    document.body.classList.add("green");
})
document.querySelector(".peach-col").addEventListener("click", ()=>{
    document.body.className = ''
    document.body.classList.add("peach");
})
document.querySelector(".lav-col").addEventListener("click", ()=>{
    document.body.className = ''
    document.body.classList.add("lavender");
})
document.querySelector(".grey-col").addEventListener("click", ()=>{
    document.body.className = ''
    document.body.classList.add("grey");
})
document.querySelector(".default-col").addEventListener("click", ()=>{
    document.body.className = ''
    document.body.classList.add("default");
})