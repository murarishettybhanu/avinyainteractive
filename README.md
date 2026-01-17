
# Avinya Interactive Clone

A high-fidelity rebuild of the Avinya Interactive portfolio website using React, Vite, and plain CSS. This project demonstrates responsive design, modern CSS techniques (glassmorphism, gradients), and timeline animations.

## Tech Stack
-   **Framework:** React + Vite
-   **Styling:** Plain CSS (CSS Variables, BEM)
-   **Icons:** Lucide React
-   **Deployment:** GitHub Pages

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment to GitHub Pages

This project is configured to deploy automatically via GitHub Actions.

1.  Push changes to the `main` branch.
2.  Go to **Settings > Pages** in your GitHub repository.
3.  Under **Build and deployment**, select **GitHub Actions** as the source.
4.  The action will run and deploy the site to `https://<your-username>.github.io/avinyainteractive/`.

**Note:** The `vite.config.js` `base` path is set to `/avinyainteractive/`. If you rename the repository, update this value.
