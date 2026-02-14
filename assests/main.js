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

  // OUTER PRODUCTS SLIDER
  const productsSwiper = new Swiper(".products-swiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    nested: true,

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    }
  });


  // INNER IMAGE SLIDERS
  document.querySelectorAll(".product-image-swiper").forEach((el) => {
    new Swiper(el, {
      loop: true,
      slidesPerView: 1,
      nested: true,
      touchStartPreventDefault: false,

      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

      pagination: {
        el: el.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });
  });

});
;

const openBtns = document.querySelectorAll('[data-modal-open]');
const modal = document.querySelector('[data-modal]');
const overlay = document.querySelector('[data-modal-overlay]');
const closeBtn = document.querySelector('[data-modal-close]');

function openModal(e) {
  e.preventDefault();
  modal.classList.add('is-active');
  overlay.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-active');
  overlay.classList.remove('is-active');
  document.body.style.overflow = '';
}

openBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

document.getElementById("year").textContent = new Date().getFullYear();