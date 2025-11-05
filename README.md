# Roy Uzoma Lan, Ph.D., PMP | Professional Portfolio

A modern, professional portfolio website showcasing expertise in AI-driven construction safety, computer vision, and project management.

## 🌟 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive**: Fully optimized for desktop, tablet, and mobile devices
- **Data-Driven**: All content managed through JSON for easy updates
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Fast loading with modular architecture
- **Accessibility**: ARIA labels and semantic HTML structure

## 📁 Project Structure

```
delubobo.github.io/
├── index.html                          # Main homepage
├── index.html.backup                   # Backup of original design
├── README.md                           # This file
│
├── assets/
│   ├── css/
│   │   ├── themes.css                  # Dark/Light theme system
│   │   ├── main.css                    # Core styles and layout
│   │   └── components.css              # Reusable UI components
│   │
│   ├── js/
│   │   ├── data-loader.js              # Data loading utilities
│   │   ├── main.js                     # Core functionality
│   │   └── components.js               # Dynamic rendering
│   │
│   ├── images/
│   │   ├── profile/                    # Profile pictures
│   │   ├── projects/                   # Project screenshots
│   │   └── icons/                      # Custom icons
│   │
│   ├── documents/
│   │   ├── cv/                         # CVs and resumes
│   │   ├── publications/               # Papers and publications
│   │   └── certificates/               # Certifications and awards
│   │
│   └── data/
│       └── portfolio.json              # All portfolio data
│
├── pages/                              # Additional pages (future)
│   ├── research.html                   # Detailed research page
│   ├── publications.html               # Full publications list
│   └── projects.html                   # Extended projects showcase
│
└── blog/                               # Blog section (future)
```

## 🚀 Quick Start

### Viewing Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/delubobo/delubobo.github.io.git
   cd delubobo.github.io
   ```

2. Serve the website locally:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Python 2
   python -m SimpleHTTPServer 8000

   # Using Node.js
   npx http-server
   ```

3. Open your browser to `http://localhost:8000`

### Updating Content

All content is managed through `assets/data/portfolio.json`. Simply edit this file to update:

- Profile information
- Education history
- Work experience
- Skills and expertise
- Publications
- Projects
- Awards and recognition
- Contact information

**Example: Adding a new project**

```json
{
  "projects": [
    {
      "id": "new-project",
      "icon": "fas fa-rocket",
      "title": "New Project Title",
      "subtitle": "Project Subtitle",
      "category": "AI/ML Application",
      "status": "In Development",
      "description": "Brief description...",
      "tags": ["Python", "TensorFlow", "Computer Vision"],
      "technologies": ["Python", "TensorFlow"],
      "links": [
        {
          "type": "primary",
          "text": "View Code",
          "icon": "fab fa-github",
          "url": "https://github.com/username/repo"
        }
      ]
    }
  ]
}
```

## 🎨 Customization

### Changing Colors

Edit `assets/css/themes.css`:

```css
:root {
    --construction-blue: #003DA5;      /* Primary brand color */
    --construction-orange: #FF8200;    /* Accent color */
    --dark-blue: #002a75;              /* Dark variant */
}
```

### Adding New Sections

1. Add HTML section in `index.html`
2. Create rendering method in `assets/js/components.js`
3. Add data structure to `assets/data/portfolio.json`
4. Call render method in initialization script

## 🔧 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Variables, Flexbox, Grid
- **Icons**: Font Awesome 6.4.0
- **Analytics**: Google Analytics
- **Hosting**: GitHub Pages

## 📱 Responsive Breakpoints

- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast mode compatible

## 🔍 SEO Features

- Semantic HTML structure
- Meta description and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Sitemap ready
- Mobile-friendly

## 📊 Performance

- Minimal dependencies
- Lazy loading for images
- Optimized CSS and JavaScript
- Fast First Contentful Paint (FCP)
- Excellent Lighthouse scores

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

© 2025 Roy Uzoma Lan. All rights reserved.

## 🤝 Contact

- **Email**: roylanuzoma@gmail.com
- **Phone**: (726) 219-1465
- **LinkedIn**: [linkedin.com/in/roylanuzoma](https://linkedin.com/in/roylanuzoma)
- **GitHub**: [github.com/delubobo](https://github.com/delubobo)

---

**Built with passion for safety and innovation** 🚀
