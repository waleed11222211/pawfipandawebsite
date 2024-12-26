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
 // Select the target sections (image and text inside .about)
 const aboutSection = document.querySelector('.about');
 const aboutImage = document.querySelector('.about-image');
 const aboutText = document.querySelector('.about-text');

 // Create an intersection observer to track when the section comes into view
 const observer = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add('visible'); // Add the 'visible' class when in view
     } else {
       entry.target.classList.remove('visible'); // Remove the 'visible' class when out of view
     }
   });
 }, {
   threshold: 0.5 // Trigger when at least 50% of the element is in the viewport
 });

 // Observe the 'about', 'about-image' and 'about-text' sections
 observer.observe(aboutSection);
 observer.observe(aboutImage);
 observer.observe(aboutText);



 

 document.addEventListener('DOMContentLoaded', function () {
  // Select the target sections
  const tokenomicsSection = document.querySelector('.tokenomics');
  const tokenomicsLayout = document.querySelector('.tokenomics-layout');

  // Create an intersection observer to track when the section comes into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add the 'visible' class when in view
      } else {
        entry.target.classList.remove('visible'); // Remove the 'visible' class when out of view
      }
    });
  }, {
    threshold: 0.5 // Trigger when at least 50% of the element is in the viewport
  });

  // Observe the 'tokenomics' section and the layout within it
  if (tokenomicsSection && tokenomicsLayout) {
    observer.observe(tokenomicsSection);
    observer.observe(tokenomicsLayout);
  }
});



