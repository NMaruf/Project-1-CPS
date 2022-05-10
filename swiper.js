const slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth < 768 && slider.dataset.mobile === 'false') {
        mySwiper = new Swiper('.swiper',{
            direction: 'horizontal',
            loop: false,
            spaceBetween: 16,
            slidesPerView: 'auto',
            mousewheel: true,
            slidesOffsetAfter: 32,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        })
        slider.dataset.mobile = 'true'
    }

    if (window.innerWidth >= 768) {
        slider.dataset.mobile = 'false';
        if (slider.classList.contains('.swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
})

