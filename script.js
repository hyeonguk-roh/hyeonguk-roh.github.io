// script.js
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const totalCards = cards.length;
  
  // Get the animation duration from CSS (in seconds)
  const animationDuration = 60; // Change this value to adjust rotation speed
  
  // Calculate the delay between each card for perfect spacing
  const delayBetweenCards = animationDuration / totalCards;
  
  // Set animation delays for each card
  cards.forEach((card, index) => {
    const delay = -(delayBetweenCards * index);
    card.style.animation = `orbit ${animationDuration}s linear infinite`;
    card.style.animationDelay = `${delay}s`;
    
    // Add hover effects for dynamic sizing
    const skillInfo = card.querySelector('.skill-info');
    const textLength = skillInfo.textContent.length;
    
    let scale = 1.5
    
    card.addEventListener('mouseenter', () => {
      card.style.setProperty('--hover-scale', scale);
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--hover-scale', '1');
    });
  });
  
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