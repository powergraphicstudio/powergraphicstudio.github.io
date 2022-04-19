
//navigation meno scripts
const navigation = $('.nav-bar')
navigation.append('<ul class="nav-frame d-md-none"></ul>')
const navFrame = $('.nav-frame')
const navItem = $('.nav-bar > div');
const tgler = $('.nav-bar > div:first-of-type');
const logo = $('.nav-bar > div:last-of-type');
navItem.addClass("d-md-flex item");
tgler.removeClass("d-md-flex item");
tgler.addClass("d-flex d-md-none");
logo.removeClass("d-md-flex item");
logo.addClass("d-flex");
const ic = $('.ntgl i:nth-child(2)');
tgler.click(function () {
    $('.ntgl').toggleClass("tgl");
    navFrame.toggleClass("show");
    setTimeout(function () {
        navFrame.toggleClass("in");
    },1)

})
//create meno
let nav = []
let item = $('.item')
for (let i = 0; i < item.length; i++) {
    nav.push(item[i]["innerHTML"])
}
for (let i = 0; i < nav.length;++i) {
    navFrame.append('<li>' + nav[i] + '</li>')
}
const swiper1 = new Swiper(".swiper1", {
    loop : true,
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
$('.swiper-item').addClass("position-absolute")
