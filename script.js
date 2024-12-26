// On page load, we run 'initAnimations' (see body onload in index.html)
function initAnimations() {
    // Select all elements with the .fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // For each fade-in element, add the 'visible' class so the transition happens once
    fadeElements.forEach((elem, index) => {
      // Stagger each fade-in slightly (optional)
      setTimeout(() => {
        elem.classList.add('visible');
      }, index * 200); // adjust timing as you like
    });
  }
  