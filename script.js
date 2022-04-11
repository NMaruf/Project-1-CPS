new Swiper('.swiper',{
    direction: 'horizontal',
    loop: false,
    spaceBetween: 16,
    slidesPerView: 'auto',
    mousewheel: true,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,

     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
})