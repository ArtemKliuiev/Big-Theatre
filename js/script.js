/*_________________________burger____________________*/
$(document).ready(function() {
  $('.header-menu__burger,.header-menu__back') .click(function(event) {
      $('.header-menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});
/*_________________________ibg____________________*/
  function ibg(){
  $.each($('.ibg'), function(index, val) {
  if($(this).find('img').length>0){
  $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
  }
  });
  }
  ibg();
/*_________________________swiper-header____________________*/
  let swiper = new Swiper(".mySwiper", {
    speed:0 ,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: ' .header-main__nav-previous',
      prevEl: ' .header-main__nav-next',
    },
  });

/*_________________________swiper-posters____________________*/
  const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loopedSlides: 100,
    spaceBetween: 0,
    resistanceRatio: 0,
  });
/*_________________________swiper-partners____________________*/
const swiper3 = new Swiper('.swiper3', {
  direction: 'horizontal',
  loop: true,
  loopedSlides: 100,
  spaceBetween: 29,
  resistanceRatio: 0,
});
/*_________________________header-menu-background____________________*/
const header = document.querySelector("header");
const sectionOne = document.querySelector(".header-main");
const sectionOneOptions = {
  rootMargin: "-800px 0px 0px 0px"
};
const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);
/*_________________________header-menu-adaptive-background____________________*/
const header2 = document.querySelector("header");
const sectionTwo = document.querySelector(".header-main");
const sectionTwoOptions = {
  rootMargin: "-600px 0px 0px 0px"
};
const sectionTwoObserver = new IntersectionObserver(function(
  entries,
  sectionTwoObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("adaptive-scrolled");
    } else {
      header.classList.remove("adaptive-scrolled");
    }
  });
},
sectionTwoOptions);
sectionTwoObserver.observe(sectionTwo);
