// skills.js - Skill cards orbit animation
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const totalCards = cards.length;
  
  // If no cards exist, don't run the animation
  if (totalCards === 0) return;
  
  // Animation settings
  const animationDuration = 60; // seconds
  
  // Dynamic orbit radius function
  function getOrbitRadius() {
    const width = window.innerWidth;
    if (width <= 768) return 150; // Mobile
    if (width <= 1440) return 250; // Small desktop
    return 300; // Large desktop
  }
  
  let orbitRadius = getOrbitRadius();
  
  // Calculate spacing
  const delayBetweenCards = animationDuration / totalCards;
  
  // Orbit animation function
  function animateOrbit() {
    const time = Date.now() / 1000;
    
    cards.forEach((card, index) => {
      const angle = (time + delayBetweenCards * index) * (360 / animationDuration);
      const radians = (angle * Math.PI) / 180;
      
      const x = Math.cos(radians) * orbitRadius;
      const y = Math.sin(radians) * orbitRadius;
      
      card.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
    
    requestAnimationFrame(animateOrbit);
  }
  
  // Initialize cards
  cards.forEach((card, index) => {
    // Add hover effects
    const skillInfo = card.querySelector('.skill-info');
    const textLength = skillInfo.textContent.length;
    
    card.addEventListener('mouseenter', () => {
      card.style.background = 'rgba(255, 255, 255, 0.1)';
      card.style.border = '1px solid rgba(255, 255, 255, 0.2)';
      
      const skillLogo = card.querySelector('.skill-logo');
      const skillInfo = card.querySelector('.skill-info');
      
      skillLogo.style.opacity = '0';
      skillInfo.style.opacity = '1';
      skillInfo.style.visibility = 'visible';
      
      // Dynamic font sizing based on screen size
      const width = window.innerWidth;
      if (width <= 768) {
        skillInfo.style.fontSize = textLength > 7 ? '7px' : '10px';
      } else if (width <= 1024) {
        skillInfo.style.fontSize = textLength > 7 ? '10px' : '12px';
      } else {
        skillInfo.style.fontSize = textLength > 7 ? '12px' : '14px';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.background = 'white';
      card.style.border = 'none';
      
      const skillLogo = card.querySelector('.skill-logo');
      const skillInfo = card.querySelector('.skill-info');
      
      skillLogo.style.opacity = '1';
      skillInfo.style.opacity = '0';
      skillInfo.style.visibility = 'hidden';
    });
  });
  
  // Start orbit animation
  animateOrbit();
  
  // Update orbit radius on window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      orbitRadius = getOrbitRadius();
    }, 100); // Debounce resize events
  });
}); 