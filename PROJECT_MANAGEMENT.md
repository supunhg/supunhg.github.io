# Project Management Guide

Managing your portfolio projects just got easier! Instead of manually editing HTML across multiple files, you can now manage all your projects in one place.

## Quick Start

### Edit Projects Data
All your projects are defined in [`js/projects-data.js`](js/projects-data.js):

```javascript
const projectsData = {
    featured: [
        {
            title: "Filo",
            subtitle: "Forensic Intelligence & Learning Operator",
            emoji: "🔍",
            icon: "🛡️",
            description: "Battle-tested file forensics platform...",
            stats: [
                { icon: "fas fa-code", text: "Python" },
                { icon: "fas fa-star", text: "Production" }
            ],
            tags: ["Digital Forensics", "ML", "File Analysis"],
            links: [
                { icon: "fab fa-github", text: "View Code", url: "https://github.com/supunhg/Filo" }
            ]
        }
        // ... more projects
    ],
    tools: [ /* secondary tools */ ],
    creative: [ /* creative projects */ ]
};
```

## Current Workflow (Manual)

Right now, projects are still hardcoded in HTML files. To update:

1. **Edit** [`js/projects-data.js`](js/projects-data.js) - Add/remove/update project data
2. **Update HTML** manually in:
   - [`index.html`](index.html) - Featured projects section (~lines 165-220)
   - [`projects.html`](projects.html) - All projects sections
3. **Update footers** - Replace project links in all 4 HTML files' footers

## Future Enhancement: Dynamic Loading

To eliminate manual HTML editing, you can implement dynamic project rendering:

### Option 1: Client-Side Rendering (Easiest)

Add to [`js/main.js`](js/main.js):

```javascript
// Load projects from data file
function renderProjects(container, projects) {
    container.innerHTML = projects.map(project => `
        <div class="card project-card">
            <div class="project-image">
                <span>${project.emoji}</span>
            </div>
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-icon">${project.icon}</div>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-stats">
                ${project.stats.map(stat => `
                    <span class="project-stat">
                        <i class="${stat.icon}"></i> ${stat.text}
                    </span>
                `).join('')}
            </div>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.links.map(link => `
                    <a href="${link.url}" class="icon-btn" target="_blank">
                        <i class="${link.icon}"></i> ${link.text}
                    </a>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// On page load
document.addEventListener('DOMContentLoaded', () => {
    const featuredContainer = document.querySelector('#featured-projects .grid');
    if (featuredContainer && projectsData) {
        renderProjects(featuredContainer, projectsData.featured);
    }
});
```

Then update HTML to include data script and empty container:
```html
<div id="featured-projects">
    <div class="grid grid-2">
        <!-- Projects loaded dynamically -->
    </div>
</div>

<!-- Scripts -->
<script src="js/projects-data.js"></script>
<script src="js/main.js"></script>
```

### Option 2: Build Script (More Robust)

Create `scripts/build-projects.js`:

```javascript
const fs = require('fs');
const projectsData = require('../js/projects-data.js');

// Generate HTML from data
function generateProjectHTML(project) {
    return `
                <div class="card project-card">
                    <!-- ... full HTML template ... -->
                </div>
    `.trim();
}

// Read, replace, write
const indexHTML = fs.readFileSync('index.html', 'utf8');
const updatedHTML = indexHTML.replace(
    /<!-- FEATURED_PROJECTS_START -->[\s\S]*<!-- FEATURED_PROJECTS_END -->/,
    `<!-- FEATURED_PROJECTS_START -->\n${projectsData.featured.map(generateProjectHTML).join('\n')}\n                <!-- FEATURED_PROJECTS_END -->`
);
fs.writeFileSync('index.html', updatedHTML);
```

Run before committing:
```bash
node scripts/build-projects.js
git add .
git commit -m "Update projects"
```

## Best Practices

1. **Always update `projects-data.js` first** - This is your single source of truth
2. **Test locally** before pushing - Run local server and verify changes
3. **Keep descriptions concise** - Aim for 2-3 sentences max
4. **Use consistent tags** - Reuse existing tags when possible
5. **Update footer links** - When featuring new main projects

## Adding a New Project

1. Open [`js/projects-data.js`](js/projects-data.js)
2. Add to appropriate category (`featured`, `tools`, or `creative`):
   ```javascript
   {
       title: "Your Project",
       subtitle: "One-line description",
       emoji: "🎯",
       icon: "⚡",
       description: "Full description 2-3 sentences...",
       stats: [
           { icon: "fas fa-code", text: "Language" },
           { icon: "fas fa-star", text: "Status" }
       ],
       tags: ["Tag1", "Tag2", "Tag3"],
       links: [
           { icon: "fab fa-github", text: "View Code", url: "https://github.com/..." }
       ]
   }
   ```
3. Manually update HTML (for now) or implement dynamic rendering
4. Test and deploy

## Removing a Project

1. Delete from [`js/projects-data.js`](js/projects-data.js)
2. Remove corresponding HTML block from pages
3. Remove from footer links if applicable
4. Test and deploy

---

**Note**: This data file is ready for dynamic rendering. Consider implementing Option 1 above for true single-source-of-truth project management!
