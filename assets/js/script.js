document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle functionality
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', () => {
        // Toggle the 'active' class on the navbar
        navbar.classList.toggle('active');

        // Change the menu icon from menu to close and vice-versa
        if (navbar.classList.contains('active')) {
            menuBtn.classList.remove('bx-menu');
            menuBtn.classList.add('bx-x');
        } else {
            menuBtn.classList.remove('bx-x');
            menuBtn.classList.add('bx-menu');
        }
    });

    // Close mobile menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                menuBtn.classList.remove('bx-x');
                menuBtn.classList.add('bx-menu');
            }
        });
    });

    // Add a shadow to the header on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

});