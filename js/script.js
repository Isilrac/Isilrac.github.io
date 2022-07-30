

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

swiper.on('slideChange', function () {
    if (swiper.activeIndex == 7 && swiper.previousIndex == 6) {
        updateServiceMenuSquare(false);
    } else if (swiper.activeIndex == 13 && swiper.previousIndex == 12) {
        updateServiceMenuTriangle(false);
    } else if (swiper.activeIndex == 12 && swiper.previousIndex == 13) {
        updateServiceMenuSquare(false);
    } else if (swiper.activeIndex == 6 && swiper.previousIndex == 7) {
        updateServiceMenuCircle(false);
    }
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


var circleButton = document.getElementById("navigatorIconCircleTop");
var squareButton = document.getElementById("navigatorIconSquareTop");
var triangleButton = document.getElementById("navigatorIconTriangleTop");
var concepto = document.getElementById("concepto");
var imagen = document.getElementById("imagen");
var producto = document.getElementById("producto");


function updateServiceMenuCircle() {
    circleButton.classList.add("active");
    squareButton.classList.remove("active");
    triangleButton.classList.remove("active");

    concepto.classList.add("active");
    imagen.classList.remove("active");
    producto.classList.remove("active");

    if (arguments[0] != false) {
        swiper.slideTo(0, 1500, false);
    }
}

function updateServiceMenuSquare() {
    squareButton.classList.add("active");
    circleButton.classList.remove("active");
    triangleButton.classList.remove("active");

    imagen.classList.add("active");
    concepto.classList.remove("active");
    producto.classList.remove("active");

    if (arguments[0] != false) {
        swiper.slideTo(7, 1500, false);
    }
}

function updateServiceMenuTriangle() {
    triangleButton.classList.add("active");
    squareButton.classList.remove("active");
    circleButton.classList.remove("active");

    producto.classList.add("active");
    concepto.classList.remove("active");
    imagen.classList.remove("active");

    if (arguments[0] != false) {
        swiper.slideTo(13, 1500, false);
    }
}

circleButton.addEventListener("click", updateServiceMenuCircle);
squareButton.addEventListener("click", updateServiceMenuSquare);
triangleButton.addEventListener("click", updateServiceMenuTriangle);

updateServiceMenuCircle();























