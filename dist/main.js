/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Film.js":
/*!*****************************!*\
  !*** ./src/classes/Film.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Film: () => (/* binding */ Film)\n/* harmony export */ });\nclass Film{\r\n    _id;\r\n    _title;\r\n    _description;\r\n    _date;\r\n    _imgUrl;\r\n    _url;\r\n\r\n    constructor(id,title,description, date, img, url){\r\n        this._id=id;\r\n        this._title=title;\r\n        this._description=description;\r\n        this.imgUrl=img;\r\n        this._url=url;\r\n    }\r\n    get id() {\r\n        return this._id;\r\n    }\r\n\r\n    set id(newId) {\r\n        // Optionnel : ajouter une validation ou une logique\r\n        if (typeof newId !== 'string' || newId.trim() === '') {\r\n            console.warn(\"ID du film invalide.\");\r\n            // Vous pourriez lancer une erreur ou ne rien faire\r\n        }\r\n        this._id = newId;\r\n    }\r\n\r\n    get title() {\r\n        return this._title;\r\n    }\r\n\r\n    set title(newTitle) {\r\n        if (typeof newTitle !== 'string' || newTitle.trim() === '') {\r\n            console.warn(\"Titre du film invalide.\");\r\n        }\r\n        this._title = newTitle.trim();\r\n    }\r\n\r\n    get description() {\r\n        return this._description;\r\n    }\r\n\r\n    set description(newDescription) {\r\n        if (typeof newDescription !== 'string') {\r\n            console.warn(\"Description du film invalide.\");\r\n        }\r\n        this._description = newDescription;\r\n    }\r\n\r\n    get date() {\r\n        return this._date;\r\n    }\r\n\r\n    set date(newDate) {\r\n        // Exemple de validation de date simple\r\n        if (!(newDate instanceof Date) && !isNaN(new Date(newDate))) {\r\n            this._date = new Date(newDate); // Tente de convertir en objet Date\r\n        } else if (newDate instanceof Date) {\r\n            this._date = newDate;\r\n        } else {\r\n            console.warn(\"Date du film invalide.\");\r\n            // Vous pourriez définir une valeur par défaut ou laisser undefined\r\n        }\r\n    }\r\n\r\n    get imgUrl() {\r\n        return this._imgUrl;\r\n    }\r\n\r\n    set imgUrl(newImgUrl) {\r\n        // Exemple de validation simple pour une URL d'image\r\n        if (typeof newImgUrl !== 'string' || !newImgUrl.startsWith('http')) {\r\n            console.warn(\"URL d'image invalide.\");\r\n        }\r\n        this._imgUrl = newImgUrl;\r\n    }\r\n\r\n    get url() {\r\n        return this._url;\r\n    }\r\n\r\n    set url(newUrl) {\r\n        // Exemple de validation simple pour une URL\r\n        if (typeof newUrl !== 'string' || !newUrl.startsWith('http')) {\r\n            console.warn(\"URL du film invalide.\");\r\n        }\r\n        this._url = newUrl;\r\n    }\r\n\r\n     get content() {}\r\n}\n\n//# sourceURL=webpack://kino/./src/classes/Film.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Film_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Film.js */ \"./src/classes/Film.js\");\n/* harmony import */ var _youtube_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube.js */ \"./src/youtube.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    const navbar = document.getElementById('menu');\r\n    const bandeau = document.getElementById('bandeau');\r\n\r\n    if (!navbar || !bandeau) {\r\n        console.error(\"Élément navbar ou bandeau introuvable. Vérifiez les IDs.\");\r\n        return;\r\n    }\r\n\r\n    // Récupère la hauteur actuelle de la navbar\r\n    const navbarHeight = navbar.offsetHeight; // offsetHeight inclut le padding et les bordures\r\n\r\n    function changeNavbarBackground() {\r\n        // Position absolue du haut de l'élément bandeau par rapport au début du document\r\n        const bandeauTopAbsolute = bandeau.getBoundingClientRect().top + window.scrollY;\r\n\r\n        // Le point de déclenchement : quand le bas de la navbar atteint le haut du bandeau\r\n        // C'est quand window.scrollY dépasse (la position du bandeau - la hauteur de la navbar)\r\n        if (window.scrollY >= (bandeauTopAbsolute - navbarHeight)) {\r\n            navbar.classList.add('bg-dark');\r\n        } else {\r\n            navbar.classList.remove('bg-dark');\r\n        }\r\n    }\r\n\r\n    window.addEventListener('scroll', changeNavbarBackground);\r\n\r\n    // Exécute la fonction une fois au chargement\r\n    changeNavbarBackground();\r\n});\r\n\r\n// mettre section active au scroll\r\n// Version améliorée avec optimisations\r\nconst sections = document.querySelectorAll(\"section\");\r\nconst menu = document.getElementById(\"menu\");\r\nconst menuItems = menu.querySelectorAll(\"a[href^='#']\"); // Sélectionne seulement les liens d'ancrage\r\n\r\n// Throttle pour limiter les appels pendant le scroll\r\nfunction throttle(func, delay) {\r\n    let timeoutId;\r\n    let lastExecTime = 0;\r\n    return function (...args) {\r\n        const currentTime = Date.now();\r\n        \r\n        if (currentTime - lastExecTime > delay) {\r\n            func.apply(this, args);\r\n            lastExecTime = currentTime;\r\n        } else {\r\n            clearTimeout(timeoutId);\r\n            timeoutId = setTimeout(() => {\r\n                func.apply(this, args);\r\n                lastExecTime = Date.now();\r\n            }, delay - (currentTime - lastExecTime));\r\n        }\r\n    };\r\n}\r\n\r\n// Fonction pour gérer l'activation des éléments de menu\r\nfunction updateActiveNavItem() {\r\n    let currentSection = \"\";\r\n    \r\n    // Parcourt les sections pour trouver celle qui est visible\r\n    sections.forEach((section) => {\r\n        const rect = section.getBoundingClientRect();\r\n        const offset = 100; // Offset pour déclencher l'activation plus tôt\r\n        \r\n        // Vérifie si la section est visible dans le viewport\r\n        if (rect.top <= offset && rect.bottom >= offset) {\r\n            currentSection = section.id;\r\n        }\r\n    });\r\n    \r\n    // Si aucune section n'est trouvée, utilise la première section visible\r\n    if (!currentSection) {\r\n        sections.forEach((section) => {\r\n            const rect = section.getBoundingClientRect();\r\n            if (rect.top < window.innerHeight / 2) {\r\n                currentSection = section.id;\r\n            }\r\n        });\r\n    }\r\n    \r\n    // Met à jour les classes active\r\n    menuItems.forEach((item) => {\r\n        const href = item.getAttribute(\"href\");\r\n        if (href === `#${currentSection}`) {\r\n            item.classList.add(\"active\");\r\n        } else {\r\n            item.classList.remove(\"active\");\r\n        }\r\n    });\r\n}\r\n\r\n// Version alternative avec Intersection Observer (plus performante)\r\nfunction initIntersectionObserver() {\r\n    const observerOptions = {\r\n        root: null,\r\n        rootMargin: '-20% 0px -70% 0px', // Active quand la section est à 20% du haut\r\n        threshold: 0\r\n    };\r\n    \r\n    const observer = new IntersectionObserver((entries) => {\r\n        entries.forEach((entry) => {\r\n            if (entry.isIntersecting) {\r\n                const sectionId = entry.target.id;\r\n                \r\n                // Retire la classe active de tous les éléments\r\n                menuItems.forEach(item => item.classList.remove(\"active\"));\r\n                \r\n                // Ajoute la classe active à l'élément correspondant\r\n                const activeItem = menu.querySelector(`a[href=\"#${sectionId}\"]`);\r\n                if (activeItem) {\r\n                    activeItem.classList.add(\"active\");\r\n                }\r\n            }\r\n        });\r\n    }, observerOptions);\r\n    \r\n    // Observe toutes les sections\r\n    sections.forEach(section => observer.observe(section));\r\n}\r\n\r\n// Choisir la méthode à utiliser\r\nconst useIntersectionObserver = true; // Changez à false pour utiliser le scroll event\r\n\r\nif (useIntersectionObserver && 'IntersectionObserver' in window) {\r\n    // Méthode moderne avec Intersection Observer\r\n    initIntersectionObserver();\r\n} else {\r\n    // Méthode classique avec scroll event (avec throttle)\r\n    const throttledUpdate = throttle(updateActiveNavItem, 100);\r\n    window.addEventListener(\"scroll\", throttledUpdate);\r\n    \r\n    // Appel initial pour définir l'état au chargement\r\n    updateActiveNavItem();\r\n}\r\n\r\n// Bonus: Smooth scroll pour les liens d'ancrage\r\nmenuItems.forEach(item => {\r\n    item.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        const targetId = item.getAttribute('href').substring(1);\r\n        const targetSection = document.getElementById(targetId);\r\n        \r\n        if (targetSection) {\r\n            targetSection.scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            });\r\n        }\r\n    });\r\n});\r\n\r\n// Fonction utilitaire pour debug (à supprimer en production)\r\nfunction debugCurrentSection() {\r\n    window.addEventListener('scroll', throttle(() => {\r\n        sections.forEach(section => {\r\n            const rect = section.getBoundingClientRect();\r\n            console.log(`${section.id}: top=${Math.round(rect.top)}, bottom=${Math.round(rect.bottom)}`);\r\n        });\r\n    }, 500));\r\n}\r\n\r\n// Décommentez pour debug\r\n// debugCurrentSection();\n\n//# sourceURL=webpack://kino/./src/index.js?");

/***/ }),

/***/ "./src/youtube.js":
/*!************************!*\
  !*** ./src/youtube.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLatestVideos: () => (/* binding */ getLatestVideos)\n/* harmony export */ });\n\r\n\r\nconst KEY = \"AIzaSyC22Xffl8FgSnh84zyPWecBpkLA76Fxx2I\";\r\nconst CHAINE_ID = \"UCsAI-rzMsGGmUna8RErlJCQ\";\r\nconst PLAYLIST_ID = \"UUsAI-rzMsGGmUna8RErlJCQ\"\r\nasync function getLatestVideos(channelId, maxResults = 6) {\r\n    try {\r\n        // Étape 1: Récupérer l'ID de la playlist \"uploads\" de la chaîne\r\n        // const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHAINE_ID}&key=${KEY}`;\r\n        const videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=6&order=date&key=${KEY}`\r\n        \r\n        const playlistResponse = await fetch(videosUrl);\r\n        const playlistData = await playlistResponse.json();\r\n      \r\n        if (!playlistResponse.ok) {\r\n            throw new Error(`Erreur API: ${playlistData.error?.message || 'Erreur inconnue'}`);\r\n        }\r\n        \r\n        // Étape 3: Formater les données des vidéos\r\n        const videos = playlistData.items.map(item => ({\r\n            id: item.snippet.resourceId.videoId,\r\n            title: item.snippet.title,\r\n            description: item.snippet.description,\r\n            publishedAt: item.snippet.publishedAt,\r\n            thumbnail: item.snippet.thumbnails.medium.url,\r\n            url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`\r\n        }));\r\n        console.log(videos)\r\n        return videos;\r\n    } catch (error) {\r\n        console.error('Erreur lors de la récupération des vidéos:', error);\r\n        throw error;\r\n    }\r\n}\r\n\r\n\r\ngetLatestVideos();\n\n//# sourceURL=webpack://kino/./src/youtube.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;