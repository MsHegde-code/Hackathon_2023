// var nystories = document.querySelector("p").offsetTop;
// window.onscroll = function () {
//     if (window.pageYOffset > 0) {
//         var opac = (window.pageYOffset / nystories);
//         console.log(opac);
//         document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/times-square-perspective.jpg) no-repeat";
//     }
// }



//carousel
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const images = carouselContainer.getElementsByTagName('img');
    let currentIndex = 0;
  
    function showImage(index) {
      for (let i = 0; i < images.length; i++) {
        if (i === index) {
          images[i].style.display = 'block';
        } else {
          images[i].style.display = 'none';
        }
      }
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
  
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);
  
    showImage(currentIndex);
  });

  
  //footer

  // Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    }
  });
  

