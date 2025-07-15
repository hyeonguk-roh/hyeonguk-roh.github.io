/**
 * Fetches and displays blog post previews from the /posts directory.
 * Extracts title and first paragraph as snippet, creates preview cards.
 */
const blogPreviews = document.querySelector('.blog-posts');
const postsDirectory = '../blog/posts'; // Directory containing blog post HTML files
const postFiles = [
  '07-14-2025-css-units-of-length.html',
  '07-14-2025-creating-html-blog.html',
  '07-15-2025-unity-game-development-getting-started.html',
  '07-15-2025-react-hooks-comprehensive-guide.html',
  '07-15-2025-godot-engine-2d-games-gdscript.html',
  '07-15-2025-modern-javascript-es6-features-best-practices.html',
  '07-15-2025-game-design-principles-engaging-player-experiences.html'
]; // List of post files (update dynamically if possible)

// Category mapping based on keywords in titles and content
const categoryKeywords = {
  'Game Development': ['unity', 'godot', 'game', 'c#', 'gdscript', 'game design', 'player', 'experience'],
  'Web Development': ['react', 'javascript', 'css', 'html', 'web', 'frontend', 'hooks', 'es6'],
  'Tutorial': ['guide', 'tutorial', 'getting started', 'how to', 'learn']
};

// Function to detect category based on title and content
function detectCategory(title, content) {
  const text = (title + ' ' + content).toLowerCase();
  
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      return category;
    }
  }
  
  return 'General';
}

// Function to format date
function formatDate(dateString) {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    return dateString;
  }
}

// Function to extract better snippet
function extractSnippet(content) {
  if (!content) return 'No content available';
  
  // Remove HTML tags and get clean text
  const cleanText = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  
  // Try to get a meaningful snippet (first 200 characters, break at word boundary)
  const maxLength = 200;
  if (cleanText.length <= maxLength) {
    return cleanText;
  }
  
  const truncated = cleanText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace) + '...';
}

// Function to fetch and parse a single blog post
async function fetchBlogPost(file) {
  try {
    const response = await fetch(`${postsDirectory}/${file}`);
    if (!response.ok) throw new Error(`Failed to fetch ${file}`);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Extract title and content
    const title = doc.querySelector('#post-title')?.textContent || doc.querySelector('title')?.textContent || 'Untitled Post';
    const contentElement = doc.querySelector('#post-content');
    const content = contentElement?.textContent || '';
    const snippet = extractSnippet(content);
    const date = doc.querySelector('#post-date')?.textContent || '';
    const author = doc.querySelector('#post-author')?.textContent || 'Hyeonguk Roh';
    
    // Detect category
    const category = detectCategory(title, content);
    
    return { 
      title, 
      snippet, 
      link: `${postsDirectory}/${file}`, 
      date: formatDate(date), 
      author,
      category
    };
  } catch (error) {
    console.error(`Error fetching ${file}:`, error);
    return null;
  }
}

// Function to create a preview card
function createPreviewCard({ title, snippet, link, date, author, category }) {
  const card = document.createElement('article');
  card.className = 'blog-preview';
  
  // Create the link wrapper
  const linkElement = document.createElement('a');
  linkElement.href = link;
  linkElement.setAttribute('aria-label', `Read blog post: ${title}`);
  
  linkElement.innerHTML = `
    <div class="preview-content">
      <span class="preview-category">${category}</span>
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
  
  // Show loading state
  blogPreviews.innerHTML = '';
  
  try {
    const posts = await Promise.all(postFiles.map(fetchBlogPost));
    
    // Filter out failed posts and sort by date (newest first)
    const validPosts = posts
      .filter(post => post !== null)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Clear container
    blogPreviews.innerHTML = '';
    
    // Add posts to the grid
    validPosts.forEach(post => {
      const card = createPreviewCard(post);
      blogPreviews.appendChild(card);
    });
    
    // Show message if no posts found
    if (validPosts.length === 0) {
      blogPreviews.innerHTML = '<p>No blog posts found.</p>';
    }
    
  } catch (error) {
    console.error('Error loading blog previews:', error);
    blogPreviews.innerHTML = '<p>Error loading blog posts. Please try again later.</p>';
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', loadBlogPreviews);