//navigation meno scripts

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
})
//create meno
let nav = []
let item = $('.item')
for(let i == 0;let len == item.length; i > len;i++){
    let it = item[i]["innerHTML"]
    it.push(nav);
}
console.log(nav)
