const links = document.querySelectorAll(".down-btn");

for (const link of links) {
link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
});
}
function openModalburger() {
    document.getElementById("modal").style.top = "0px";
}

function closeModalburger() {
    document.getElementById("modal").style.top = "-400px";
}

function openModal() {
    document.getElementById("modalinput").style.position = "fixed";
    document.getElementById("modalinput").style.display = "block";
    document.getElementById("modalinputContent").style.top = "0px";
}

function closeModal() {
    document.getElementById("modalinput").style.position = "relative";
    document.getElementById("modalinput").style.display = "none";
}