// import Splide from '@splidejs/splide'

// new Splide('.splide', {
//     isNavigation: true,
//     cover: true,
//     fixedWidth: '40vw',
//     arrows: true,
//     pagination: false,
//     drag: true,
//     easing: 'cubic-bezier(0, 0.55, 0.45, 1)',
//     speed: 400,
//     rewind: true
// }).mount()

import Swiper, { Navigation, Pagination, Keyboard, Mousewheel, EffectCoverflow, Scrollbar } from 'swiper'
import 'swiper/swiper.scss'

//configure Swiper to use modules
Swiper.use([Navigation, Pagination, Keyboard, Mousewheel, EffectCoverflow, Scrollbar])

//init Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "coverflow",
    freeMode: {
        enabled: true,
    },
    speed: 1000,
    slidesPerView: 2,
    loopedSlides: 5,
    spaceBetween: 40,
    mousewheel: {
        releaseOnEdges: true
    },
    centeredSlides: false,
    keyboard: {
        enabled: true,
    },
    loop: true,
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 150,
        modifier: 1.2,
        slideShadows: false,
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false
    }
})

swiper.update()
swiper.slideNext()