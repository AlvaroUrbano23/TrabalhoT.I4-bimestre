document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const carouselInner = document.querySelector('.carousel-inner');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    let currentIndex = 0;

  
    const prevButton = document.querySelector('.containerBotao .prev');
    const nextButton = document.querySelector('.containerBotao .next');

    
    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    
    function nextImage() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    
    function prevImage() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1;
        }
        updateCarousel();
    }

    
    function updateCarousel() {
        const newTransformValue = -currentIndex * 100 + '%';
        carouselInner.style.transform = 'translateX(' + newTransformValue + ')';
    }
});
