document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('#projetos .carousel-container');
    const carouselTrack = document.querySelector('#projetos .carousel-track');
    const projectCards = document.querySelectorAll('#projetos .project-card');
    const prevButton = document.querySelector('#projetos .carousel-button.prev');
    const nextButton = document.querySelector('#projetos .carousel-button.next');
    const indicatorsContainer = document.querySelector('#projetos .carousel-indicators');

    let currentIndex = 0;
    let cardWidth = 0; 
    let visibleCards = 0; 

    function createIndicators() {
        indicatorsContainer.innerHTML = '';
        const totalSlides = Math.ceil(projectCards.length / visibleCards);
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => {
                currentIndex = i * visibleCards;
                updateCarousel();
            });
            indicatorsContainer.appendChild(indicator);
        }
    }

    function updateCarousel() {
        const maxIndex = projectCards.length - visibleCards;
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        updateIndicators();
    }

    function updateIndicators() {
        const indicators = document.querySelectorAll('#projetos .indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === Math.floor(currentIndex / visibleCards)) {
                indicator.classList.add('active');
            }
        });
    }

    function calculateVisibleCards() {
        const containerWidth = carouselContainer.offsetWidth;
        if (projectCards.length > 0) {
            cardWidth = projectCards[0].offsetWidth + (parseFloat(getComputedStyle(projectCards[0]).marginRight) * 2);
            visibleCards = Math.floor(containerWidth / cardWidth);
            if (visibleCards === 0) visibleCards = 1;
        } else {
            visibleCards = 1;
            cardWidth = containerWidth;
        }
    }

    prevButton.addEventListener('click', () => {
        currentIndex -= visibleCards;
        if (currentIndex < 0) {
            currentIndex = projectCards.length - visibleCards; 
            if (currentIndex < 0) currentIndex = 0; 
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex += visibleCards;
        const maxIndex = projectCards.length - visibleCards;
        if (currentIndex > maxIndex) {
            currentIndex = 0; 
        }
        updateCarousel();
    });

    function initCarousel() {
        calculateVisibleCards();
        createIndicators();
        updateCarousel();
    }

    initCarousel();

    window.addEventListener('resize', () => {
        initCarousel();
    });
});