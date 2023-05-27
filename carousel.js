const carousel = document.querySelector('.carousel-items');
const slides = Array.from(document.querySelectorAll('.item'));
let currentIndex = 0;
const slideWidth = slides[0].clientWidth;
let intervalId;

function startAutoplay() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }, 3000); // Adjust the interval duration (in milliseconds) as desired
}

function stopAutoplay() {
  clearInterval(intervalId);
}

startAutoplay();
