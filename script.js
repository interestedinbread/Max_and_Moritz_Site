// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect
    const parallaxImages = document.querySelectorAll('.parallax-image, .parallax-image-2');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        
        // Update all parallax images
        parallaxImages.forEach(image => {
            image.style.setProperty('--scroll-offset', scrollPosition + 'px');
        });

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
