# Copilot Instructions for supunhg.github.io

## Project Overview
Static personal portfolio website for Supun Hewagamage (offensive security specialist) hosted on GitHub Pages. Zero build process - pure HTML, CSS, JavaScript with dynamic particle animations, glassmorphism UI, and dark cybersecurity theme.

## Architecture & Structure

**Pages** (all self-contained HTML):
- [index.html](index.html) - Homepage with hero, about, skills, featured projects
- [projects.html](projects.html) - Full portfolio showcase  
- [blog.html](blog.html) - Blog listing page (placeholder posts)
- [contact.html](contact.html) - Contact information
- `blog/posts/*.html` - Individual blog posts (manually created when needed)

**Shared Components** (replicated in each HTML file):
- Navbar with mobile toggle and glassmorphism effect
- Particle canvas background (`#particleCanvas`)
- Gradient overlay (`.bg-gradient`)
- Footer section with social links and quick navigation

**JavaScript Modules**:
- [js/main.js](js/main.js) - Core functionality (ParticleCanvas, TypingEffect, navbar)
- [js/projects-data.js](js/projects-data.js) - Project data for easy management (NEW)

## Key Patterns & Conventions

### HTML Structure
- Every page MUST include: particle canvas, background gradient, navbar, footer
- Navbar active state: add `class="active"` to current page link
- Blog posts use relative paths from `blog/posts/` subdirectory: `../../css/styles.css`, `../../index.html`

### CSS Architecture ([css/styles.css](css/styles.css))
- **Glassmorphism Design**: Cards and navbar use `backdrop-filter: blur()` with semi-transparent backgrounds
  ```css
  background: rgba(19, 24, 39, 0.6);
  backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  ```
- **CSS Custom Properties** defined in `:root` - use these, don't hardcode colors:
  - `--royal-blue: #2563eb` (primary accent)
  - `--electric-blue: #00d4ff` (secondary accent)
  - `--dark-bg: #0a0e1a` (main background)
  - `--card-bg: #131827` (fallback card color)
- **Component classes**: `.card`, `.btn`, `.section`, `.grid`, `.hero`, `.navbar`
- **Utility classes**: `.grid-2`, `.grid-3`, `.container`
- **Card hover effects**: Enhanced with glassmorphism - blur increases, borders glow
- Responsive breakpoints: `768px` (mobile), `1024px` (tablet)

### JavaScript ([js/main.js](js/main.js))
- **ParticleCanvas class**: Handles animated background particles
  - Modify `particleCount` (default: 50) and `connectionDistance` (default: 150) for performance/visual tuning
  - Mouse interaction repels particles within 150px radius
- **TypingEffect class**: Rotating text animation on homepage
- **Navbar scroll behavior**: Adds `.scrolled` class on scroll (enhanced glassmorphism when scrolled)
- **Mobile menu toggle**: Standard hamburger menu implementation
- All JavaScript is ES6+ class-based, no dependencies

### Project Management ([js/projects-data.js](js/projects-data.js))
**NEW: Easy project updates without HTML editing**
- Structured data: `featured`, `tools`, `creative` categories
- Each project has: title, subtitle, emoji, icon, description, stats, tags, links, optional highlights
- To add projects: Edit `projects-data.js` and optionally create dynamic rendering script
- Current implementation: Projects hardcoded in HTML (future: dynamic loading from data file)

## Developer Workflows

### Local Development
```bash
# Simple HTTP server (no build process needed)
python -m http.server 8000
# OR
npx http-server

# Visit http://localhost:8000
```

### Managing Projects
**Easy way** (recommended for frequent updates):
1. Edit [js/projects-data.js](js/projects-data.js)
2. Projects auto-render from data (if dynamic rendering implemented)

**Manual way** (current):
1. Edit HTML directly in [index.html](index.html) or [projects.html](projects.html)
2. Copy project card template and update fields
3. Update footer links across all pages

### Adding Blog Posts
1. Create `blog/posts/your-post-name.html` following [BLOG_GUIDE.md](BLOG_GUIDE.md) template
2. Update [blog.html](blog.html) to add post card with:
   - Date, reading time, category metadata
   - Link to new post file
   - Brief description
3. Include Prism.js for code syntax highlighting (optional): `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css`

### Deployment
Push to `main` branch → GitHub Pages auto-deploys (no build step)

## Critical Dependencies
- **Font Awesome 6.5.1**: Icons (loaded via CDN)
- **Google Fonts**: Inter font family (weights 300-900)
- **No npm/build tools**: Everything runs in browser

## Styling Guidelines
- **Glassmorphism**: Use `backdrop-filter` with semi-transparent backgrounds for cards/navbar
- **Gradient text** for headings: `background: var(--accent-gradient); -webkit-background-clip: text;`
- **Card hover effects**: Increase blur, add glow shadow, slight transform
  ```css
  .card:hover {
    backdrop-filter: blur(15px) saturate(200%);
    box-shadow: 0 15px 50px rgba(37, 99, 235, 0.3);
  }
  ```
- Icons always come from Font Awesome classes (e.g., `<i class="fas fa-shield-halved"></i>`)

## Current Tech Stack
**Languages**: Python, JavaScript, Bash, Java, C#, SQL  
**Focus Areas**: Digital Forensics (Filo), Covert Channels (CoCo), Reverse Shells (ShellHooks)  
**Learning**: Docker, Kubernetes, Advanced Python  
**Certifications**: DataCamp Associate Data Engineer, RHCSA (RH124, RH134 completed)

## Common Tasks

**Adding a new page**: Copy [index.html](index.html) structure, update navbar active state, link all assets with correct relative paths

**Modifying theme colors**: Edit `:root` variables in [css/styles.css](css/styles.css#L1-L16)

**Adjusting glassmorphism**: Modify `backdrop-filter` and `background` rgba values in card styles

**Adjusting particle animation**: Modify [ParticleCanvas constructor](js/main.js#L3-L14) properties

**Making responsive**: Check media queries at bottom of [css/styles.css](css/styles.css) (starts around line 700)

**Bulk project updates**: Edit [js/projects-data.js](js/projects-data.js) for centralized management
