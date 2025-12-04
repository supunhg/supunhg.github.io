# Supun Hewagamage - Personal Website

Modern, dynamic personal website showcasing my work in offensive security, security tool development, and cybersecurity research.

## 🌐 Live Site

Visit: [supunhg.github.io](https://supunhg.github.io)

## ✨ Overview

This repository contains the source code for my personal portfolio website hosted on GitHub Pages. The site features a modern dark cybersecurity theme with dynamic animations and showcases my security projects, research, and professional experience.


## 📋 Features

- **Multi-page Layout**: Home, Projects, Blog, and Contact pages
- **Dark Cybersecurity Theme**: Royal blue accents with dynamic particle animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dynamic Effects**: Particle canvas, typing animations, smooth scrolling
- **SEO Optimized**: Proper meta tags and semantic HTML
- **No Dependencies**: Pure HTML, CSS, and JavaScript (no build process)
- **GitHub Pages Ready**: Deploy instantly with zero configuration

## 📁 Project Structure

```
supunhg.github.io/
├── index.html          # Homepage
├── projects.html       # Projects showcase
├── blog.html          # Blog listing page
├── contact.html       # Contact information
├── css/
│   └── styles.css     # Main stylesheet
├── js/
│   └── main.js        # JavaScript functionality
└── README.md          # This file
```

## 🛠️ Technologies

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: Classes, modern features
- **Font Awesome**: Icons
- **Google Fonts**: Inter typography


## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/supunhg/supunhg.github.io.git
cd supunhg.github.io
```

2. Open `index.html` in your browser or use a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

3. Visit `http://localhost:8000`

### Deployment

GitHub Pages deployment is automatic:
1. Push changes to the `main` branch
2. GitHub Pages will automatically build and deploy
3. Site will be live at `https://supunhg.github.io`

## 📝 Adding Blog Posts

This is a static site with manual blog management:

1. Create a new HTML file in `blog/posts/` directory
2. Use the same layout structure (navbar, footer) from existing pages
3. Update `blog.html` to add a card linking to your new post
4. Include metadata: date, reading time, category

## 🎯 Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --royal-blue: #2563eb;
    --electric-blue: #00d4ff;
    --dark-bg: #0a0e1a;
}
```

### Animations
Modify particle settings in `js/main.js`:
```javascript
this.particleCount = 50;
this.connectionDistance = 150;
```


## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 👤 Author

**Supun Hewagamage**
- GitHub: [@supunhg](https://github.com/supunhg)
- LinkedIn: [supunhewagamage](https://linkedin.com/in/supunhewagamage)
- Email: sanchithahewagamage@gmail.com

## 📄 License

This project is open source and available under the MIT License.

---

<p align="center">
  <i>"Evolve daily, or decay quietly." - Supun Hewagamage</i>
</p>

<p align="center">
  Made with 💙 and ☕
</p>