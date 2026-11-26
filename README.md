# Software Developer Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Perfect for showcasing your projects, skills, and professional experience.

## Features

- **Modern Design**: Beautiful dark theme with gradient accents and smooth animations
- **Fully Responsive**: Works great on mobile, tablet, and desktop
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Professional background and expertise overview
- **Skills Section**: Organized by category (Frontend, Backend, Tools)
- **Projects Section**: Showcase your work with descriptions and tags
- **Contact Section**: Contact information and message form

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Customization Guide

### Update Personal Information

**`src/components/Hero.tsx`**: Replace "Your Name", headline, and description

**`src/components/About.tsx`**: Update about text, replace emoji, customize expertise list

**`src/components/Contact.tsx`**: Update email, location, and social media links

### Update Skills

**`src/components/Skills.tsx`**:
```typescript
const skills = [
  {
    category: 'Your Category',
    items: ['Skill 1', 'Skill 2', 'Skill 3']
  },
];
```

### Update Projects

**`src/components/Projects.tsx`**:
```typescript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description...',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    link: 'https://your-project-link.com'
  },
];
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
```

## Tech Stack

- Next.js 16 with App Router
- TypeScript
- Tailwind CSS
- ESLint

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Connect your repository
4. Deploy automatically

### Other Options
- Netlify
- AWS Amplify
- Self-hosted

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
