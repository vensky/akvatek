const scrollHeader = () => {
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer__button');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            header.classList.add('header--scroll');
            footer.classList.add('footer__button--scroll');
        } else {
            header.classList.remove('header--scroll');
        }
    });

    window.addEventListener('load', () => {
        if (window.pageYOffset > 0) {
            header.classList.add('header--scroll');
        } else {
            header.classList.remove('header--scroll');
        }
    });
};

scrollHeader();
