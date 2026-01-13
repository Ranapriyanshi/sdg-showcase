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

## License

This project is created for the Future Action Summit Australia application.
