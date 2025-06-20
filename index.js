document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('menu');
    const bandeau = document.getElementById('bandeau');

    if (!navbar || !bandeau) {
        console.error("Élément navbar ou bandeau introuvable. Vérifiez les IDs.");
        return;
    }

    // Récupère la hauteur actuelle de la navbar
    const navbarHeight = navbar.offsetHeight; // offsetHeight inclut le padding et les bordures

    function changeNavbarBackground() {
        console.log("fonction chargée");
        // Position absolue du haut de l'élément bandeau par rapport au début du document
        const bandeauTopAbsolute = bandeau.getBoundingClientRect().top + window.scrollY;

        // Le point de déclenchement : quand le bas de la navbar atteint le haut du bandeau
        // C'est quand window.scrollY dépasse (la position du bandeau - la hauteur de la navbar)
        if (window.scrollY >= (bandeauTopAbsolute - navbarHeight)) {
            console.log("navbar sur bandeau");
            navbar.classList.add('bg-dark');
        } else {
            navbar.classList.remove('bg-dark');
            console.log("navbar en scroll");
        }
    }

    window.addEventListener('scroll', changeNavbarBackground);

    // Exécute la fonction une fois au chargement
    changeNavbarBackground();
});