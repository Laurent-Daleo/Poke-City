

// Enregistrez le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation pour la section 1
gsap.registerPlugin(ScrollTrigger);

gsap.to(".floating-card-container", {
    scrollTrigger: {
        trigger: ".section--header",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: -100, // Déplace l'élément de 100px vers le bas
    ease: "none"
});
gsap.to(".header-img-midle-content", {
    scrollTrigger: {
        trigger: ".section--header",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 300, // Déplace l'élément de 100px vers le bas
    ease: "none"
});
gsap.to(".header-img-right-content", {
    scrollTrigger: {
        trigger: ".section--header",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 300, // Déplace l'élément de 100px vers le bas
    ease: "none"
});
gsap.to(".strategy-img-left-content", {
    scrollTrigger: {
        trigger: ".section--strategy",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: -230, // Déplace l'élément de 100px vers le bas
    ease: "none"
});
gsap.to(".strategy-img-right-content", {
    scrollTrigger: {
        trigger: ".section--strategy",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 130, // Déplace l'élément de 100px vers le bas
    ease: "none"
});
gsap.to(".potential-img-infos-content", {
    scrollTrigger: {
        trigger: ".potential-img-content",
        start: "top -60%", // Commence quand le bas de potential-img-content atteint 80% de la hauteur de l'écran
        end: "bottom 80%", // Termine quand le bas de potential-img-content atteint 20% de la hauteur de l'écran
        scrub: true,
    },
    y: 100, // Déplace l'élément de 600px vers le haut
    ease: "none"
});
gsap.to(".users-img-floating", {
    scrollTrigger: {
        trigger: "users-first-container",
        start: "top 80%",
        end: "bottom top",
        scrub: true,
    },
    y: -50, // Déplace l'élément de 100px vers le bas
    ease: "none"
});
gsap.to(".potential-img-content", {
    scrollTrigger: {
        trigger: ".potential-img-content",
        start: "top 20%",
        end: "bottom 100%",
        scrub: true,
    },
    y: -300, // Déplace l'élément de 100px vers le bas

});
gsap.to(".potential-gallery-content", {
    scrollTrigger: {
        trigger: ".potential-gallery-content",
        start: "top 20%",
        end: "bottom 100%",
        scrub: true,

    },
    y: -300, // Déplace l'élément de 100px vers le bas

});
