document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Carrossel de Fotos Interativo
    const track = document.getElementById('carousel-track');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const dots = document.querySelectorAll('.carousel-dot');

    if (track && nextBtn && prevBtn && dots.length > 0) {
        const slides = Array.from(track.children);
        let currentIndex = 0;

        function updateCarousel(index) {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('bg-white', 'active');
                    dot.classList.remove('bg-white/50');
                } else {
                    dot.classList.remove('bg-white', 'active');
                    dot.classList.add('bg-white/50');
                }
            });
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel(currentIndex);
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel(currentIndex);
        });

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                currentIndex = parseInt(e.target.getAttribute('data-index'));
                updateCarousel(currentIndex);
            });
        });

        // Autoplay do carrossel a cada 5 segundos
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel(currentIndex);
        }, 5000);
    }
});