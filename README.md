# Nathan's Pickleball Deals

A lightweight static landing page for Nathan Reed's pickleball ambassador referral links.

## Files

- `index.html` — page content and referral links
- `styles.css` — complete visual design
- `script.js` — minimal interaction script

## Deploy on GitHub Pages

If this repository is already published through GitHub Pages:

1. Replace the existing `index.html`, `styles.css`, and `script.js` files with these versions.
2. Commit the changes to the branch GitHub Pages currently uses.
3. GitHub Pages will update the live site automatically after the new commit is deployed.

If GitHub Pages is not already configured:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing these files (commonly `main`) and the `/ (root)` folder.
5. Save.

## Referral links currently included

- Cookiegrips — 10% off
- 11SIX24 — $10 off
- Montis Pickleball — $10 off

Referral URLs are stored directly in `index.html`.

## Updating a deal later

Search `index.html` for the brand name. Update the brand name, offer text, supporting copy, and `href` value as needed.

The visual theme is controlled with CSS custom properties at the top of `styles.css`, so the main palette can be changed quickly without rebuilding the page.
