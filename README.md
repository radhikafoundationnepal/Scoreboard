# Signal // Cricket Scoreboard

A vMix-style cricket broadcast control panel with a 1920×1080 clean overlay, fixed 1920×200 lower score strip, FOUR/SIX full-screen wipes, editable batting and bowling lists, country marks/logo URLs, and browser/IP output for vMix or OBS.

## GitHub Pages deployment

1. Upload the complete project to the `main` or `master` branch of your GitHub repository.
2. Open **Settings → Pages** in GitHub.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to the selected branch or run **Deploy Scoreboard to GitHub Pages** from the Actions tab.
5. GitHub will publish the site at:

```text
https://YOUR-USERNAME.github.io/Scoreboard/
```

The clean overlay output is:

```text
https://YOUR-USERNAME.github.io/Scoreboard/overlay
```

Use the overlay URL as a **vMix Browser Input**, **OBS Browser Source**, or as the browser source for an NDI bridge/scan converter.

## Local run

Requirements: Node.js 20 or newer.

```bash
pnpm install
pnpm dev --host 127.0.0.1
```

Open the local URL printed by Vite. For a production preview:

```bash
pnpm install
pnpm run build
pnpm run preview --host 127.0.0.1
```

## GitHub Pages build

The repository has a dedicated static build command:

```bash
pnpm run build:pages
```

The GitHub Actions workflow automatically sets the `/Scoreboard/` base path and copies the SPA fallback file required for direct `/overlay` access.

## Notes

The project is frontend-only and does not require a database or backend. The operator panel and clean output synchronize when opened in browser windows on the same origin using `BroadcastChannel`. For multi-PC live synchronization, add a WebSocket or hosted realtime service in a future iteration. Native NDI transmission still requires an NDI bridge/scan-converter or a vMix/OBS input that accepts the browser overlay URL.
