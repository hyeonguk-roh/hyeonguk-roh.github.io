// nav.js - Reusable navigation component
function createNav() {
  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Main navigation');
  nav.className = 'nav-container';
  
  // Get current page path to determine active link and correct path prefix
  const currentPath = window.location.pathname;
  const isMainPage = currentPath === '/' || currentPath.endsWith('index.html');
  const isBlogPost = currentPath.includes('/blog/posts/');
  const isProjectsPage = currentPath.includes('projects.html');
  const isBlogPage = currentPath.includes('blog.html');
  const isContactPage = currentPath.includes('contact.html');
  
  // Determine the correct path prefix based on current location
  let pathPrefix = '';
  if (isMainPage) {
    pathPrefix = '';
  } else if (isBlogPost) {
    pathPrefix = '../../';
  } else {
    pathPrefix = '../';
  }
  
  nav.innerHTML = `
    <div class="logo">
      <a href="${pathPrefix}index.html" style="color: white; text-decoration: none;" aria-label="Home - Hyeonguk Roh">HR</a>
    </div>
    <button class="hamburger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav-links">
      <span class="hamburger-icon" aria-hidden="true">☰</span>
    </button>
    <div class="nav-links" id="nav-links" role="navigation" aria-label="Main navigation links">
      <a href="${pathPrefix}links/projects.html" ${isProjectsPage ? 'class="active"' : ''} aria-current="${isProjectsPage ? 'page' : 'false'}">Projects</a>
      <a href="${pathPrefix}links/blog.html" ${isBlogPage ? 'class="active"' : ''} aria-current="${isBlogPage ? 'page' : 'false'}">Thoughts</a>
      <a href="${pathPrefix}links/contact.html" ${isContactPage ? 'class="active"' : ''} aria-current="${isContactPage ? 'page' : 'false'}">Contact</a>
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