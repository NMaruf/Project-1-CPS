let showSlides = function () {
    let hiddenSlides = document.querySelectorAll('.hidden');
    let buttonShow = document.querySelector('.show');
    for (let i = 0; i <= hiddenSlides.length; i++) {
        if (hiddenSlides[i].style.display === 'none') {
            hiddenSlides[i].style.display = 'flex';
            buttonShow.style.display = 'none'
        } else {
            hiddenSlides[i].style.display = 'none';
            buttonShow.style.display = 'block'
        }
    }
};
