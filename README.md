# SDG Showcase - Future Action Summit Australia Application

A modern, creative React website showcasing Priyanshi Rana's application for the Future Action Summit Australia, highlighting commitment to Sustainable Development Goals (SDG 4, 5, and 9).

## Features

- **Hero Section**: Introduction with SDG badges and call-to-action buttons
- **Motivation Letter**: Full application motivation letter with SDG visualizations
- **Summit Goals**: What I hope to achieve from the summit
- **LinkedIn Posts**: Showcase of advocacy posts with preview cards
- **Proof of Work**: LinkedIn profile and key initiatives
- **Responsive Design**: Mobile-first, works on all devices
- **Creative & Bold Design**: SDG-themed color palette with modern UI

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with CSS variables
- **Google Fonts** - Poppins & Inter typography

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Adding Your Photo

1. Place your photo in the `public` folder and name it `photo.jpg`
2. Alternatively, update the image path in `src/components/Hero.jsx` (line 54) to match your photo filename
3. Supported formats: JPG, PNG, WebP
4. Recommended size: 400x500px or similar portrait orientation

### Adding LinkedIn Posts

Edit `src/components/LinkedInPosts.jsx` and update the `posts` array with your actual LinkedIn post URLs:

```javascript
const [posts] = useState([
  {
    id: 1,
    url: 'https://www.linkedin.com/feed/update/YOUR_POST_ID',
    title: 'Your Post Title',
    excerpt: 'Post excerpt or preview text...',
    thumbnail: 'optional-image-url.jpg'
  },
  // Add more posts...
])
```

### Updating Content

- **Motivation Letter**: Edit `src/components/MotivationLetter.jsx`
- **Summit Goals**: Edit `src/components/Achievements.jsx`
- **Proof of Work**: Edit `src/components/ProofOfWork.jsx`
- **LinkedIn Profile URL**: Update in `src/components/ProofOfWork.jsx` and `src/components/Footer.jsx`

### Color Scheme

Vibrant, playful colors inspired by GUUULP design are defined in `src/index.css`:
- Primary: `#6366F1` (Vibrant Indigo)
- Secondary: `#EC4899` (Hot Pink)
- Accent Colors: Bright Amber, Emerald Green, Purple, Cyan, Orange, Red
- SDG 4 (Education): `#3B82F6` (Bright Blue)
- SDG 5 (Gender Equality): `#EC4899` (Hot Pink)
- SDG 9 (Innovation): `#F97316` (Vibrant Orange)

The design features animated gradient backgrounds and vibrant color transitions throughout.

## Project Structure

```
sdg-showcase/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── MotivationLetter.jsx
│   │   ├── Achievements.jsx
│   │   ├── LinkedInPosts.jsx
│   │   ├── PostCard.jsx
│   │   ├── ProofOfWork.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
└── README.md
```

## Deployment

This project can be easily deployed to various hosting platforms. Below are step-by-step guides for deploying to **Vercel** and **Render**.

### Deploying to Vercel

Vercel is the easiest platform for deploying Vite + React applications with automatic deployments from Git.

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/sdg-showcase.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Click "Deploy"

3. **Your site is live!**
   - Vercel will provide a URL like `https://sdg-showcase.vercel.app`
   - Every push to your main branch will trigger automatic deployments

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be deployed!

### Deploying to Render

Render offers free static site hosting with automatic deployments from Git.

#### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/sdg-showcase.git
   git push -u origin main
   ```

#### Step 2: Create Static Site on Render

1. **Sign up/Login**
   - Go to [render.com](https://render.com) and sign up (free tier available)
   - Connect your GitHub account

2. **Create New Static Site**
   - Click "New +" → "Static Site"
   - Connect your GitHub repository (`sdg-showcase`)

3. **Configure Build Settings**
   - **Name**: `sdg-showcase` (or your preferred name)
   - **Branch**: `main` (or your default branch)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Environment**: `Node`

4. **Deploy**
   - Click "Create Static Site"
   - Render will build and deploy your site
   - Your site will be available at `https://sdg-showcase.onrender.com`

#### Render Configuration Notes

- **Free Tier**: Includes free SSL, custom domains, and automatic deployments
- **Build Time**: First build may take 2-3 minutes
- **Auto-Deploy**: Every push to your main branch triggers a new deployment
- **Custom Domain**: Add your domain in the Render dashboard under "Custom Domains"

### Environment Variables

If you need to add environment variables (for API keys, etc.):

**Vercel**:
- Go to Project Settings → Environment Variables
- Add your variables for Production, Preview, and Development

**Render**:
- Go to your Static Site → Environment
- Add your environment variables

### Troubleshooting

#### Build Fails

- Ensure `package.json` has the correct build script: `"build": "vite build"`
- Check that all dependencies are listed in `package.json`
- Review build logs in the platform dashboard

#### Routes Not Working (404 on refresh)

- **Vercel**: Create `vercel.json` in the root:
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
  ```
- **Render**: This is handled automatically for static sites

#### Assets Not Loading

- Ensure all assets are in the `public` folder
- Check that image paths use relative paths or start with `/`

### Custom Domain Setup

**Vercel**:
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions

**Render**:
1. Go to your Static Site → Custom Domains
2. Add your domain
3. Update your DNS records as instructed

## License

This project is created for the Future Action Summit Australia application.
