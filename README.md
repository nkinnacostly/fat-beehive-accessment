# Demo - The Demo Shop

A modern, responsive website built for charities with big ambitions. This project showcases affordable website solutions designed to help charities reach more supporters, tell their story effectively, and maximize donations.

## 🚀 Project Overview

This is a Twig-based website featuring semantic HTML5, Sass (SCSS) styling using the BEM methodology, and modular reusable components. The site includes a sticky header, dynamic hero section with rotated backgrounds, infinite scrolling carousel, process timeline, call-to-action sections, and a comprehensive footer.

## 🛠️ Technologies Used

### Frontend

- **Twig** - Template engine for dynamic HTML generation
- **Sass (SCSS)** - CSS preprocessor with BEM methodology
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with animations and responsive design
- **JavaScript (ES6)** - Interactive features and smooth scrolling

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Twig.js** - Twig template engine for Node.js

### Development Tools

- **Sass CLI** - CSS compilation and watching
- **npm** - Package management and scripts

## 📁 Project Structure

```
fat-beehive-assessment/
├── project/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css          # Compiled CSS
│   │   ├── js/
│   │   │   └── scroll-to-top.js  # Scroll functionality
│   │   ├── images/               # Static images
│   │   └── scss/
│   │       ├── main.scss         # Main SCSS entry point
│   │       ├── base/
│   │       │   └── _variables.scss # Design tokens & mixins
│   │       └── components/       # Component-specific styles
│   └── templates/
│       ├── base.html.twig        # Base layout template
│       ├── pages/
│       │   └── index.html.twig   # Homepage
│       └── components/            # Reusable Twig components
├── server.js                     # Express server
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## 🎨 Design System

### Colors

- **Primary**: `#243342` - Dark gray for main text and navigation
- **Light Green**: `#b2fba4` - Accent color for highlights and buttons
- **Dark Green**: `#2e7d32` - Logo icon color
- **Text**: `#616161` - Secondary text color
- **White**: `#ffffff` - Background color

### Typography

- **Font Family**: Poppins (Google Fonts)
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Components

- **Header**: Sticky navigation with logo and contact button
- **Hero**: Dynamic section with rotated background highlights
- **Carousel**: Infinite scrolling banner with custom asterisk icons
- **Process Timeline**: Visual workflow representation
- **CTA Section**: Call-to-action with pennant imagery
- **Footer**: Comprehensive footer with contact info and navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd fat-beehive-assessment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Optional: Watch Sass for changes** (in a separate terminal)

   ```bash
   npm run sass:watch
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Development Workflow

### Making Changes

1. **Edit Twig templates** in `project/templates/`
2. **Modify SCSS styles** in `project/assets/scss/`
3. **Update JavaScript** in `project/assets/js/`
4. **Compile Sass** (if not using watch mode):
   ```bash
   npx sass project/assets/scss/main.scss project/assets/css/main.css --no-source-map
   ```
5. **Refresh browser** to see changes

### File Organization

- **Templates**: Store in `project/templates/components/` for reusability
- **Styles**: Follow BEM methodology in `project/assets/scss/components/`
- **Variables**: Define design tokens in `project/assets/scss/base/_variables.scss`
- **Images**: Place in `project/assets/images/`

## 🎯 Key Features

### Responsive Design

- Mobile-first approach
- Breakpoints: 1024px, 768px, 480px
- Adaptive layouts for all screen sizes

### Accessibility

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

### Performance

- Optimized CSS with efficient selectors
- Hardware-accelerated animations
- Minimal JavaScript footprint
- Compressed assets

### Interactive Elements

- Sticky header navigation
- Smooth scroll-to-top functionality
- Hover animations and transitions
- Dynamic background rotations

## 🔧 Available Scripts

```bash
# Start development server
npm start
# or
npm run dev

# Watch Sass for changes
npm run sass:watch

# Manual Sass compilation
npx sass project/assets/scss/main.scss project/assets/css/main.css --no-source-map
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Follow the established BEM methodology for CSS
2. Use semantic HTML5 elements
3. Maintain responsive design principles
4. Test across different screen sizes
5. Ensure accessibility compliance

## 📄 License

This project is part of a technical assessment and is intended for demonstration purposes.

## 🆘 Troubleshooting

### Common Issues

**Sass compilation errors**

- Ensure all `@use` statements are correct
- Check for missing semicolons
- Verify variable names match exactly

**Server not starting**

- Check if port 3000 is available
- Ensure all dependencies are installed
- Verify Node.js version compatibility

**Styles not updating**

- Recompile Sass after changes
- Clear browser cache
- Check for CSS syntax errors

**Images not loading**

- Verify file paths in templates
- Ensure images are in `project/assets/images/`
- Check server static file configuration

---

**Built with ❤️**
