# Professional Portfolio Website

A modern, fully responsive portfolio website built with React and Tailwind CSS, designed to impress recruiters and showcase your skills as a Full-Stack Developer.

## 🚀 Featuress

- **Modern Tech Stack**: Built with React (Vite) and Tailwind CSS
- **Fully Responsive**: Optimized for mobile (iPhone SE), tablet (iPad), and desktop (4K) displays
- **Dark Mode Theme**: Professional dark theme with electric blue accents
- **Smooth Navigation**: Single-page application with smooth scrolling
- **Mobile-First Design**: Hamburger menu for mobile devices
- **Interactive Elements**: Hover effects, transitions, and animations
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📋 Sections

1. **Navigation Bar** - Sticky header with smooth scroll links and resume download
2. **Hero Section** - Eye-catching introduction with CTAs
3. **About Me** - Professional bio with education and quick facts
4. **Technical Skills** - Organized skill categories with visual appeal
5. **Featured Projects** - 3 project cards with descriptions, tech stacks, and links
6. **Contact** - Multiple contact methods and social links

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool for fast development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons
- **Google Fonts (Inter)** - Modern typography

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd portfolio-site
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Customization Guide

### 1. Personal Information

Update the following in the respective component files:

- **src/components/Hero.jsx**: Your name, role, and tagline
- **src/components/About.jsx**: Bio, education, graduation year, location
- **src/components/Contact.jsx**: Email, LinkedIn, GitHub links

### 2. Skills

Edit **src/components/Skills.jsx** to add/remove your technical skills.

### 3. Projects

Modify **src/components/Projects.jsx**:
- Replace project titles, descriptions, and tech stacks
- Add actual project screenshots to `/public` folder
- Update GitHub and demo URLs

### 4. Resume

Place your resume PDF in `/public` folder as `resume.pdf`

### 5. Profile Photo

Replace the placeholder in **src/components/Hero.jsx** with your professional headshot.

### 6. Colors

Customize the color scheme in **tailwind.config.js**:
```js
colors: {
  primary: {
    DEFAULT: '#3b82f6', // Change this to your preferred color
    hover: '#2563eb',
  },
}
```

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 🌐 Deployment

### GitHub Pages

1. Install the gh-pages package:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio-site",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Design System

- **Background**: slate-900, slate-800
- **Text**: slate-100, slate-200, slate-300
- **Accent**: Electric Blue (#3b82f6)
- **Font**: Inter (Google Fonts)

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ using React and Tailwind CSS**
