// nav.js - Reusable navigation component
function createNav() {
  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Main navigation');
  nav.className = 'nav-container';
  
  // Get current page path to determine active link
  const currentPath = window.location.pathname;
  const isMainPage = currentPath === '/' || currentPath.endsWith('index.html');
  const isProjectsPage = currentPath.includes('projects.html');
  const isBlogPage = currentPath.includes('blog.html');
  const isContactPage = currentPath.includes('contact.html');
  
  nav.innerHTML = `
    <div class="logo">
      <a href="${isMainPage ? 'index.html' : '../index.html'}" style="color: white; text-decoration: none;">HR</a>
    </div>
    <button class="hamburger" aria-label="Toggle navigation menu">
      <span class="hamburger-icon">☰</span>
    </button>
    <div class="nav-links">
      <a href="${isMainPage ? 'links/projects.html' : 'projects.html'}" ${isProjectsPage ? 'class="active"' : ''}>Projects</a>
      <a href="${isMainPage ? 'links/blog.html' : 'blog.html'}" ${isBlogPage ? 'class="active"' : ''}>Thoughts</a>
      <a href="${isMainPage ? 'links/contact.html' : 'contact.html'}" ${isContactPage ? 'class="active"' : ''}>Contact</a>
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