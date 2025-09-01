document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('#projetos .carousel-container');
    const carouselTrack = document.querySelector('#projetos .carousel-track');
    const projectCards = document.querySelectorAll('#projetos .project-card');
    const prevButton = document.querySelector('#projetos .carousel-button.prev');
    const nextButton = document.querySelector('#projetos .carousel-button.next');
    const indicatorsContainer = document.querySelector('#projetos .carousel-indicators');

    let currentIndex = 0;
    let visibleCards = 0; 
    let cardMargin = 0;

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
        if (currentIndex < 0) {
            currentIndex = maxIndex;
        }
        if (currentIndex > maxIndex) {
            currentIndex = 0;
        }

        const cardWidth = projectCards[0].offsetWidth + (cardMargin * 2);
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
            cardMargin = parseFloat(getComputedStyle(projectCards[0]).marginRight);
            const cardWidthWithMargin = projectCards[0].offsetWidth + (cardMargin * 2);
            visibleCards = Math.floor(containerWidth / cardWidthWithMargin);
            if (visibleCards === 0) visibleCards = 1;
        } else {
            visibleCards = 1;
        }
    }

    prevButton.addEventListener('click', () => {
        currentIndex -= visibleCards;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex += visibleCards;
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