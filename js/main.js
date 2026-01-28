const themeBtn = document.querySelector('.theme-toggle'); // Assure-toi d'avoir cette classe sur ton bouton

// Au clic sur le bouton
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    });
}