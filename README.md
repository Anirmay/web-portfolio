# MCODE 🤖

A modern, interactive 3D portfolio website showcasing web development skills. Features an intelligent 3D robot model that follows your cursor movements, combined with beautiful UI design and seamless user authentication.

**Live Demo:**
- 🌐 **Portfolio**: [anirmay0-portfolio.netlify.app](https://anirmay0-portfolio.netlify.app)

---

## Features

### 🤖 Interactive 3D Robot Model
- **Cursor Tracking**: The robot's head follows your mouse cursor movement in real-time
- **Dynamic Animation**: Smooth head rotation based on cursor position
- **3D Rendering**: Beautiful 3D model visualization
- **Responsive**: Works seamlessly on different screen sizes

### 🎨 Beautiful UI Design
- Modern, gradient-based color scheme
- Smooth animations and transitions
- Responsive design for all devices
- Professional typography and spacing

### 🔐 Authentication System
- **Sign In Page**: Login with email and password
- **Sign Up Page**: Create new account with form validation
- **Social Login**: Social authentication options (Facebook, Google, Twitter)
- **Password Recovery**: "Forgot password" functionality

### 📄 Portfolio Pages
- **Home Page**: Eye-catching landing page with hero section
- **About Page**: Detailed information about the developer
  - About Me section
  - My Journey section
  - Beyond Code section
  - Looking Ahead section
- **Work/Portfolio Page**: Showcase of projects
- **Features Page**: Highlight key skills and features
- **Contact Page**: Get in touch section

### ❌ Error Handling
- **404 Page**: Beautiful error page for broken links
- User-friendly error messages
- Navigation back to home

---

## Tech Stack

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Styling with:
  - Flexbox & Grid layouts
  - Gradient backgrounds
  - CSS animations and transitions
  - Media queries for responsiveness
  - Custom properties (CSS variables)
- **Vanilla JavaScript** - Pure JS with no frameworks:
  - DOM manipulation
  - Event handling
  - Real-time cursor tracking
  - 3D model interaction
  - Form validation
  - Page navigation

### 3D & Graphics
- **Three.js** or native 3D model rendering
- 3D robot model animation
- Perspective and transformation effects

### Deployment
- **Netlify** - Static site hosting

---


## Key Features Explained

### 🎯 Cursor-Tracking 3D Robot

The highlight of this portfolio is the interactive 3D robot that responds to your mouse movement:

```javascript
// The robot's head rotates to follow cursor
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  // Calculate rotation angles
  const rotationY = (x - 0.5) * 30; // Horizontal rotation
  const rotationX = (y - 0.5) * 20; // Vertical rotation
  
  // Apply rotation to 3D model
  robot.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});
```

**How it works:**
1. Listens to mouse movement events
2. Calculates cursor position relative to viewport
3. Converts position to rotation angles
4. Updates 3D model transform in real-time
5. Creates smooth, fluid animation

### 🔐 Authentication Pages

**Login Features:**
- Email and password input validation
- "Forgot password" recovery link
- Social login options
- "Sign Up" navigation link
- Remember me checkbox (optional)

**Sign Up Features:**
- Full name, email, password fields
- Password confirmation
- Terms & conditions checkbox
- Social signup options
- Login link for existing users

### 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Media queries for tablets and desktop
- Touch-friendly buttons
- Optimized layouts for all screen sizes
- Mobile login page variant included

---

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code recommended)
- Git (optional, for cloning)

### Installation

#### 1. Clone or Download
```bash
# Clone the repository
git clone https://github.com/Anirmay/anirmay0-portfolio.git
cd anirmay0-portfolio

# Or download as ZIP and extract
```

#### 2. Open in Browser
```bash
# Simply open index.html in your browser
# Option 1: Double-click index.html
# Option 2: Use a local server
python -m http.server 8000
# Then visit http://localhost:8000
```

#### 3. (Optional) Use Live Server
```bash
# Using VS Code Live Server extension
# Right-click on index.html → "Open with Live Server"
```

---

## JavaScript Features

### Cursor Tracking System
```javascript
// Real-time cursor position tracking
document.addEventListener('mousemove', trackCursor);

function trackCursor(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  // Update 3D model rotation
  updateRobotPosition(mouseX, mouseY);
}
```

### Form Validation
```javascript
// Email validation
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Password strength check
function validatePassword(password) {
  return password.length >= 8;
}
```

### Page Navigation
```javascript
// Smooth navigation between pages
function navigateTo(page) {
  window.location.href = `${page}.html`;
}
```

---

## CSS Highlights

### Gradient Backgrounds
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Animations
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

animation: fadeIn 0.6s ease-in-out;
```

### 3D Transforms
```css
.robot {
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: rotateX(0deg) rotateY(0deg);
  transition: transform 0.1s ease-out;
}
```

---

## Deployment

### Netlify (Current)

**Deployment Details:**
- **URL**: https://anirmay0-portfolio.netlify.app
- **Branch**: main
- **Auto-deploy**: Enabled

**To redeploy:**
1. Make changes to your files
2. Commit and push to GitHub
3. Netlify automatically rebuilds and deploys

### Deploy Yourself

If you want to deploy your own version:

1. **GitHub Setup**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Netlify Deployment**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build settings:
     - **Base directory**: (leave empty)
     - **Build command**: (leave empty)
     - **Publish directory**: (leave empty - serves root)
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Go to Site Settings
   - Add custom domain
   - Follow DNS setup instructions

---

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance

- **Fast Load Time**: Pure HTML/CSS/JS (no dependencies)
- **Optimized Images**: Compressed image assets
- **Smooth Animations**: GPU-accelerated CSS transforms
- **Responsive**: Mobile-first responsive design

---

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Color contrast compliance

---

## Future Enhancements

- [ ] Add more interactive 3D models
- [ ] Email contact form integration
- [ ] Backend API for form submissions
- [ ] Dark/Light mode toggle
- [ ] Blog section
- [ ] Project filtering and sorting
- [ ] Animations with Framer Motion
- [ ] Analytics integration
- [ ] Progressive Web App (PWA)
- [ ] Multi-language support

---

## Troubleshooting

### 3D Robot Not Visible
- Ensure you're using a modern browser
- Check browser console for errors (F12)
- Verify 3D model file paths are correct

### Cursor Tracking Not Working
- Check if JavaScript is enabled
- Verify `index.js` is properly linked
- Clear browser cache and refresh

### Form Validation Issues
- Check input field IDs match JS code
- Verify form validation functions are called
- Check browser console for error messages

### Pages Not Loading
- Ensure HTML file names match navigation links
- Check that all files are in the same directory
- Use relative paths for links: `about.html` not `/about.html`

---

## Code Examples

### Track Cursor for 3D Model
```javascript
const robot = document.querySelector('.robot');

document.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.clientX) / 25;
  const yAxis = (window.innerHeight / 2 - e.clientY) / 25;
  
  robot.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});
```

### Email Validation
```javascript
function validateLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (!email.includes('@')) {
    alert('Please enter a valid email');
    return false;
  }
  
  if (password.length < 6) {
    alert('Password must be at least 6 characters');
    return false;
  }
  
  return true;
}
```

### Smooth Page Transition
```javascript
function smoothNavigate(href) {
  document.body.style.opacity = '0';
  setTimeout(() => {
    window.location.href = href;
  }, 300);
}
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - feel free to use it for personal or commercial projects.

---

## Author

Created with ❤️ by **Anirmay Khan**

- 📧 Email: anirmay.05khan@gmail.com 
- 🐙 GitHub: [github.com/Anirmay](https://github.com/Anirmay)
- 🌐 Portfolio: [anirmay0-portfolio.netlify.app](https://anirmay0-portfolio.netlify.app)

---

## Acknowledgments

- 3D model inspiration
- CSS animation techniques
- Cursor tracking implementation
- Beautiful gradient designs

---

**Made with passion and creativity! 🚀**
