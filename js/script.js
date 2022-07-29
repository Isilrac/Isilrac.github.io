

var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: false,
    centerSlide: true,
    fade: 'true',
    rewind: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 1,
        },
    },
  });