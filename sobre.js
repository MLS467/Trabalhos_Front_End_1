let btn = document.getElementById('btn');
let divborda = document.querySelector('#divborda');

btn.addEventListener('click', () => {
    let valorClass = divborda.getAttribute("class");

    if (valorClass === 'ocultar') {
        divborda.classList.remove("ocultar")
        divborda.classList.add("mostrar");
        btn.style.backgroundImage = "url(img/back.png)"

    } else {
        divborda.classList.remove("mostrar");
        divborda.classList.add("ocultar");
        btn.style.backgroundImage = "url(img/left-arrow.png)"
    }
});