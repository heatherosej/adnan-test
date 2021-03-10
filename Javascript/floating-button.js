const upArrowBtn = document.querySelector(".arrow-up");

window.addEventListener('scroll', (e) => {
    if (pageYOffset >= 1738) {
        upArrowBtn.style.visibility = "visible"
        upArrowBtn.style.transition = "visibility ease .3s"
    } else {
        upArrowBtn.style.visibility = "hidden"
    }
});

upArrowBtn.addEventListener('click', () => window.scrollTo(0, 0))