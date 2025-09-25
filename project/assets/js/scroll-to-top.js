// Scroll to Top Functionality
// Smooth scroll to top when scroll-to-top button is clicked

document.addEventListener("DOMContentLoaded", function () {
  // Get the scroll-to-top button
  const scrollToTopBtn = document.querySelector(".footer__scroll-btn");

  if (scrollToTopBtn) {
    // Add click event listener
    scrollToTopBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Optional: Add a small delay to ensure smooth animation
      setTimeout(function () {
        // Focus on the header for accessibility
        const header = document.querySelector(".header");
        if (header) {
          header.focus();
        }
      }, 100);
    });

    // Show/hide button based on scroll position with smooth transitions
    let isScrolling = false;

    window.addEventListener("scroll", function () {
      if (!isScrolling) {
        window.requestAnimationFrame(function () {
          const scrollY = window.pageYOffset;

          if (scrollY > 300) {
            scrollToTopBtn.style.opacity = "1";
            scrollToTopBtn.style.transform = "scale(1)";
          } else {
            scrollToTopBtn.style.opacity = "0.7";
            scrollToTopBtn.style.transform = "scale(0.9)";
          }

          isScrolling = false;
        });

        isScrolling = true;
      }
    });

    // Add keyboard support
    scrollToTopBtn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToTopBtn.click();
      }
    });
  }
});
