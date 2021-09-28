import Splide from '@splidejs/splide';

new Splide( '.splide', {
    isNavigation: true,
    cover: true,
    fixedWidth: '40vw',
    arrows: false,
    pagination: false,
    drag: false,
    easing: 'cubic-bezier(0, 0.55, 0.45, 1)',
    speed: 400,
    rewind: true
}).mount();