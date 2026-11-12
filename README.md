# DCS Banner Management (React + Vite)

A modern, responsive Banner Management system built with React 19, Vite, Tailwind CSS, and Lucide Icons.

## Features
- **Responsive Layout**: Designed for mobile, tablet, and desktop viewports.
- **Dual-Asset Uploads**: Upload required desktop (`1920×1080`) and mobile (`768×1024`) images for each banner set with file-size validation (< 5 MB).
- **Banner Gallery**: Interactive cards with quick actions (Preview, Delete) and tap/hover reveal overlays.
- **Theme Switcher**: Instant Light / Dark mode toggle with persistent local preference.
- **Slide-out Navigation Drawer**: Clean admin drawer with navigation links and esc/backdrop close support.
- **Preview & Confirmation Modals**: Full-screen modal for image inspection and safe delete confirmations.
- **Toast Notifications**: Contextual feedback on actions (uploads, deletions, navigation).

## Scripts

### Development Server
Run the local Vite development server with HMR:
```bash
npm run dev
```

### Production Build
Create an optimized production bundle in `/dist`:
```bash
npm run build
```

### Preview Production Build
Preview the built app locally:
```bash
npm run preview
```

