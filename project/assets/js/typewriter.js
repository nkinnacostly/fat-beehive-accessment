// Typewriter Animation
// Creates a typewriter effect for specified text elements

document.addEventListener("DOMContentLoaded", function () {
  const typewriterElements = document.querySelectorAll(".hero__typewriter");

  typewriterElements.forEach(function (element) {
    const text = element.getAttribute("data-text");
    if (!text) return;

    // Clear the element content
    element.textContent = "";

    let index = 0;
    const typingSpeed = 150; // milliseconds per character
    const pauseAtEnd = 2000; // pause at end in milliseconds
    const deleteSpeed = 100; // milliseconds per character when deleting
    const pauseBeforeDelete = 1000; // pause before deleting

    function typeText() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
      } else {
        // Text is complete, wait then start deleting
        setTimeout(deleteText, pauseBeforeDelete);
      }
    }

    function deleteText() {
      if (index > 0) {
        element.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(deleteText, deleteSpeed);
      } else {
        // Text is deleted, wait then start typing again
        setTimeout(typeText, pauseAtEnd);
      }
    }

    // Start the animation
    setTimeout(typeText, 1000); // Initial delay before starting
  });
});
