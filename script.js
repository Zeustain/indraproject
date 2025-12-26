document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. NAVBAR RESPONSIVE (HAMBURGER MENU) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Ubah ikon garis menjadi silang (X)
            if(navLinks.classList.contains('active')){
                hamburger.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // --- 2. CAROUSEL LOGIC ---
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() { showSlide(currentSlide + 1); }
    function prevSlide() { showSlide(currentSlide - 1); }

    // Event Listeners tombol slide
    if(nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetTimer();
        });
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetTimer();
        });
    }

    // Auto Slide 2 Detik
    function startTimer() { slideInterval = setInterval(nextSlide, 2000); }
    function resetTimer() { clearInterval(slideInterval); startTimer(); }

    if(slides.length > 0) { startTimer(); }
});