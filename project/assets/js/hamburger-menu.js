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

      const isCurrentlyOpen =
        navigation.classList.contains("header__nav--open");

      if (isCurrentlyOpen) {
        // Closing menu - remove classes immediately for smooth animation
        hamburgerBtn.classList.remove("header__hamburger--active");
        navigation.classList.remove("header__nav--open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      } else {
        // Opening menu - add classes for smooth animation
        hamburgerBtn.classList.add("header__hamburger--active");
        navigation.classList.add("header__nav--open");
        hamburgerBtn.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
      }
    });

    // Function to close menu with animation
    function closeMenu() {
      hamburgerBtn.classList.remove("header__hamburger--active");
      navigation.classList.remove("header__nav--open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    // Close menu when clicking on navigation links
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !hamburgerBtn.contains(e.target) &&
        !navigation.contains(e.target) &&
        navigation.classList.contains("header__nav--open")
      ) {
        closeMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        navigation.classList.contains("header__nav--open")
      ) {
        closeMenu();
        hamburgerBtn.focus(); // Return focus to hamburger button
      }
    });

    // Handle window resize - close menu if screen becomes larger
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }
});
