// title-cycle.js - Title cycling animation
document.addEventListener('DOMContentLoaded', () => {
  // Title cycling animation with scroll effect
  const titleElement = document.querySelector('.title-text p:first-child');
  const titles = ['Software', 'Web', 'Game'];
  let currentIndex = 0;
  
  // If no title element exists, don't run the animation
  if (!titleElement) return;
  
  function cycleTitle() {
    // Fade out current text downward
    titleElement.style.transform = 'translateY(20px)';
    titleElement.style.opacity = '0';
    titleElement.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    
    setTimeout(() => {
      // Change text and position it above
      titleElement.textContent = titles[currentIndex];
      currentIndex = (currentIndex + 1) % titles.length;
      titleElement.style.transform = 'translateY(-20px)';
      titleElement.style.opacity = '0';
      titleElement.style.transition = 'none';
      
      // Force a reflow to ensure the positioning takes effect
      titleElement.offsetHeight;
      
      // Now fade in from above
      titleElement.style.transform = 'translateY(0)';
      titleElement.style.opacity = '1';
      titleElement.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    }, 500);
  }
  
  // Change title every 3 seconds (allowing time for animation)
  setInterval(cycleTitle, 3000);
}); 