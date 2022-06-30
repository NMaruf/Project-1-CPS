import '../scss/style.scss';
import './swiper.js';
import './expander.js';



let hiddenSlides = document.querySelector('.hidden');
let btnShow = document.querySelector(".btn-show");
let btnHid = document.querySelector(".btn-hidden")

btnShow.addEventListener('click', () => {
      hiddenSlides.style.display = 'flex';
      btnShow.style.display = 'none';
      btnHid.style.display = 'flex';
});

btnHid.addEventListener('click', () => {
    hiddenSlides.style.display = 'none';
    btnHid.style.display = 'none';
    btnShow.style.display = 'flex';
});






