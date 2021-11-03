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

import Swiper, { Navigation, Pagination, Keyboard, Mousewheel, EffectCoverflow } from 'swiper'
import 'swiper/swiper.scss'

//configure Swiper to use modules
Swiper.use([Navigation, Pagination, Keyboard, Mousewheel, EffectCoverflow])

//init Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "coverflow",
    slidesPerView: 2.5,
    spaceBetween: 40,
    mousewheel: true,
    centeredSlides: false,
    keyboard: {
        enabled: true,
    },
    loop: true,
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 50,
        modifier: 1,
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: false,
    }
})

swiper.update()
swiper.slideNext()