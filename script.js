// script.js
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const totalCards = cards.length;
  
  // Animation settings
  const animationDuration = 60; // seconds
  const isMobile = window.innerWidth <= 1024;
  const orbitRadius = isMobile ? 200 : 300;
  
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
      
      card.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${card.dataset.scale || 1})`;
    });
    
    requestAnimationFrame(animateOrbit);
  }
  
  // Initialize cards
  cards.forEach((card, index) => {
    // Add hover effects for dynamic sizing
    const skillInfo = card.querySelector('.skill-info');
    const textLength = skillInfo.textContent.length;
    
    let scale = 1.5;
    
    card.addEventListener('mouseenter', () => {
      card.dataset.scale = scale;
      card.style.background = 'rgba(255, 255, 255, 0.1)';
      card.style.border = '1px solid rgba(255, 255, 255, 0.2)';
      
      const skillLogo = card.querySelector('.skill-logo');
      const skillInfo = card.querySelector('.skill-info');
      
      skillLogo.style.opacity = '0';
      skillInfo.style.opacity = '1';
      skillInfo.style.visibility = 'visible';
    });
    
    card.addEventListener('mouseleave', () => {
      card.dataset.scale = '1';
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
  
  // Title cycling animation with scroll effect
  const titleElement = document.querySelector('.title-text p:first-child');
  const titles = ['Software', 'Web', 'Game'];
  let currentIndex = 0;
  
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