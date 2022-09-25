const initCatalogSwiper = () => {
    if (document.querySelector('.slider__swiper') === null) {
        return;
    }

    const swiperdoctors = new Swiper('.slider__swiper', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.slider__swiper-button-next',
            prevEl: '.slider__swiper-button-prev',
        },
    });
}

initCatalogSwiper();
