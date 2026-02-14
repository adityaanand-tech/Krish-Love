/* ============================================
   PHOTO CAROUSEL FUNCTIONALITY
   ============================================ */
let currentSlide = 0;
let autoPlayInterval;
const AUTO_PLAY_DELAY = 6000; // 6 seconds - increased for more viewing time

function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselContainer = document.querySelector('.carousel-container');

    // Create indicator dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('indicator-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(dot);
    });

    // Navigation functions
    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        document.querySelectorAll('.indicator-dot')[currentSlide].classList.remove('active');

        currentSlide = (n + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        document.querySelectorAll('.indicator-dot')[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });

    // Auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, AUTO_PLAY_DELAY);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    // Pause auto-play on hover
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetAutoPlay();
        }
    });

    // Start auto-play
    startAutoPlay();
}

/* ============================================
   FLOATING HEARTS BACKGROUND ANIMATION
   ============================================ */
function createFloatingHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heartSymbols = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘'];

    // Create 25 floating hearts
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        // Random positioning and animation
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 5 + 6) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';

        heartsContainer.appendChild(heart);
    }
}

/* ============================================
   TYPEWRITER EFFECT
   ============================================ */
function typewriterEffect() {
    const text = "You make my heart smile in ways I never knew were possible. Thank you for being my everything. 💕";
    const typewriterElement = document.getElementById('typewriterText');
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Typing speed (50ms per character)
        } else {
            // Remove cursor effect when typing is complete
            setTimeout(() => {
                typewriterElement.classList.add('typing-complete');
            }, 500);
        }
    }

    // Start typing after a delay
    setTimeout(type, 1500);
}

/* ============================================
   CONFETTI ANIMATION
   ============================================ */
function triggerConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const confettiCount = 150;
    const colors = ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FFE4E1', '#FF1493', '#C71585'];

    // Create confetti pieces
    for (let i = 0; i < confettiCount; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 10 + 5,
            h: Math.random() * 5 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            speed: Math.random() * 3 + 2,
            rotationSpeed: Math.random() * 5 - 2.5
        });
    }

    // Animation function
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiPieces.forEach((piece, index) => {
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate((piece.rotation * Math.PI) / 180);
            ctx.fillStyle = piece.color;
            ctx.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
            ctx.restore();

            // Update position
            piece.y += piece.speed;
            piece.rotation += piece.rotationSpeed;

            // Reset if piece goes off screen
            if (piece.y > canvas.height) {
                confettiPieces.splice(index, 1);
            }
        });

        if (confettiPieces.length > 0) {
            requestAnimationFrame(animateConfetti);
        } else {
            // Clear canvas when done
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animateConfetti();
}

/* ============================================
   MODAL FUNCTIONALITY
   ============================================ */
function setupModal() {
    const surpriseBtn = document.getElementById('surpriseBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');

    // Open modal
    surpriseBtn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        triggerConfetti();

        // Optional: Play background music
        // const bgMusic = document.getElementById('bgMusic');
        // if (bgMusic) {
        //     bgMusic.play();
        // }
    });

    // Close modal
    modalClose.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    // Close modal when clicking outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
}

/* ============================================
   PHOTO FADE-IN ANIMATION
   ============================================ */
function photoFadeIn() {
    const photo = document.getElementById('couplePhoto');

    // Add fade-in class after page load
    setTimeout(() => {
        photo.style.opacity = '0';
        photo.style.transition = 'opacity 1.5s ease-in';

        // Trigger fade-in
        setTimeout(() => {
            photo.style.opacity = '1';
        }, 100);
    }, 500);
}

/* ============================================
   HANDLE WINDOW RESIZE FOR CONFETTI CANVAS
   ============================================ */
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confettiCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

/* ============================================
   INITIALIZE ALL FUNCTIONS ON PAGE LOAD
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    createFloatingHearts();
    typewriterEffect();
    setupModal();
});

/* ============================================
   SMOOTH SCROLL (Optional enhancement)
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
