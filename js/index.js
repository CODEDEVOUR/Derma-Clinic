// header.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});


// nav.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
            
            // Now that the navbar is loaded, apply the scroll effect
            let navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 0) {
                    navbar.classList.add("fixed-nav");
                    setTimeout(() => navbar.classList.add("show"), 200); // Add delay for smooth effect
                } else {
                    navbar.classList.remove("show");
                    setTimeout(() => navbar.classList.remove("fixed-nav"),300); // Wait for animation before removing class
                }
            });
        })
        .catch(error => console.error("Error loading header:", error));
});


// footer.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});




// typing text 



