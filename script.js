// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect
    const parallaxImage = document.querySelector('.parallax-image');
    const parallaxImage2 = document.querySelector('.parallax-image-2');
    const businessHoursContainer = document.querySelector('.business-hours-container');
    const hoursToggleBtn = document.getElementById('hours-toggle-btn');

    hoursToggleBtn.addEventListener('click', () => {
        businessHoursContainer.classList.toggle('hidden');
    });
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        
        // First parallax image (top of page)
        parallaxImage.style.setProperty('--scroll-offset', scrollPosition + 'px');

        // Second parallax image (further down the page)
        const rect2 = parallaxImage2.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Only apply parallax effect when the image is in or near the viewport
        if (rect2.top < viewportHeight && rect2.bottom > 0) {
            const relativeScroll = scrollPosition - (rect2.top + window.scrollY);
            parallaxImage2.style.setProperty('--scroll-offset', relativeScroll + 'px');
        }

        // Header shrink effect
        const header = document.querySelector('header');
        if (scrollPosition > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // Smooth scroll to top on header click
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
