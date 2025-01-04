const carouselItems = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
const intervalTime = 3000;

// Function to update carousel
function updateCarousel(index) {
  // Hide all items and remove active class
  carouselItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });

  // Update active dot
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Auto-slide function
function autoSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length; // Loop back to first item
  updateCarousel(currentIndex);
}

// Dot click handler
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel(currentIndex);
    clearInterval(slideInterval); // Reset auto-slide timer
    slideInterval = setInterval(autoSlide, intervalTime);
  });
});

// Start auto-slide
let slideInterval = setInterval(autoSlide, intervalTime);
updateCarousel(currentIndex); // Initialize the carousel
