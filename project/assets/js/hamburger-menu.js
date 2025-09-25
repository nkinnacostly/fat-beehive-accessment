// Hamburger Menu Functionality
// Toggle mobile navigation menu when hamburger button is clicked

document.addEventListener("DOMContentLoaded", function () {
  // Get the hamburger button and navigation elements
  const hamburgerBtn = document.querySelector(".header__hamburger");
  const navigation = document.querySelector(".header__nav");
  const navLinks = document.querySelectorAll(".header__nav-link");

  if (hamburgerBtn && navigation) {
    // Add click event listener to hamburger button
    hamburgerBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Toggle the active state
      hamburgerBtn.classList.toggle("header__hamburger--active");
      navigation.classList.toggle("header__nav--open");

      // Update aria-expanded attribute for accessibility
      const isExpanded = navigation.classList.contains("header__nav--open");
      hamburgerBtn.setAttribute("aria-expanded", isExpanded);

      // Prevent body scroll when menu is open
      document.body.style.overflow = isExpanded ? "hidden" : "";
    });

    // Close menu when clicking on navigation links
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        hamburgerBtn.classList.remove("header__hamburger--active");
        navigation.classList.remove("header__nav--open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !hamburgerBtn.contains(e.target) &&
        !navigation.contains(e.target) &&
        navigation.classList.contains("header__nav--open")
      ) {
        hamburgerBtn.classList.remove("header__hamburger--active");
        navigation.classList.remove("header__nav--open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });

    // Close menu on escape key
    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        navigation.classList.contains("header__nav--open")
      ) {
        hamburgerBtn.classList.remove("header__hamburger--active");
        navigation.classList.remove("header__nav--open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        hamburgerBtn.focus(); // Return focus to hamburger button
      }
    });

    // Handle window resize - close menu if screen becomes larger
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        hamburgerBtn.classList.remove("header__hamburger--active");
        navigation.classList.remove("header__nav--open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }
});
