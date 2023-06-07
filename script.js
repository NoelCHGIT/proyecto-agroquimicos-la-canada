// JavaScript para el menú desplegable
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".slider-container");
    const slides = document.querySelectorAll(".slide");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");
    let currentSlide = 0;
  
    arrowLeft.addEventListener("click", function() {
      if (currentSlide === 0) {
        currentSlide = slides.length - 1;
      } else {
        currentSlide--;
      }
      updateSlider();
    });
  
    arrowRight.addEventListener("click", function() {
      if (currentSlide === slides.length - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      updateSlider();
    });
  
    function updateSlider() {
      sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  
    function autoSlide() {
      if (currentSlide === slides.length - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      updateSlider();
    }
  
    setInterval(autoSlide, 4000); // Cambiar de imagen cada 4 segundos
  });
  