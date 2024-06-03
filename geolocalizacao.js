let long = document.getElementById("longitude");
let lat = document.querySelector("#latitude");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    if (navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position) => {
            long.value = position.coords.longitude;
            lat.value = position.coords.latitude;
        });
    } else {
        long.value = "Navegador não suporta geolocalização!";
        lat.value = "Navegador não suporta geolocalização!";
    }

});
function permiteSoltar(ev) {
    ev.preventDefault();
}

function arrastar(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function soltar(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}