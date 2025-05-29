document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-mobile");
    const nav = document.querySelector("header nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function() {
            nav.classList.toggle("active");
            menuToggle.classList.toggle("active"); // Optional: for styling the toggle icon itself
        });
    }

    // Smooth scrolling for internal links (if any)
    const internalLinks = document.querySelectorAll("a[href^=\"#\"]");
    internalLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            // Ensure it's not just a lone #
            if (targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                    // Close mobile menu if open after clicking a link
                    if (nav && nav.classList.contains("active")) {
                        nav.classList.remove("active");
                        menuToggle.classList.remove("active");
                    }
                }
            }
        });
    });

    // Active navigation link highlighting based on current page
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        // Handle index.html or root path
        if ((currentPage === "" || currentPage === "index.html") && (linkPage === "" || linkPage === "index.html")) {
            link.classList.add("active");
        } else if (linkPage === currentPage && currentPage !== "" && currentPage !== "index.html") {
            link.classList.add("active");
        }
    });

    // Basic Testimonial Slider (Placeholder - needs more robust implementation or library)
    // This is a very basic example, a library like SwiperJS or Slick Carousel is recommended for production
    const slider = document.querySelector(".testimonials-slider");
    if (slider && slider.children.length > 1) {
        // Basic logic idea: could involve cloning, positioning, and timed transitions
        // console.log("Testimonial slider found, implement slider logic here.");
        // For now, just ensures the grid layout works if JS fails or isn't complex
    }

});;

