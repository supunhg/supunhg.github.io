# Blog Post Management Guide

This is a static website with manual blog post management. Follow this guide to add new blog posts to your site.

## 📝 Adding a New Blog Post

### 1. Create the Post File

Create a new HTML file in the `blog/posts/` directory:

```bash
mkdir -p blog/posts
touch blog/posts/my-new-post.html
```

### 2. Post Structure

Use this template for your blog post:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Your post description">
    
    <title>Your Post Title | Supun Hewagamage</title>
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="../../css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Optional: Syntax highlighting for code -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
</head>

<body>
    <!-- Animated Background -->
    <div class="bg-gradient"></div>
    <canvas class="bg-canvas" id="particleCanvas"></canvas>

    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="../../index.html" class="logo">SupunHG</a>
            <button class="mobile-toggle" id="mobileToggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links" id="navLinks">
                <li><a href="../../index.html">Home</a></li>
                <li><a href="../../projects.html">Projects</a></li>
                <li><a href="../../blog.html" class="active">Blog</a></li>
                <li><a href="../../contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Article Header -->
    <section class="hero" style="min-height: 50vh;">
        <div class="container">
            <div class="hero-content">
                <div class="hero-tag">
                    <i class="fas fa-pen-nib"></i> Security Research
                </div>
                <h1 style="font-size: 3rem;">Your Post Title</h1>
                <div class="blog-meta" style="justify-content: center; margin-top: 1.5rem;">
                    <span><i class="far fa-calendar"></i> December 4, 2025</span>
                    <span><i class="far fa-clock"></i> 5 min read</span>
                    <span><i class="fas fa-tag"></i> Category</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Article Content -->
    <article class="section">
        <div class="container" style="max-width: 800px;">
            <div class="card" style="padding: 3rem;">
                
                <h2>Introduction</h2>
                <p>Your introduction paragraph...</p>
                
                <h2>Main Content</h2>
                <p>Your main content...</p>
                
                <!-- Code Example -->
                <pre><code class="language-python">
def example():
    print("Hello, World!")
                </code></pre>
                
                <h2>Conclusion</h2>
                <p>Your conclusion...</p>
                
                <!-- Tags -->
                <div class="project-tags" style="margin-top: 3rem;">
                    <span class="tag">Tag1</span>
                    <span class="tag">Tag2</span>
                    <span class="tag">Tag3</span>
                </div>
                
            </div>
            
            <!-- Back to Blog -->
            <div style="text-align: center; margin-top: 3rem;">
                <a href="../../blog.html" class="btn btn-secondary">
                    <i class="fas fa-arrow-left"></i> Back to Blog
                </a>
            </div>
        </div>
    </article>

    <!-- Footer (copy from blog.html) -->
    <footer class="footer">
        <!-- Same footer content -->
    </footer>

    <script src="../../js/main.js"></script>
    <!-- Optional: Syntax highlighting -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>
</body>
</html>
```

### 3. Update Blog Index Page

Add a new card to `blog.html`:

```html
<div class="card blog-card">
    <div class="blog-image">
        <span>📝</span>
    </div>
    <div class="blog-meta">
        <span><i class="far fa-calendar"></i> December 4, 2025</span>
        <span><i class="far fa-clock"></i> 5 min read</span>
    </div>
    <h3 class="blog-title">Your Post Title</h3>
    <p class="blog-excerpt">
        Brief description of your post that will appear on the blog listing page.
        Keep it concise and engaging.
    </p>
    <a href="blog/posts/my-new-post.html" class="read-more">
        Read More <i class="fas fa-arrow-right"></i>
    </a>
</div>
```

## 📁 Directory Structure

```
blog/
├── posts/
│   ├── post-1.html
│   ├── post-2.html
│   └── ...
└── images/
    ├── post-1/
    │   ├── screenshot-1.png
    │   └── diagram.jpg
    └── post-2/
        └── ...
```

## 💡 Tips

### Images
Store images in `blog/images/`:
```html
<img src="../../blog/images/my-post/screenshot.png" alt="Description" style="width: 100%; border-radius: 8px; margin: 2rem 0;">
```

### Code Syntax Highlighting

Use Prism.js for syntax highlighting:

1. Add Prism CSS in the `<head>`:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
```

2. Add Prism JS before closing `</body>`:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>
```

3. Use code blocks:
```html
<pre><code class="language-python">
def hello():
    print("Hello, World!")
</code></pre>
```

### Metadata

Always include:
- **Date**: Publication date
- **Reading Time**: Estimated reading time
- **Category**: Topic (e.g., Security, CTF, Tutorial)
- **Tags**: Relevant keywords

### SEO

Update meta tags for each post:
```html
<meta name="description" content="Brief description for search engines">
<meta name="keywords" content="cybersecurity, tutorial, security, hacking">
```

## 🎨 Styling

The site uses existing CSS classes. Common ones for blog posts:

- `.card` - Content container
- `.section` - Page sections
- `.project-tags` / `.tag` - Tag styling
- `.btn` - Buttons
- `code` - Inline code
- `pre > code` - Code blocks

## ✅ Checklist

Before publishing a new post:

- [ ] Create HTML file in `blog/posts/`
- [ ] Add proper meta tags and title
- [ ] Include date, reading time, and category
- [ ] Add post card to `blog.html`
- [ ] Test all links and images
- [ ] Verify responsive design on mobile
- [ ] Check code syntax highlighting
- [ ] Proofread content
- [ ] Commit and push to GitHub

## 📤 Publishing

1. Test locally:
```bash
python -m http.server 8000
```

2. Commit changes:
```bash
git add .
git commit -m "Add new blog post: Post Title"
git push origin main
```

3. GitHub Pages will automatically deploy your changes

---

Happy blogging! 📝
