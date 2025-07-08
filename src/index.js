import {Film} from "./classes/Film.js";
import {getLatestVideos} from "./youtube.js";
import './styles/style.css';

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
        // Position absolue du haut de l'élément bandeau par rapport au début du document
        const bandeauTopAbsolute = bandeau.getBoundingClientRect().top + window.scrollY;

        // Le point de déclenchement : quand le bas de la navbar atteint le haut du bandeau
        // C'est quand window.scrollY dépasse (la position du bandeau - la hauteur de la navbar)
        if (window.scrollY >= (bandeauTopAbsolute - navbarHeight)) {
            navbar.classList.add('bg-dark');
        } else {
            navbar.classList.remove('bg-dark');
        }
    }

    window.addEventListener('scroll', changeNavbarBackground);

    // Exécute la fonction une fois au chargement
    changeNavbarBackground();
});

// mettre section active au scroll
// Version améliorée avec optimisations
const sections = document.querySelectorAll("section");
const menu = document.getElementById("menu");
const menuItems = menu.querySelectorAll("a[href^='#']"); // Sélectionne seulement les liens d'ancrage

// Throttle pour limiter les appels pendant le scroll
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// Fonction pour gérer l'activation des éléments de menu
function updateActiveNavItem() {
    let currentSection = "";
    
    // Parcourt les sections pour trouver celle qui est visible
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const offset = 100; // Offset pour déclencher l'activation plus tôt
        
        // Vérifie si la section est visible dans le viewport
        if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = section.id;
        }
    });
    
    // Si aucune section n'est trouvée, utilise la première section visible
    if (!currentSection) {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight / 2) {
                currentSection = section.id;
            }
        });
    }
    
    // Met à jour les classes active
    menuItems.forEach((item) => {
        const href = item.getAttribute("href");
        if (href === `#${currentSection}`) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

// Version alternative avec Intersection Observer (plus performante)
function initIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Active quand la section est à 20% du haut
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                // Retire la classe active de tous les éléments
                menuItems.forEach(item => item.classList.remove("active"));
                
                // Ajoute la classe active à l'élément correspondant
                const activeItem = menu.querySelector(`a[href="#${sectionId}"]`);
                if (activeItem) {
                    activeItem.classList.add("active");
                }
            }
        });
    }, observerOptions);
    
    // Observe toutes les sections
    sections.forEach(section => observer.observe(section));
}

// Choisir la méthode à utiliser
const useIntersectionObserver = true; // Changez à false pour utiliser le scroll event

if (useIntersectionObserver && 'IntersectionObserver' in window) {
    // Méthode moderne avec Intersection Observer
    initIntersectionObserver();
} else {
    // Méthode classique avec scroll event (avec throttle)
    const throttledUpdate = throttle(updateActiveNavItem, 100);
    window.addEventListener("scroll", throttledUpdate);
    
    // Appel initial pour définir l'état au chargement
    updateActiveNavItem();
}

// Bonus: Smooth scroll pour les liens d'ancrage
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fonction utilitaire pour debug (à supprimer en production)
function debugCurrentSection() {
    window.addEventListener('scroll', throttle(() => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            console.log(`${section.id}: top=${Math.round(rect.top)}, bottom=${Math.round(rect.bottom)}`);
        });
    }, 500));
}

// Décommentez pour debug
// debugCurrentSection();