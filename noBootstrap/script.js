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

const ocNav = document.querySelector('.ocnav')
const bg1 = document.querySelector('.bg1')
const bg2 = document.querySelector('.bg2')
const icon1 = document.querySelector('.ocnav i:nth-child(1)')
const icon2 = document.querySelector(".ocnav i:nth-child(2)")
const step1 = () => {
    bg1.classList.toggle("bg1s1")
    bg2.classList.toggle("bg2s1")
    ocNav.classList.toggle("tgl1")
    icon1.classList.toggle("x1")
    icon2.classList.toggle("x2")
    document.querySelector("body").classList.toggle("blur")
}
ocNav.onclick = () => {
    step1()
}