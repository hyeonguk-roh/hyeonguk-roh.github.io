/**
 * Fetches and displays blog post previews from the /posts directory.
 * Extracts title and first paragraph as snippet, creates preview cards.
 */
const blogPreviews = document.querySelector('.blog-posts');
const postsDirectory = '../blog/posts'; // Directory containing blog post HTML files
const postFiles = [
  '07-14-2025-css-units-of-length.html',
  '07-14-2025-creating-html-blog.html'
]; // List of post files (update dynamically if possible)

// Function to fetch and parse a single blog post
async function fetchBlogPost(file) {
  try {
    const response = await fetch(`${postsDirectory}/${file}`);
    if (!response.ok) throw new Error(`Failed to fetch ${file}`);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Extract title and first paragraph
    const title = doc.querySelector('#post-title')?.textContent || doc.querySelector('title')?.textContent || 'Untitled Post';
    const snippet = doc.querySelector('#post-content p')?.textContent.slice(0, 150) + '...' || 'No content available';
    const date = doc.querySelector('#post-date')?.textContent || '';
    const author = doc.querySelector('#post-author')?.textContent || 'Hyeonguk Roh';
    
    return { title, snippet, link: `${postsDirectory}/${file}`, date, author };
  } catch (error) {
    console.error(`Error fetching ${file}:`, error);
    return null;
  }
}

// Function to create a preview card
function createPreviewCard({ title, snippet, link, date, author }) {
  const card = document.createElement('article');
  card.className = 'blog-preview';
  
  // Create the link wrapper
  const linkElement = document.createElement('a');
  linkElement.href = link;
  linkElement.setAttribute('aria-label', `Read blog post: ${title}`);
  
  linkElement.innerHTML = `
    <div class="preview-content">
      <header class="preview-header">
        <h2>${title}</h2>
        <div class="preview-meta">
          <time datetime="${date}">${date}</time>
          <span class="author">by ${author}</span>
        </div>
      </header>
      <div class="preview-excerpt">
        <p>${snippet}</p>
      </div>
    </div>
  `;
  
  card.appendChild(linkElement);
  return card;
}

// Main function to load and display all previews
async function loadBlogPreviews() {
  if (!blogPreviews) return;
  
  blogPreviews.innerHTML = '<p>Loading previews...</p>';
  
  const posts = await Promise.all(postFiles.map(fetchBlogPost));
  blogPreviews.innerHTML = ''; // Clear loading message
  
  posts
    .filter(post => post !== null)
    .forEach(post => {
      const card = createPreviewCard(post);
      blogPreviews.appendChild(card);
    });
  
  if (!posts.length || posts.every(post => post === null)) {
    blogPreviews.innerHTML = '<p>No blog posts found.</p>';
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', loadBlogPreviews);