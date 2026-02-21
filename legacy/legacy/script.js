// ===== COMBINED JAVASCRIPT FILE =====
// This file combines all JavaScript files to reduce HTTP requests

// ===== NAVIGATION COMPONENT =====
// nav.js - Reusable navigation component
function createNav() {
  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Main navigation');
  
  // Get current page path to determine active link and correct path prefix
  const currentPath = window.location.pathname;
  const isMainPage = currentPath === '/' || currentPath.endsWith('index.html');
  const isProjectsPage = currentPath.includes('/projects/') && !currentPath.includes('/rpg/') && !currentPath.includes('/toolbox/') && !currentPath.includes('/grid/');
  const isContactPage = currentPath.includes('/contact/');
  
  // Determine the correct path prefix based on current location
  let pathPrefix = '';
  if (isMainPage) {
    pathPrefix = '';
  } else if (currentPath.includes('/projects/') && (currentPath.includes('/rpg/') || currentPath.includes('/toolbox/') || currentPath.includes('/grid/'))) {
    pathPrefix = '../../';
  } else {
    pathPrefix = '../';
  }
  
  nav.innerHTML = `
    <div class="nav-container">
      <div class="logo">
        <a href="${pathPrefix}index.html" style="color: white; text-decoration: none;" aria-label="Home - Hyeonguk Roh">HR</a>
      </div>
      <button class="hamburger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav-links">
        <span class="hamburger-icon" aria-hidden="true">☰</span>
      </button>
      <div class="nav-links" id="nav-links" role="navigation" aria-label="Main navigation links">
        <a href="${pathPrefix}projects/" ${isProjectsPage ? 'class="active"' : ''} aria-current="${isProjectsPage ? 'page' : 'false'}">Projects</a>
        <a href="${pathPrefix}contact/" ${isContactPage ? 'class="active"' : ''} aria-current="${isContactPage ? 'page' : 'false'}">Contact</a>
      </div>
    </div>
  `;
  
  return nav;
}

// Insert navigation at the beginning of the body
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const nav = createNav();
  body.insertBefore(nav, body.firstChild);
});

// ===== CORE FUNCTIONALITY =====
// script.js - Core functionality
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu functionality
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });
  }
});

// ===== SKILLS ANIMATION =====
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
      const skillLogo = card.querySelector('.skill-logo');
      const skillInfo = card.querySelector('.skill-info');
      
      skillLogo.style.opacity = '0.3';
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
      card.style.border = '2px solid rgb(255, 255, 255)';
      
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

// ===== TITLE CYCLING =====
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

 