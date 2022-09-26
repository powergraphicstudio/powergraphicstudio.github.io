const swiper1 = new Swiper(".swiper1", {
    loop : true,
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
          delay: 3000,
          disableOnInteraction: false,
    },
})
const swiper2 = new Swiper(".swiper2", {
    loop : true,
    spaceBetween: 30,
    effect: "cube",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
})
const swiper3 = new Swiper(".swiper3", {
    loop: true,
    effect: "fade",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
})
const swiper4 = new Swiper(".swiper4", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
})
const swiper5 = new Swiper(".swiper5", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: "fade",
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper4,
    },
})