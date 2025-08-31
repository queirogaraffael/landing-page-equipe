document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.navbar-overlay');
    const navLinks = document.querySelectorAll('nav ul li a');

    const openMenu = () => {
        nav.classList.add('active');
        menuToggle.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('no-scroll');
    };

    const closeMenu = () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    };

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (nav.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    closeMenu();
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                closeMenu();
            }
        });
    });
});
