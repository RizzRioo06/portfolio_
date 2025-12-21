# Resume Placeholder

To add your resume to the portfolio:

1. Create or export your resume as a PDF file
2. Name it `resume.pdf`
3. Place it in the `public` folder of this project
4. The "Download Resume" button in the navigation bar will automatically link to it

The button is already configured to link to `/resume.pdf`

**Important**: For GitHub Pages deployment, make sure the resume.pdf is in the public folder before building.

## Alternative: External Resume Link

If you prefer to host your resume elsewhere (e.g., Google Drive, Dropbox), update the link in:
- src/components/Navbar.jsx (line ~35 and ~64)

Change:
```jsx
href="/resume.pdf"
```

To:
```jsx
href="https://your-resume-link.com/resume.pdf"
```
