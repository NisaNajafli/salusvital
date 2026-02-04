document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".banner-slider")) {
    new Swiper(".banner-slider", {
      loop: true,
      speed: 800,
      effect: "fade",
      fadeEffect: {
        crossFade: true, // yumşaq keçid
      },
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
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
