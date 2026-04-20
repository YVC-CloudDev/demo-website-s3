# Cloud Launchpad

Beginner-friendly educational website for students learning AWS and GitHub through practical, portfolio-ready projects.

## Overview

Cloud Launchpad is a static multi-page website that teaches:
- AWS foundations
- Git and GitHub workflow
- Building and deploying a first cloud project
- Common troubleshooting and learning resources

## Project Structure

- `index.html` - Home page and learning path overview
- `aws-basics.html` - AWS beginner lessons
- `github-basics.html` - GitHub beginner lessons
- `project-lab.html` - Hands-on project lab
- `resources.html` - Curated learning resources
- `faq.html` - Frequently asked questions
- `styles/main.css` - Main site styling
- `scripts/main.js` - Interactive behavior (copy buttons, project-lab progress, FAQ toggles)
- `assets/` - Static assets
- `deployment/` - Deployment notes and docs

## Run Locally

Because this is a static site, you can run it in several simple ways:

1. Open `index.html` directly in your browser.
2. Or serve it locally with a lightweight server (recommended):

```bash
# from project root
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

See `deployment/README.md` for deployment-specific instructions.

## Last Updated

April 20, 2026
