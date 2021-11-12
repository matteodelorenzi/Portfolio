
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

const projets = document.querySelectorAll(".projets__el")

setTimeout( function() {
    const rectangle = document.querySelector('.js-loader')
    rectangle.style.opacity= '0'
    console.log(rectangle)
}, 2000)
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
    loop: true,
    // loopedSlides: 5,
    spaceBetween: 40,
    mousewheel: {
        releaseOnEdges: true
    },
    centeredSlides: false,
    keyboard: {
        enabled: true,
    },
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 150,
        modifier: 1.2,
        slideShadows: false,
    },

    breakpoints: {
        // when window width is >= 2000
        2000: {
            slidesPerView: 3
        }
    },

    on:{
        transitionStart(){
            projets.forEach(projets => projets.style.opacity= "0")
            console.log("work")
        },
        transitionEnd(){
            const current = projets[this.realIndex]
            current.style.opacity="1"
        },
        snapGridLengthChange:function(){
            if( this.snapGrid.length != this.slidesGrid.length ){
                this.snapGrid = this.slidesGrid.slice(0);
            }
        }
    }
})

swiper.update()
swiper.slideNext()