
  let currentIndex = 0;

  function showSlide(index) {
    const carousel = document.getElementById('carousel');
    const cardWidth = document.querySelector('.product-card').offsetWidth;

    currentIndex = index;

    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  function nextSlide() {
    const totalSlides = document.querySelectorAll('.product-card').length;
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    const totalSlides = document.querySelectorAll('.product-card').length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 5000); // Auto-rotate every 5 seconds
