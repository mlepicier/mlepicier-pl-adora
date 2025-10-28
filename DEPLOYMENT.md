# GitHub Pages Deployment Guide

## What Was Changed

The following changes were made to enable GitHub Pages deployment:

### 1. **vite.config.ts**
- Added `base: '/mlepicier-pl-adora/'` to configure the base path for GitHub Pages
- This ensures all asset paths work correctly when deployed to a subdirectory

### 2. **package.json**
- Added `gh-pages` as a dev dependency
- Added deployment scripts:
  - `predeploy`: Runs build before deployment
  - `deploy`: Deploys the dist folder to GitHub Pages

### 3. **src/App.tsx**
- Changed from `BrowserRouter` to `HashRouter`
- HashRouter uses URL hashes (#) for routing, which works better with GitHub Pages
- Alternative: Keep BrowserRouter and add a 404.html fallback (more complex setup)

### 4. **GitHub Actions Workflow**
- Created `.github/workflows/deploy.yml`
- Automates deployment when pushing to main branch
- Uses GitHub's native Pages deployment action

### 5. **public/.nojekyll**
- Empty file that tells GitHub Pages not to process files with Jekyll
- Necessary for proper deployment of single-page applications

### 6. **README.md**
- Updated with deployment instructions and configuration details

## Deployment Methods

### Automated Deployment (Recommended)

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Build and deployment**, select **Source: GitHub Actions**

2. **Push to Main Branch:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor Deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the deployment workflow run
   - Once complete, your site will be live at: `https://yourusername.github.io/mlepicier-pl-adora/`

### Manual Deployment

1. **Install gh-pages (if not already installed):**
   ```bash
   cd mlepicier-pl-adora
   npm install
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Select **Source: Deploy from a branch**
   - Select **Branch: gh-pages** → **/ (root)**
   - Save

## Important Notes

### Base Path Configuration

If your repository name is different from `mlepicier-pl-adora`, update the base path in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
});
```

### Router Configuration

The app uses `HashRouter` for GitHub Pages compatibility. URLs will look like:
- `https://yourusername.github.io/mlepicier-pl-adora/#/`
- `https://yourusername.github.io/mlepicier-pl-adora/#/playbooks`
- `https://yourusername.github.io/mlepicier-pl-adora/#/pricing`

If you prefer clean URLs without the hash, you can:
1. Use `BrowserRouter` instead of `HashRouter`
2. Add a `404.html` file that redirects to `index.html`
3. This requires additional configuration

### Branch Configuration

The workflow deploys from the `main` branch by default. If your default branch is `master` or something else, update `.github/workflows/deploy.yml`:

```yaml
on:
  push:
    branches:
      - master  # Change to your branch name
```

## Troubleshooting

### Assets Not Loading

If CSS, JS, or images aren't loading:
1. Check that `base` in `vite.config.ts` matches your repository name
2. Verify GitHub Pages is enabled and the correct source is selected
3. Clear browser cache and hard reload (Ctrl+Shift+R)

### 404 Errors on Refresh

This is normal with `BrowserRouter` on GitHub Pages. The project uses `HashRouter` to avoid this issue.

### Build Failures

Check the Actions tab for detailed error logs. Common issues:
- TypeScript errors (fix with `npm run lint`)
- Missing dependencies (run `npm install`)
- Build configuration issues

## Testing Locally

Before deploying, test the production build locally:

```bash
npm run build
npm run preview
```

This will build and serve the production version at `http://localhost:4173`.

## Next Steps

1. Commit and push all changes
2. Enable GitHub Pages with GitHub Actions
3. Monitor the first deployment in the Actions tab
4. Visit your deployed site!

Your site will be available at:
`https://YOUR-USERNAME.github.io/mlepicier-pl-adora/`
