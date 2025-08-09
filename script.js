const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

// Show the selected slide and update dots
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

// Automatically go to the next slide
function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

// Start auto-slide every 5 seconds
function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 5000);
}

// Stop auto-slide (optional if you want to pause on interaction)
function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Add manual dot click navigation
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-slide'));
    showSlide(index);
    stopAutoSlide();   // Optional: stop auto-slide after manual change
    startAutoSlide();  // Restart timer after click
  });
});

// Initialize slider
showSlide(0);
startAutoSlide();
