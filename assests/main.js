document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".banner-slider")) {
    new Swiper(".banner-slider", {
      loop: true,
      speed: 800,
      effect: "fade",
      fadeEffect: {
        crossFade: true, // yumşaq keçid
      },
      // autoplay: {
      //   delay: 4500,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      allowTouchMove: false, // ❗ swipe tam söndürülür
    });
  }
});
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 150) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.testimonials-swiper', {
  loop: true, 
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
     0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
  }
});
});
document.addEventListener("DOMContentLoaded", function () {
  const productsSwiper = new Swiper(".products-swiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: false,
    speed: 600,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 14,
      },
      576: {
        slidesPerView: 2.2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
});