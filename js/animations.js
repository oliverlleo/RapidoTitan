// Animações para o site da Rapido Titan utilizando GSAP
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se a biblioteca GSAP está disponível
    if (typeof gsap !== 'undefined') {
        // Registrar plugins se disponíveis
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }
        
        // Animação de entrada para página
        gsap.from("body", {
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        
        // Animação para o título da página
        gsap.from(".page-title h1", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
        
        gsap.from(".page-title p", {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: "power3.out"
        });
        
        // Animação para a imagem do post
        gsap.from(".post-image-full img", {
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
        });
        
        // Animações para o conteúdo do blog com ScrollTrigger
        if (typeof ScrollTrigger !== 'undefined') {
            // Animar títulos
            gsap.utils.toArray(".post-content h2, .post-content h3").forEach(heading => {
                gsap.from(heading, {
                    x: -50,
                    opacity: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: heading,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });
            });
            
            // Animar parágrafos
            gsap.utils.toArray(".post-content p").forEach(paragraph => {
                gsap.from(paragraph, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: paragraph,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });
            
            // Animar listas
            gsap.utils.toArray(".post-content ul").forEach(list => {
                gsap.from(list, {
                    x: 30,
                    opacity: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: list,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
                
                // Animar itens da lista sequencialmente
                gsap.utils.toArray(list.querySelectorAll("li")).forEach((item, i) => {
                    gsap.from(item, {
                        x: 20,
                        opacity: 0,
                        duration: 0.4,
                        delay: 0.1 * i,
                        scrollTrigger: {
                            trigger: list,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    });
                });
            });
            
            // Animação para o botão de voltar
            gsap.from(".back-button-container", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".back-button-container",
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });
        }
        
        // Efeito de hover nos links e botões usando GSAP
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, a:not(nav a)');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power1.out"
                });
            });
            
            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power1.out"
                });
            });
        });
    } else {
        console.warn("GSAP não está disponível. Carregando animações CSS alternativas.");
        
        // Adicionar classes de animação usando CSS puro caso GSAP não esteja disponível
        document.querySelector(".page-title h1")?.classList.add("fade-in-down");
        document.querySelector(".page-title p")?.classList.add("fade-in-up");
        document.querySelector(".post-image-full img")?.classList.add("fade-in");
        
        // Adicionar listeners para elementos que ficam visíveis durante o scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll(".post-content h2, .post-content h3, .post-content p, .post-content ul, .back-button-container").forEach(el => {
            el.classList.add("scroll-animate");
            observer.observe(el);
        });
    }
});