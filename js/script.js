

var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    rewind: false,
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
  });

function revealMockup() {

  var hiFi = document.getElementById("wireframe");
  var mockUp = document.getElementById("mockup");
  var headerTwo = document.getElementById("mockupHeaderTwo");
  var headerThree = document.getElementById("mockupHeaderThree");

  var windowHeight = window.innerHeight;

  var headerTwoTop = headerTwo.getBoundingClientRect().top;
  var headerThreeTop = headerThree.getBoundingClientRect().top;
  var elementVisible = 0;

  if (headerTwoTop < windowHeight - elementVisible) {
    hiFi.classList.add("active");
  } else {
    hiFi.classList.remove("active");
  }

  if (headerThreeTop < windowHeight - elementVisible) {
    mockUp.classList.add("active");
  } else {
    mockUp.classList.remove("active");
  }
}

window.addEventListener("scroll", revealMockup);