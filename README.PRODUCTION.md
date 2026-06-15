# Orange Spa — Local Run & Build

Development:

```bash
# install deps
npm install

# run dev server
npm run dev
```

Production build:

```bash
npm run build
npm start
```

Notes:
- Place gallery and hero images under `public/gallery` and `public/hero` respectively.
- Brand color is defined in `src/lib/siteConfig.js` and `src/app/globals.css` as `--brand` (#F97519).
- Reusable components: `src/components/Button.jsx` and `src/components/FloatingButton.jsx`.
