document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('caroussel').style.color = "lightgray";
});

let caroussel = document.getElementById('caroussel');

document.addEventListener("DOMContentLoaded", function (event) {
    Array.from(caroussel.getElementsByClassName('descr')).forEach(element => {
        element.style.background = "black";
    });
});