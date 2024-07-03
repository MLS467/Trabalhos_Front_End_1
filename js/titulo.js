let h1 = document.getElementById('h1');

h1.addEventListener('mouseover', () => {
    h1.style.cursor = 'pointer';
})

h1.addEventListener("click", (evt) => {
    h1.setAttribute("class", "Divisoes animate__animated animate__hinge");
    setTimeout(() => { location.href = "index.html"; }, 2500)
});