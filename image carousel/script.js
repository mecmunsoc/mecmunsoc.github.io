const carouselImages = document.getElementById('carouselImages');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselIndicator = document.getElementById('carouselIndicator');
let currentIndex = 0;


const numberOfImages = 5;


function fetchImages() {
    for (let i = 0; i < numberOfImages; i++) {
        const img = document.createElement('img');
        img.src = `https://picsum.photos/800/500?random=${i + 1}`;
        img.alt = `Image ${i + 1}`;
        img.classList.add('carousel-image');
        carouselImages.appendChild(img);
    }
    updateIndicators();
    updateCarousel();
}


function updateCarousel() {
    const images = document.querySelectorAll('.carousel-image');
    
    images.forEach((img, index) => {
        img.classList.remove('active', 'prev', 'next');
        if (index === currentIndex) {
            img.classList.add('active');
        } else if (index === (currentIndex - 1 +numberOfImages) % numberOfImages) {
            img.classList.add('prev');
        } else if (index === (currentIndex + 1 ) % numberOfImages){ 
            img.classList.add('next');
        }
    });

    
    updateIndicators();
}
function updateIndicators() {
    carouselIndicator.innerHTML = ''; 
    const images = document.querySelectorAll('.carousel-image');
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-indicator-dot');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
        carouselIndicator.appendChild(dot);
    });
}


prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : numberOfImages - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < numberOfImages - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});


fetchImages();
