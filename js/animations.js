// Scroll Animations using Intersection Observer and Animate.css

document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll(".service-card, .value-card, .testimonial-card, .blog-post-card, .hero-text, .hero-image, .stats-container, .service-detail");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Determine animation based on element or add a default
                    let animation = "animate__fadeInUp"; // Default animation
                    if (entry.target.classList.contains("hero-text")) {
                        animation = "animate__fadeInLeft";
                    }
                    if (entry.target.classList.contains("hero-image")) {
                        animation = "animate__fadeInRight";
                    }
                    
                    entry.target.classList.add("animate__animated", animation);
                    entry.target.style.visibility = "visible"; // Make element visible
                    
                    // Optional: Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });

    } else {
        // Fallback for browsers that don't support IntersectionObserver
        // Simply make elements visible
        animatedElements.forEach(element => {
            element.style.visibility = "visible";
        });
        console.log("IntersectionObserver not supported, animations disabled.");
    }
});

