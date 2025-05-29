
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("blogSearchInput");
    const articles = document.querySelectorAll(".blog-post-summary");

    if (searchInput) {
        searchInput.addEventListener("input", function() {
            const searchTerm = searchInput.value.toLowerCase().trim();

            articles.forEach(function(article) {
                const title = article.querySelector("h2 a").textContent.toLowerCase();
                const description = article.querySelector("p:not(.post-meta)").textContent.toLowerCase();
                const postMeta = article.querySelector(".post-meta").textContent.toLowerCase(); // Include metadata in search
                
                // Combine searchable text
                const searchableText = title + " " + description + " " + postMeta;

                // Simple "intelligent" search: check if searchable text includes the search term
                if (searchableText.includes(searchTerm)) {
                    article.style.display = "flex"; // Show matching articles (assuming default display is flex)
                } else {
                    article.style.display = "none"; // Hide non-matching articles
                }
            });
        });
    }
});

