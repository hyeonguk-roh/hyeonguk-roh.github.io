# Hyeonguk Roh's Portfolio

A modern, responsive portfolio website featuring a dynamic blog system with automatic post discovery.

## 🚀 Blog System

The blog system is completely modular and automatically discovers new blog posts using HTML meta tags. No JSON files or manual updates needed!

### ✨ Features

- **🔄 Automatic Discovery**: Blog posts are automatically discovered and displayed
- **📱 Responsive Design**: Works perfectly on all device sizes
- **🎯 Clickable Previews**: Click anywhere on a blog preview to go to the full post
- **🏷️ Tag System**: Posts are automatically categorized with tags
- **📅 Date Sorting**: Posts are automatically sorted by date (newest first)
- **⚡ No JSON Required**: Metadata is embedded directly in HTML meta tags
- **🔍 SEO Friendly**: Uses proper Open Graph and article meta tags

### 📝 How to Add a New Blog Post

1. **Copy the template**: Copy `blog/template.html` to create a new blog post
2. **Update the meta tags**: Fill in the metadata in the `<head>` section:

```html
<!-- Blog post metadata for discovery -->
<meta name="description" content="Your blog post description here...">
<meta property="og:title" content="Your Post Title">
<meta property="og:description" content="Your blog post description...">
<meta property="article:published_time" content="2024-01-25">
<meta name="reading-time" content="5 min read">
<meta name="keywords" content="JavaScript, Web Development, Tutorial">
<meta property="article:section" content="JavaScript">
```

3. **Add the file to discovery**: Add your new file to the `knownBlogFiles` array in `scripts/blog-discovery.js`:

```javascript
const knownBlogFiles = [
  'blog/async-await-guide.html',
  'blog/css-length-units.html',
  'blog/your-new-post.html'  // Add your new file here
];
```

4. **That's it!** Your post automatically appears on the blog page

### 📋 Required Meta Tags

| Meta Tag | Purpose | Example |
|----------|---------|---------|
| `description` | Blog post excerpt for preview | `content="Brief description of your post..."` |
| `og:title` | Post title | `content="Your Post Title"` |
| `og:description` | Post description for social sharing | `content="Brief description..."` |
| `article:published_time` | Publication date | `content="2024-01-25"` |
| `reading-time` | Estimated reading time | `content="5 min read"` |
| `keywords` | Tags/categories | `content="JavaScript, Web Development"` |
| `article:section` | Post category | `content="JavaScript"` |

### 🗂️ File Structure

```
blog/
├── template.html              # Template for new blog posts
├── async-await-guide.html     # Sample blog post
├── css-length-units.html      # Sample blog post
└── your-new-post.html         # Your new blog posts
```

### 🎨 User Experience

- **Clickable Cards**: Click anywhere on a blog preview card to navigate to the full post
- **Hover Effects**: Cards lift and change color on hover to indicate they're clickable
- **Smooth Transitions**: All interactions have smooth animations
- **Loading States**: Shows loading message while discovering posts
- **Error Handling**: Graceful error messages if posts can't be loaded

### 🔧 Technical Details

- **No Server Required**: Works entirely client-side
- **Meta Tag Scraping**: Extracts metadata from HTML meta tags
- **Automatic Sorting**: Posts sorted by publication date
- **Responsive Design**: Adapts to all screen sizes
- **SEO Optimized**: Uses proper Open Graph tags

### 🚀 Future Enhancements

The system is designed to be easily extensible:

1. **Automatic File Discovery**: Could scan directory listings
2. **Manifest Files**: Could use a JSON manifest for file lists
3. **Server-Side API**: Could implement a backend API for dynamic discovery
4. **Categories**: Could add category filtering
5. **Search**: Could add search functionality

## 🛠️ Development

The site uses:
- **Vanilla HTML, CSS, and JavaScript** - No frameworks required
- **Modular CSS and JS files** - Organized by functionality
- **Responsive design principles** - Mobile-first approach
- **Semantic HTML structure** - Accessible and SEO-friendly

## 📁 File Structure

```
├── index.html                 # Home page
├── links/
│   ├── blog.html             # Blog page
│   ├── projects.html         # Projects page
│   └── contact.html          # Contact page
├── css/
│   ├── base.css             # Global styles
│   ├── navigation.css       # Navbar styles
│   ├── home.css            # Home page styles
│   ├── pages.css           # Page-specific styles
│   ├── blog-list.css       # Blog list styles
│   └── blog-post.css       # Individual blog post styles
├── scripts/
│   ├── nav.js              # Navigation functionality
│   ├── script.js           # Core functionality
│   ├── skills.js           # Skills animation
│   ├── title-cycle.js      # Title cycling animation
│   └── blog-discovery.js   # Blog post discovery
├── blog/
│   ├── template.html       # Blog post template
│   ├── async-await-guide.html
│   ├── css-length-units.html
│   └── (your new posts)
└── assets/
    └── (images, icons, etc.)
```

## 🎯 Getting Started

1. **Clone the repository**
2. **Add a new blog post** using the template
3. **Update the discovery script** to include your new file
4. **Test locally** with a web server
5. **Deploy** to your hosting platform

The blog system is now completely modular and self-contained! 