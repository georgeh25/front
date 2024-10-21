# Developer Portfolio

This is a developer portfolio website built with Next.js, showcasing projects, skills, and professional experience.

## Features

- Responsive design
- Dynamic content loading from a backend API
- Sections for About Me, Projects, Technologies, and Work Experience
- Social media links

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- A backend API (Make sure you have the API URL)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/developer-portfolio.git
   ```

2. Navigate to the project directory:

   ```
   cd developer-portfolio
   ```

3. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

4. Create a `.env.local` file in the root directory and add your API URL:
   ```
   NEXT_PUBLIC_API_BASE_URL=https://your-api-url.com
   ```

## Development

To run the development server:

```
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Deployment

### Building for Production

To create a production build:

```
npm run build
# or
yarn build
```

### Running in Production

After building, you can start the production server:

```
npm start
# or
yarn start
```

### Deploying to a Hosting Platform

This project can be easily deployed to platforms like Vercel, Netlify, or any other platform that supports Next.js applications.

#### Deploying to Vercel

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and sign up or log in.
3. Click on "Import Project" and select your GitHub repository.
4. Vercel will automatically detect that it's a Next.js project and set up the build settings.
5. Add your environment variables (like `NEXT_PUBLIC_API_BASE_URL`) in the Vercel project settings.
6. Deploy the project.

#### Deploying to Other Platforms

For other platforms, follow their specific guidelines for deploying Next.js applications. Generally, you'll need to:

1. Set up your build command as `next build`
2. Set your start command as `next start`
3. Configure your environment variables on the platform

## Environment Variables

- `NEXT_PUBLIC_API_BASE_URL`: The base URL of your backend API

Make sure to set this environment variable in your deployment platform for production use.
