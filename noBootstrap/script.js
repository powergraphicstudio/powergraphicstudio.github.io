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