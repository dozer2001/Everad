//Burger mune
document.getElementById("trigger").onclick = function() {open()};

function open() {
    console.log(document.querySelector(".menu"));
    document.querySelector(".menu").classList.toggle("show");
}
// Burger mune End