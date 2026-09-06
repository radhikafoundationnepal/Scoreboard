# Signal // Cricket — Offline Run Guide

## Requirements
- Node.js 20 or newer
- pnpm or npm

## Run from source (recommended for editing)
1. Extract this zip.
2. Open a terminal in the extracted folder.
3. Run: pnpm install
4. Run: pnpm dev --host 127.0.0.1
5. Open the local URL shown by Vite.

## Production preview
1. Run: pnpm install
2. Run: pnpm build
3. Run: pnpm preview --host 127.0.0.1
4. Open the local URL shown by Vite.

## Overlay output
Open /overlay on the local server, for example: http://127.0.0.1:4173/overlay
Use that URL in vMix Browser Input or OBS Browser Source.

## Important
Do not double-click index.html directly. Use the local server command above because browser modules and the /overlay route need HTTP.
The app has no required backend/database. Scores are session-local unless a future data sync module is added.
