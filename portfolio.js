function toggleMenu() {
    const navList = document.getElementById('navlist');
    navList.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('#navlist li');
    const navList = document.getElementById('navlist');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navList.classList.remove('active');
            }
        });
    });
    
    
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('nav') && navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        }
    });
});

